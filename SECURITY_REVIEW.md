# Greenie Vietnam — security review (2026-11-08)

## Critical findings in the previous code

1. Hardcoded known initial admin password: removed. No application default password exists in the new server.
2. A committed `config.json` containing a credential hash: removed from the current branch and added to `.gitignore`. **The old value remains in Git history**, which cannot be fixed by a normal commit. Rotate the password and consider coordinated history cleanup if necessary.
3. Arbitrary upload destinations from `req.body.filename`: replaced with an exact allowlist of image filenames.
4. Unrestricted uploads: now limited in size and count, decoded with Sharp, and re-encoded into PNG/WebP only. SVG and arbitrary file types are rejected.
5. Old Multer v1 with security advisories: updated to Multer 2.5.0, alongside Express 5.3.0 and Sharp 0.35.5. A new lockfile is committed.
6. Accessible admin on all interfaces: defaults to loopback `127.0.0.1`. Production remote access must go through a correctly configured TLS reverse proxy / VPN, network allowlist and additional authorization controls.
7. Unrestricted CORS: removed, with cross-origin administrative writes denied.
8. No auth throttling: limited failed basic auth attempts in memory. This is an extra guard, not a substitute for a gateway / network policy.

## Mandatory before deploying

- Confirm where `server.js` actually runs; this review does not establish if the production website uses the Node backend.
- **Rotate the administrator password now**. The old initial password appeared in the public repository. Treat any previously deployed default as compromised.
- Set `ADMIN_INITIAL_PASSWORD` for fresh setups or `ADMIN_RESET_PASSWORD` to rotate an existing installation. Use a unique secret with at least 14 characters. Pass as process environment, never commit real values.
- The new server intentionally refuses to start with a legacy `config.json` unless `ADMIN_RESET_PASSWORD` is provided. This is a security migration, not a bug.
- Dependencies are now reproducibly locked. Run `npm ci`, `npm run check`, `npm test` and `npm audit --omit=dev` before deployment. GitHub Actions runs these checks on the Pull Request.
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

## Validation record

- GitHub Actions tested the upgraded Express/Multer/Sharp dependency set.
- Automated security integration checks passed for admin authentication, upload rejection, cross-origin writes and password rules.
- `npm audit --omit=dev` reported zero vulnerabilities on the validated dependency set.
- These checks do not constitute a production penetration test or confirmation of the hosting configuration.
