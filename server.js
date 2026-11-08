'use strict';
// Local-only Greenie image manager. Do not expose this service directly to the internet.
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
app.disable('x-powered-by');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);
const CONFIG_PATH = process.env.ADMIN_CONFIG_PATH ? path.resolve(process.env.ADMIN_CONFIG_PATH) : path.join(__dirname, 'config.json');
const IMAGE_ROOT = path.resolve(__dirname, 'img');
const PUBLIC_ORIGIN = process.env.PUBLIC_ORIGIN || `http://localhost:${PORT}`;
const UPLOAD_LIMIT = 5 * 1024 * 1024;
const MAX_PIXELS = 16000000;
const ALLOWED = new Set([
  'hero-macro-tea.webp',
  'logo.webp',
  'favicon.png',
  'shan-tuyet-ancient-tea.webp',
  'acient-tea/picking-tea.webp',
  'cashew-w180.webp',
  'Homepage.webp',
  'artisanal-cane-sugar.webp',
  'artisanal-sugar/boilling-sugar.webp'
]);

function passwordHash(password, salt) {
  return crypto.scryptSync(password, Buffer.from(salt, 'hex'), 64).toString('hex');
}
function safeEqualHex(a, b) {
  if (!/^[a-f\d]{128}$/i.test(a || '') || !/^[a-f\d]{128}$/i.test(b || '')) return false;
  return crypto.timingSafeEqual(Buffer.from(a, 'hex'), Buffer.from(b, 'hex'));
}
function strongPassword(password) {
  return typeof password === 'string' && password.length >= 14 && password.length <= 256;
}
function saveConfig(config) {
  const tmp = CONFIG_PATH + '.' + crypto.randomBytes(8).toString('hex') + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(config, null, 2), { mode: 0o600, flag: 'wx' });
  fs.renameSync(tmp, CONFIG_PATH);
  fs.chmodSync(CONFIG_PATH, 0o600);
}
function newConfig(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  return { username: 'admin', algorithm: 'scrypt', salt, passwordHash: passwordHash(password, salt) };
}
// Never create a known default password. Existing legacy hashes require a forced reset.
let adminConfig;
const resetPassword = process.env.ADMIN_RESET_PASSWORD || undefined;
if (resetPassword !== undefined && !strongPassword(resetPassword)) {
  throw new Error('ADMIN_RESET_PASSWORD must contain 14–256 characters.');
}
if (resetPassword) {
  adminConfig = newConfig(resetPassword);
  saveConfig(adminConfig);
} else if (fs.existsSync(CONFIG_PATH)) {
  adminConfig = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  if (adminConfig.algorithm !== 'scrypt' || !adminConfig.salt || !adminConfig.passwordHash) {
    throw new Error('Legacy administrator credentials are disabled. Set ADMIN_RESET_PASSWORD to a new strong password before starting.');
  }
} else {
  const initial = process.env.ADMIN_INITIAL_PASSWORD;
  if (!strongPassword(initial)) {
    throw new Error('Set ADMIN_INITIAL_PASSWORD (14–256 characters) before the first start.');
  }
  adminConfig = newConfig(initial);
  saveConfig(adminConfig);
}

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  if (req.secure) res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  next();
});
app.use(express.json({ limit: '8kb', type: 'application/json' }));

