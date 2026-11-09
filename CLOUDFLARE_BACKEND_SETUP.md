# Greenie Cloudflare Workers Backend v1 — RFQ

This PR adds **only a public RFQ write endpoint**. It does not expose a dashboard, admin login, database listing API or image-upload API.

## Security / deployment prerequisites

Production backend requires BOTH Cloudflare D1 and Turnstile. It is **fail-closed**: without configuration, POST /api/rfq returns HTTP 503 and saves nothing. No database ID or secrets are committed.

1. D1 database `greenie-rfq` has been identified by the owner. Confirm its name matches in Cloudflare dashboard before any remote migration.
2. The provided D1 database ID is already configured in `wrangler.jsonc` as binding `DB`. The static asset binding `ASSETS` is also configured and the Worker runs first only for `/api/*`.
3. Apply migrations: `npx wrangler d1 migrations apply greenie-rfq --remote` using an authorized machine or Cloudflare workflow. Do **not** run against the wrong account.
4. Create a Cloudflare Turnstile widget for the exact production/preview hostname. Obtain site key (public) and secret key (private).
5. Configure the secret `TURNSTILE_SECRET_KEY` through Workers → Settings → Variables and Secrets or `npx wrangler secret put TURNSTILE_SECRET_KEY`. **Do not paste secrets into GitHub or chat.**
6. Update the frontend to render the Turnstile widget using the public site key and submit a JSON request with `Idempotency-Key`. Until then the existing `mailto:` flow remains active.
7. Deploy a preview, verify an accepted RFQ is inserted into D1, verify invalid, duplicate, cross-origin and bot requests are rejected.
8. Set up Cloudflare rate limiting/WAF for POST /api/rfq before production use. Turnstile is not a replacement for quotas/rate limits.
9. Establish privacy notice, retention period, deletion process and restricted access for D1 customer information.

## API specification

POST /api/rfq (same-origin JSON only)
- Headers: `Content-Type: application/json`, `Idempotency-Key: [16-100 characters of A-Z,a-z,0-9,_,-]`
- Required: company, contact, email, country, product, turnstileToken
- Optional: grade, quantity, port, incoterm, services, message
- If configured and verified, returns HTTP 201: `{ "ok": true, "reference": "..." }`
- Otherwise returns a JSON error with HTTP 400/403/413/415/422/503.
- A successful idempotent replay returns same reference without duplicating the database record.

### Data design
- Table `rfq`, indexed by status and created_at.
- No customer data exposed through public GET endpoints.
- No backend emails are sent yet. D1 records are not a substitute for notifications or a CRM dashboard.
- Cloudflare D1 backup/restore and retention require owner policy.

## Existing static assets
`wrangler.jsonc` now adds a Worker module entry point `main: "src/worker.js"`. All other routes are forwarded to Cloudflare static asset binding `ASSETS`. It preserves the static site's protected-path export.

## Do not do
- Never commit actual Turnstile secret, D1 access token, credentials or customer information.
- Do not merge until deployment owner has configured D1 and Turnstile if expecting live submissions.
- Do not switch off the mailto fallback before a real integration test.

## Deployment readiness (2026-11-08)

- D1 UUID has been added to `wrangler.jsonc`; this does **not** prove Cloudflare account access, table creation, or a successful remote migration.
- Worker route setup has explicit `ASSETS` binding and `run_worker_first: ["/api/*"]` to avoid disrupting static website routes.
- Do not execute `wrangler deploy` or connect production until the migration, Turnstile verification, browser form integration, and end-to-end tests have been completed.
- Database IDs are resource identifiers, not access tokens. Keep API tokens and Turnstile secrets in Cloudflare secret storage.
