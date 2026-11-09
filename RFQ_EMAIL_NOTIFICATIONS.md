# Greenie RFQ email notifications — Deployment checklist

This branch adds a **D1 transactional outbox**, Cloudflare Email Service notification binding, a five-minute scheduled Worker job, delivery retry states and tests. **Do not merge/deploy until Email Service is enabled and a staging test succeeds.**

## Flow
1. Existing RFQ POST validates Turnstile and inserts into `rfq`. D1 migration `0002_rfq_notifications.sql` creates a database trigger that atomically enqueues one `rfq_notifications` item per newly inserted RFQ. Duplicate idempotency keys do not create another notification.
2. Scheduled Worker runs `*/5 * * * *`, claims pending messages with a lease and sends via `env.EMAIL.send`.
3. On acknowledgement, saves provider message ID and `sent_at`. On failure, records a bounded error code and schedules retries; up to eight attempts. This does not block or alter buyer's RFQ submission.
4. **Delivery is at-least-once, not exactly-once**: if sending succeeds but D1's sent-status update fails, a later lease retry may send a duplicate email. The RFQ reference in the subject helps identify duplicates.

## Cloudflare setup required
- Verify the actual inbox address `hello@greenievietnam.biz.vn` as an allowed Email Service recipient in the Cloudflare account. If this is an alias not hosted there, configure an account-level verified forwarding destination instead and change `send_email.destination_address` and `EMAIL_TO` in source before deployment.
- Onboard `greenievietnam.biz.vn` as a **sender domain** in **Cloudflare Email Service**. Confirm that `notifications@greenievietnam.biz.vn` is permitted for sending. Check DNS/SPF/DKIM changes with the email administrator: **do not change MX or DNS automatically**. Cloudflare Email Service requires Cloudflare DNS for its domain onboarding.
- Configuration in `wrangler.jsonc` uses `send_email` with `name: EMAIL` and `destination_address` restricted to `hello@greenievietnam.biz.vn`. **No API token or email secret is committed.**
- Apply only the new migration against the intended database: `npx wrangler d1 migrations apply greenie-rfq --remote`. Confirm `rfq_notifications` exists. The migration automatically queues notifications for *new* requests, not historical RFQs.
- Before a staging deployment, validate the sender domain and destination; a binding can fail at deploy or send time if not enabled.
- Inspect production/staging `rfq_notifications` via Cloudflare D1 Console:
  ```sql
  SELECT status, COUNT(*) AS count FROM rfq_notifications GROUP BY status;
  SELECT rfq_id,status,attempts,last_error_code,sent_at
  FROM rfq_notifications ORDER BY created_at DESC LIMIT 20;
  ```
- Test a new RFQ through staging form, confirm (1) RFQ D1 record inserted (2) one outbox row (3) sent status/message ID (4) email actually received. Test duplicate form submission / idempotency and provider downtime.
- D1 logs and Email Service dashboards must be checked by the authorized Cloudflare account owner; GitHub CI cannot prove actual email delivery.

## Reliability and privacy
- Outbox stores RFQ identifiers and delivery metadata; user contact information stays in the existing RFQ table.
- Email includes buyer company/email/country/product to make responding easier. Keep recipient access restricted; do not log email body or raw PII.
- No public notification-list/read API is added.
- Emails may be delayed at least five minutes plus retries. The scheduler never runs without a deployed Cloudflare trigger.
- Monitoring of failed rows and D1 backups/retention are operational tasks; no automatic escalation for permanently failed rows yet.
- No DNS change, production deploy, or customer data write is performed by this PR.
