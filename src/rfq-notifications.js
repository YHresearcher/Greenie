// Cloudflare D1 transactional outbox notifications for newly inserted RFQs.
// Delivery is at-least-once: external email acceptance and DB acknowledgement cannot be atomic.
const NOTIFICATION_LIMIT = 10;
const MAX_ATTEMPTS = 8;
const RETRY_MINUTES = [1, 5, 15, 30, 60, 120, 240, 480];
const EMAIL_TO = 'hello@greenievietnam.biz.vn';
const EMAIL_FROM = 'notifications@greenievietnam.biz.vn';

function validReference(id) { return typeof id === 'string' && /^[a-zA-Z0-9_-]{16,100}$/.test(id); }

export async function deliverPendingRfqNotifications(env, clock = () => new Date()) {
  // Do not consume queued notifications if Email Service is not configured.
  if (!env?.DB || typeof env?.EMAIL?.send !== 'function') return { skipped: true, processed: 0 };
  let processed = 0;
  const now = clock().toISOString();
  const candidates = await env.DB.prepare(
    `SELECT n.rfq_id
     FROM rfq_notifications n
     WHERE ((n.status = 'pending' AND n.next_attempt_at <= ?)
       OR (n.status = 'processing' AND n.lease_until <= ?))
       AND n.attempts < ?
     ORDER BY n.created_at ASC LIMIT ?`
  ).bind(now, now, MAX_ATTEMPTS, NOTIFICATION_LIMIT).all();

  for (const entry of candidates.results || []) {
    if (!validReference(entry.rfq_id)) continue;
    const leaseUntil = new Date(clock().getTime() + 3 * 60 * 1000).toISOString();
    // Claim transactionally; parallel cron invocations cannot process same row at the same time.
    const claim = await env.DB.prepare(
      `UPDATE rfq_notifications
       SET status = 'processing', lease_until = ?, attempts = attempts + 1, last_error_code = NULL
       WHERE rfq_id = ? AND attempts < ?
         AND ((status = 'pending' AND next_attempt_at <= ?)
           OR (status = 'processing' AND lease_until <= ?))
       RETURNING rfq_id, attempts`
    ).bind(leaseUntil, entry.rfq_id, MAX_ATTEMPTS, now, now).first();
    if (!claim) continue;

    let messageId = null;
    let errorCode = null;
    try {
      const lead = await env.DB.prepare(
        `SELECT id, company, email, country, product, created_at
         FROM rfq WHERE id = ? LIMIT 1`
      ).bind(entry.rfq_id).first();
      if (!lead) {
        errorCode = 'RFQ_MISSING';
      } else {
        const txt = [
          'New Greenie Vietnam wholesale RFQ',
          'Reference: ' + lead.id,
          'Company: ' + lead.company,
          'Business email: ' + lead.email,
          'Country: ' + lead.country,
          'Product: ' + lead.product,
          'Received: ' + lead.created_at,
          '',
          'Review the request in the secured Cloudflare D1 database.',
          'Do not reply to this automated notification.'
        ].join('\n');
        const outcome = await env.EMAIL.send({
          to: EMAIL_TO,
          from: EMAIL_FROM,
          subject: 'Greenie RFQ received: ' + lead.id,
          text: txt
        });
        if (!outcome || typeof outcome.messageId !== 'string' || !outcome.messageId) {
          errorCode = 'PROVIDER_NO_ACK';
        } else {
          messageId = outcome.messageId;
        }
      }
    } catch (err) {
      // Record only a bounded provider error category, never customer PII or raw responses.
      const raw = typeof err?.code === 'string' ? err.code : 'EMAIL_SEND_FAILED';
      errorCode = /^[A-Z0-9_]{1,60}$/.test(raw) ? raw : 'EMAIL_SEND_FAILED';
    }

    if (messageId) {
      await env.DB.prepare(
        `UPDATE rfq_notifications SET status='sent', sent_at=?, provider_message_id=?,
          lease_until=NULL, last_error_code=NULL
         WHERE rfq_id=? AND status='processing' AND lease_until=?`
      ).bind(clock().toISOString(), messageId, entry.rfq_id, leaseUntil).run();
    } else {
      const attempts = Number(claim.attempts);
      const exhausted = attempts >= MAX_ATTEMPTS;
      const after = RETRY_MINUTES[Math.min(attempts - 1, RETRY_MINUTES.length - 1)];
      const retryAt = new Date(clock().getTime() + after * 60 * 1000).toISOString();
      await env.DB.prepare(
        `UPDATE rfq_notifications SET status=?, next_attempt_at=?, lease_until=NULL,
           last_error_code=? WHERE rfq_id=? AND status='processing' AND lease_until=?`
      ).bind(exhausted ? 'failed' : 'pending', retryAt, errorCode || 'EMAIL_SEND_FAILED', entry.rfq_id, leaseUntil).run();
    }
    processed++;
  }
  return { skipped: false, processed };
}
