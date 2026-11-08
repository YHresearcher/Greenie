import { cp, mkdir, readdir, readFile, rm, stat, writeFile, lstat } from 'node:fs/promises';
import { resolve, join, extname, relative, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'dist');
const approvedDirs = ['css', 'js', 'img', 'products'];
const approvedRootFiles = ['index.html', '404.html', 'favicon.ico', 'robots.txt', 'sitemap.xml'];
const allowedExt = new Set(['.html', '.css', '.js', '.webp', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.avif', '.woff', '.woff2', '.txt', '.xml']);
const protectedNames = new Set(['admin.html', 'config.json', 'server.js', 'deploy.sh', 'package.json', 'package-lock.json', '.env', '.git', '.github', '.gitignore']);

function assertInside(p) {
  const rel = relative(root, p);
  if (!rel || rel === '..' || rel.startsWith('..' + sep) || rel.startsWith(sep)) {
    throw new Error('Unsafe source path: ' + p);
  }
}
async function copyPublicFile(src, dest) {
  assertInside(src);
  const info = await lstat(src);
  if (info.isSymbolicLink() || !info.isFile()) throw new Error('Not a regular file: ' + src);
  if (!allowedExt.has(extname(src).toLowerCase())) throw new Error('Unexpected file type in public assets: ' + src);
  await mkdir(resolve(dest, '..'), { recursive: true });
  await cp(src, dest, { force: true });
}
async function copySafeDir(source, target) {
  for (const ent of await readdir(source, { withFileTypes: true })) {
    if (ent.name.startsWith('.') || protectedNames.has(ent.name)) throw new Error('Forbidden file inside public folder: ' + ent.name);
    const src = join(source, ent.name), dest = join(target, ent.name);
    if (ent.isDirectory()) {
      await copySafeDir(src, dest);
    } else if (ent.isFile()) {
      await copyPublicFile(src, dest);
    } else {
      throw new Error('Symlinks and unusual filesystem objects are forbidden: ' + src);
    }
  }
}
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const file of approvedRootFiles) {
  const src = join(root, file);
  try {
    if ((await stat(src)).isFile()) await copyPublicFile(src, join(out, file));
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
    if (file === 'index.html') throw new Error('Missing required index.html');
  }
}
for (const folder of approvedDirs) {
  const src = join(root, folder);
  if (!(await stat(src)).isDirectory()) throw new Error('Missing required directory ' + folder);
  await copySafeDir(src, join(out, folder));
}
// Cloudflare Pages uses these special files from the output directory.
await cp(join(root, 'cloudflare', '_headers'), join(out, '_headers'));
await cp(join(root, 'cloudflare', '_redirects'), join(out, '_redirects'));

const banned = ['admin.html','config.json','server.js','deploy.sh','package.json','package-lock.json','.env'];
const published = await readdir(out);
if (banned.some(name => published.includes(name))) throw new Error('Sensitive path accidentally published');
const homepage = await readFile(join(out, 'index.html'), 'utf8');
if (!homepage.includes('Greenie Vietnam')) throw new Error('Homepage content check failed');
const files = await readdir(out, { recursive: true });
console.log('Cloudflare static export built successfully:', files.length, 'entries in dist/');
