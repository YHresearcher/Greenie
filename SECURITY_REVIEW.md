# Greenie Vietnam — security review (2026-11-08)

## Critical findings in the previous code

1. Hardcoded known initial admin password: removed. No application default password exists in the new server.
2. A committed `config.json` containing a credential hash: removed from the current branch and added to `.gitignore`. **The old value remains in Git history**, which cannot be fixed by a normal commit. Rotate the password and consider coordinated history cleanup if necessary.
3. Arbitrary upload destinations from `req.body.filename`: replaced with an exact allowlist of image filenames.
4. Unrestricted uploads: now limited in size and count, decoded with Sharp, and re-encoded into PNG/WebP only. SVG and arbitrary file types are rejected.
5. Old Multer v1 with security advisories: updated package declaration to Multer 2.5.0. Reinstall and regenerate the lockfile before merging.
6. Accessible admin on all interfaces: defaults to loopback `127.0.0.1`. Production remote access must go through a correctly configured TLS reverse proxy / VPN, network allowlist and additional authorization controls.
7. Unrestricted CORS: removed, with cross-origin administrative writes denied.
8. No auth throttling: limited failed basic auth attempts in memory. This is an extra guard, not a substitute for a gateway / network policy.

## Mandatory before deploying

- Confirm where `server.js` actually runs; this review does not establish if the production website uses the Node backend.
- **Rotate the administrator password now**. The old initial password appeared in the public repository. Treat any previously deployed default as compromised.
- Set `ADMIN_INITIAL_PASSWORD` for fresh setups or `ADMIN_RESET_PASSWORD` to rotate an existing installation. Use a unique secret with at least 14 characters. Pass as process environment, never commit real values.
- The new server intentionally refuses to start with a legacy `config.json` unless `ADMIN_RESET_PASSWORD` is provided. This is a security migration, not a bug.
- Install dependencies with `npm install`, regenerate `package-lock.json`, commit the regenerated lockfile, run `npm ci`, `npm run check` and `npm audit --omit=dev`. The outdated lockfile was removed intentionally to prevent installations with Multer v1.
- Use HTTPS if access is provided through a reverse proxy and set `PUBLIC_ORIGIN` to the exact external HTTPS origin.
- Never publish `config.json`, backups or environment variables as public static files.
- Keep the admin server behind VPN, private network or strict IP allowlist. Basic Auth alone is insufficient for public internet exposure.
- Verify authorization, rejected upload names, invalid image data, oversized uploads, password rotation and form behaviour in a staging environment.
- Review individual product pages for inaccurate commercial and certification claims (separate from technical security).

## Residual limitations

- No production penetration test, live TLS/security-header check, npm dependency audit or successful runtime integration test was completed.
- In-memory auth throttling does not coordinate multiple application instances and is reset on restart.
- Existing clients use HTTP Basic Auth; use HTTPS for any non-local access.
- GitHub Pages ignores server-side authentication. If served as a static page, `admin.html` may be viewable but cannot use the secured Node APIs. Prefer keeping the admin UI out of public static deployment.
- A previously exposed credential hash remains in the history until explicitly cleaned up. History rewriting affects clones and requires careful coordination.
- The mailto RFQ workflow never stores customer data, but depends on a visitor email client; a real backend will require server validation, anti-spam and privacy safeguards.
