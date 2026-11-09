# Cloudflare post-deploy validation request

Requested: 2026-11-08 after changing Cloudflare Workers build root to repository root.

Validation workflow: .github/workflows/cloudflare-preview-check.yml

Expected: homepage/product routes HTTP 200; /admin, /admin.html, /server.js, /config.json HTTP 404; review security headers and /blog status.

This is an audit-only commit: no production configuration or site content is changed.