// Simple memory-based throttling for a single local admin instance.
const attempts = new Map();
function limitAuth(req, res, next) {
  const ip = req.socket.remoteAddress || 'local';
  const now = Date.now();
  let bucket = attempts.get(ip);
  if (!bucket || now > bucket.until) bucket = { count: 0, until: now + 15 * 60 * 1000 };
  attempts.set(ip, bucket);
  if (bucket.count >= 8) {
    res.setHeader('Retry-After', String(Math.max(1, Math.ceil((bucket.until - now) / 1000))));
    return res.status(429).send('Too many authentication attempts.');
  }
  req.authBucket = bucket;
  next();
}
function requireAuth(req, res, next) {
  res.setHeader('Cache-Control', 'no-store');
  const value = req.get('authorization') || '';
  const m = /^Basic ([A-Za-z0-9+/=]+)$/.exec(value);
  let username = '', password = '';
  if (m) {
    const decoded = Buffer.from(m[1], 'base64').toString('utf8');
    const sep = decoded.indexOf(':');
    if (sep >= 0) { username = decoded.slice(0, sep); password = decoded.slice(sep + 1); }
  }
  const good = username === adminConfig.username &&
    password.length <= 256 &&
    safeEqualHex(passwordHash(password, adminConfig.salt), adminConfig.passwordHash);
  if (good) {
    req.authBucket.count = 0;
    return next();
  }
  req.authBucket.count++;
  res.setHeader('WWW-Authenticate', 'Basic realm="Greenie Image Admin", charset="UTF-8"');
  return res.status(401).send('Authentication required.');
}
function sameOrigin(req, res, next) {
  // Reject cross-origin writes even if a browser has cached Basic Auth credentials.
  const origin = req.get('origin');
  const site = req.get('sec-fetch-site');
  const expected = new Set([PUBLIC_ORIGIN]);
  if (HOST === '127.0.0.1' || HOST === 'localhost') {
    expected.add(`http://127.0.0.1:${PORT}`);
    expected.add(`http://localhost:${PORT}`);
  }
  if ((origin && !expected.has(origin)) || (site && site === 'cross-site')) {
    return res.status(403).send('Cross-origin administrative request denied.');
  }
  next();
}

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(IMAGE_ROOT, { dotfiles: 'deny' }));
app.use('/products', express.static(path.join(__dirname, 'products')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/admin.html', limitAuth, requireAuth, (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: UPLOAD_LIMIT, files: 1, fields: 1, fieldSize: 200, parts: 2 },
  fileFilter(req, file, cb) {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)) {
      return cb(new Error('Only JPEG, PNG and WebP are accepted.'));
    }
    cb(null, true);
  }
});
app.post('/upload', limitAuth, requireAuth, sameOrigin, (req, res, next) => {
  upload.single('image')(req, res, err => {
    if (err) return res.status(400).json({ message: 'Invalid image upload or file too large.' });
    next();
  });
}, async (req, res) => {
  try {
    const filename = typeof req.body.filename === 'string' ? req.body.filename : '';
    if (!ALLOWED.has(filename) || !req.file || !req.file.buffer) {
      return res.status(400).json({ message: 'Invalid upload target.' });
    }
    const extension = path.extname(filename).toLowerCase();
    const expectedFormat = extension === '.png' ? 'png' : 'webp';
    const img = sharp(req.file.buffer, { limitInputPixels: MAX_PIXELS, animated: false, failOn: 'error' });
    const meta = await img.metadata();
    if (!['jpeg', 'png', 'webp'].includes(meta.format) ||
        !meta.width || !meta.height || meta.width * meta.height > MAX_PIXELS) {
      return res.status(400).json({ message: 'Unsupported or oversized image.' });
    }
    // Re-encode decoded pixels, removing embedded metadata and active content.
    const output = expectedFormat === 'png' ? await img.png().toBuffer() : await img.webp({ quality: 85 }).toBuffer();
    if (output.length > 10 * 1024 * 1024) return res.status(400).json({ message: 'Processed image too large.' });
    const dest = path.resolve(IMAGE_ROOT, filename);
    if (!dest.startsWith(IMAGE_ROOT + path.sep)) return res.status(400).json({ message: 'Invalid target path.' });
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const tmp = dest + '.' + crypto.randomBytes(8).toString('hex') + '.tmp';
    try {
      fs.writeFileSync(tmp, output, { flag: 'wx', mode: 0o600 });
      fs.renameSync(tmp, dest);
    } finally {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    }
    return res.json({ success: true, filename });
  } catch (error) {
    console.error('Image upload failed:', error.message);
    return res.status(400).json({ message: 'Unable to process image.' });
  }
});

app.post('/change-password', limitAuth, requireAuth, sameOrigin, (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!strongPassword(newPassword) || typeof currentPassword !== 'string' || currentPassword.length > 256) {
    return res.status(400).json({ message: 'The new password must be 14–256 characters.' });
  }
  if (!safeEqualHex(passwordHash(currentPassword, adminConfig.salt), adminConfig.passwordHash)) {
    return res.status(403).json({ message: 'Current password is incorrect.' });
  }
  adminConfig = newConfig(newPassword);
  saveConfig(adminConfig);
  return res.json({ success: true });
});

app.listen(PORT, HOST, () => {
  console.log(`Greenie image admin listening on http://${HOST}:${PORT} (local-only by default)`);
});
