'use strict';
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const net = require('node:net');

let child, configDir, base, auth;
async function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
  });
}
before(async () => {
  configDir = fs.mkdtempSync(path.join(os.tmpdir(), 'greenie-admin-test-'));
  const port = await freePort();
  const password = 'test-unique-password-2026-random';
  base = 'http://127.0.0.1:' + port;
  auth = 'Basic ' + Buffer.from('admin:' + password).toString('base64');
  child = spawn(process.execPath, [path.join(__dirname, '..', 'server.js')], {
    cwd: path.join(__dirname, '..'),
    env: {
      ...process.env, NODE_ENV: 'test', HOST: '127.0.0.1', PORT: String(port),
      PUBLIC_ORIGIN: base, ADMIN_CONFIG_PATH: path.join(configDir, 'admin.json'),
      ADMIN_INITIAL_PASSWORD: password, ADMIN_RESET_PASSWORD: ''
    },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  let stderr = '';
  child.stderr.on('data', b => { stderr += b.toString(); });
  let started = false;
  for (let i = 0; i < 80; i++) {
    if (child.exitCode !== null) throw new Error('Admin exited before startup: ' + stderr);
    try {
      const r = await fetch(base + '/');
      if (r.status === 200) { started = true; break; }
    } catch (_) {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (!started) throw new Error('Admin server did not start: ' + stderr);
});
after(async () => {
  if (child && child.exitCode === null) {
    child.kill('SIGTERM');
    await new Promise(resolve => {
      child.once('exit', resolve);
      setTimeout(resolve, 1500).unref();
    });
  }
  if (configDir) fs.rmSync(configDir, { recursive: true, force: true });
});
test('Admin page rejects missing or incorrect credentials', async () => {
  assert.equal((await fetch(base + '/admin.html')).status, 401);
  assert.equal((await fetch(base + '/admin.html', {
    headers: { authorization: 'Basic ' + Buffer.from('admin:incorrect').toString('base64') }
  })).status, 401);
  assert.equal((await fetch(base + '/admin.html', { headers: { authorization: auth } })).status, 200);
});
test('Upload rejects missing auth and cross-origin request', async () => {
  assert.equal((await fetch(base + '/upload', { method: 'POST' })).status, 401);
  assert.equal((await fetch(base + '/upload', {
    method: 'POST', headers: { authorization: auth, origin: 'https://malicious.invalid' }
  })).status, 403);
});
test('Upload rejects non-allowlisted file destinations and invalid image bytes', async () => {
  const data = new FormData();
  data.append('filename', '../server.js');
  data.append('image', new Blob([Buffer.from('not an image')], { type: 'image/webp' }), 'bad.webp');
  assert.equal((await fetch(base + '/upload', {
    method: 'POST', headers: { authorization: auth, origin: base }, body: data
  })).status, 400);
  const bad = new FormData();
  bad.append('filename', 'logo.webp');
  bad.append('image', new Blob([Buffer.from('not an image')], { type: 'image/webp' }), 'bad.webp');
  assert.equal((await fetch(base + '/upload', {
    method: 'POST', headers: { authorization: auth, origin: base }, body: bad
  })).status, 400);
});
test('Password-change API enforces CSRF and password strength', async () => {
  const payload = JSON.stringify({ currentPassword: 'test-unique-password-2026-random', newPassword: 'short' });
  assert.equal((await fetch(base + '/change-password', {
    method: 'POST', headers: { authorization: auth, origin: 'https://malicious.invalid', 'content-type': 'application/json' }, body: payload
  })).status, 403);
  assert.equal((await fetch(base + '/change-password', {
    method: 'POST', headers: { authorization: auth, origin: base, 'content-type': 'application/json' }, body: payload
  })).status, 400);
});
