const PRODUCT_OPTIONS = new Set(['Cashew Kernels', 'Artisan Cane Sugar', 'Shan Tuyet Ancient Tea', 'Other / OEM']);
const TERM_OPTIONS = new Set(['', 'FOB', 'CIF']);
const SERVICE_OPTIONS = new Set(['', 'None specified', 'OEM / Private Label', 'Halal documentation', 'Independent inspection', 'Multiple requirements (describe below)']);
const KEYS = ['company', 'contact', 'email', 'country', 'product', 'grade', 'quantity', 'port', 'incoterm', 'services', 'message'];
const LIMITS = { company: 150, contact: 100, email: 254, country: 100, product: 80, grade: 100, quantity: 80, port: 120, incoterm: 20, services: 100, message: 2500 };

function result(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', ...extra } });
}
function clean(data) {
  const value = {};
  for (const key of KEYS) {
    if (data[key] !== undefined && typeof data[key] !== 'string') return null;
    value[key] = (data[key] || '').trim();
    if (value[key].length > LIMITS[key] || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value[key])) return null;
  }
  return value;
}
function valid(data) {
  return data && data.company.length >= 2 && data.contact.length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.country.length >= 2 &&
    PRODUCT_OPTIONS.has(data.product) && TERM_OPTIONS.has(data.incoterm) &&
    SERVICE_OPTIONS.has(data.services);
}
function corsPolicy(request, url) {
  const origin = request.headers.get('origin');
  return origin === url.origin && request.headers.get('sec-fetch-site') !== 'cross-site';
}
async function verifyCaptcha(token, secret, ip, fetcher) {
  if (!token || token.length > 2048 || !secret) return false;
  const params = new URLSearchParams({ secret, response: token });
  if (ip) params.set('remoteip', ip);
  try {
    const response = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', body: params, signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) return false;
    const data = await response.json();
    return data.success === true;
  } catch { return false; }
}
export async function handleRfq(request, env, fetcher = fetch) {
  if (request.method !== 'POST') return result({ error: 'Method not allowed' }, 405, { allow: 'POST' });
  const url = new URL(request.url);
  if (!corsPolicy(request, url)) return result({ error: 'Origin not allowed' }, 403);
  if (!env?.DB || !env?.TURNSTILE_SECRET_KEY) return result({ error: 'RFQ service not configured' }, 503, { 'retry-after': '300' });
  if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) return result({ error: 'JSON required' }, 415);
  if (Number(request.headers.get('content-length') || 0) > 10000) return result({ error: 'Request too large' }, 413);
  let payload;
  try {
    const text = await request.text();
    if (text.length > 10000) return result({ error: 'Request too large' }, 413);
    payload = JSON.parse(text);
  } catch { return result({ error: 'Invalid JSON' }, 400); }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return result({ error: 'Invalid request' }, 400);
  // Honeypot is intentionally not rendered to human visitors. Respond generically to bots.
  if (payload.website) return result({ error: 'Request not accepted' }, 400);
  const fields = clean(payload);
  if (!valid(fields)) return result({ error: 'Please check the required fields' }, 422);
  const key = request.headers.get('idempotency-key');
  if (!key || !/^[a-zA-Z0-9_-]{16,100}$/.test(key)) return result({ error: 'Idempotency key required' }, 400);

  const verified = await verifyCaptcha(payload.turnstileToken, env.TURNSTILE_SECRET_KEY, request.headers.get('cf-connecting-ip'), fetcher);
  if (!verified) return result({ error: 'Verification failed. Please try again.' }, 403);

  // D1 UNIQUE idempotency key prevents duplicate leads if client retries after a timeout.
  try {
    await env.DB.prepare(
      `INSERT INTO rfq (id, company, contact, email, country, product, grade, quantity, port, incoterm, services, message, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
       ON CONFLICT(id) DO NOTHING`
    ).bind(key, ...KEYS.map(name => fields[name])).run();
    return result({ ok: true, reference: key }, 201);
  } catch {
    return result({ error: 'Unable to save inquiry. Please try again later.' }, 503);
  }
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/rfq') return handleRfq(request, env);
    return env.ASSETS.fetch(request);
  }
};
