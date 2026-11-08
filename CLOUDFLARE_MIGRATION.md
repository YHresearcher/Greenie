# Greenie Vietnam — Cloudflare Pages migration

## Deployment decision

This branch prepares a **safe preview** of the static B2B website. It does **not** change DNS or connect a Cloudflare account.

Use **Cloudflare Pages → Connect to Git** and select `YHresearcher/Greenie`.

- Project name: `greenie-vietnam` (or another available name)
- Production branch: `main` **only after merge and review**
- Framework preset: None
- Root directory: `/`
- Build command: `npm run build:cloudflare`
- Build output directory: `dist`
- Node.js version: 22
- No secrets/environment variables are required for static preview

Cloudflare Pages generates a `*.pages.dev` preview URL. Review it **before attaching the custom domain**.

## Export contents / safety

The build copies only `index.html`, `404.html`, public assets under `css/`, `js/`, `img/` and `products/`, and Cloudflare `_headers` / `_redirects`.
It intentionally excludes `admin.html`, `server.js`, `config.json`, deployment scripts, Node credentials, `.git` and package files.
Image manager and Node administration **will not operate on Cloudflare Pages**. Do not expose the old admin interface as an unprotected static page. Build a new authenticated admin service separately if needed.

A restrictive-but-compatible static Content Security Policy is included. It still allows inline JavaScript due to the existing site's inline loader attributes. Tighten this after refactoring those attributes.

## Blog migration blocker

The repository contains `deploy.sh` with an old Nginx reverse proxy to a self-hosted **Ghost blog** at `/blog`.
The current GitHub repository does not contain a deployable static copy of that Ghost blog. **Cloudflare Pages cannot automatically take over Ghost at `/blog`.**

Before attaching `greenievietnam.biz.vn`, choose and verify one of these:
1. Export Ghost content and import into static Astro/another blog, including images and redirects; or
2. Retain Ghost on a dedicated hostname (for example `blog.greenievietnam.biz.vn`) and implement approved, verified redirects from the old `/blog` URLs; or
3. Design a separate Worker reverse proxy for Ghost with correct caching, TLS, routing and origin protection.

Do not move production DNS before resolving this. Otherwise `/blog` and its article URLs may break.

## DNS migration / verification checklist

1. Deploy Pages preview and test home/product pages, images, WhatsApp, navigation, mobile, RFQ mailto and custom 404.
2. Test response headers (especially CSP), HTTPS and performance on preview.
3. Confirm where Ghost/blog is currently hosted and move/retain its routes appropriately.
4. Verify the domain registrar and DNS zone (including MX, SPF, DKIM, DMARC). Preserve email records.
5. Connect custom domain through Cloudflare Pages dashboard and follow the exact on-screen DNS instructions; **do not arbitrarily change nameservers or mail records**.
6. Verify apex and www behavior, canonical URLs, SEO redirects and 404 pages.
7. Keep the previous deployment available for rollback until stable.

## Local validation

Run `npm run build:cloudflare`. The build fails if an unexpected file is present inside a public asset folder, or if any protected source is accidentally included.
All server-side secrets should be rotated if previously exposed in public Git history.

## Not included

RFQ server-side submission/storage, Cloudflare Access authentication and CMS are separate tasks; the homepage still opens an email draft. No live Cloudflare deployment or DNS change was made by this repository branch.
