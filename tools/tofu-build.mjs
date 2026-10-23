#!/usr/bin/env node
// Tofu adaptation: produce a self-contained static site with no shared credentials.
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { trimSite } from './tofu-site-trim.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
if (existsSync(join(root, '.env'))) {
  throw new Error('Remove the local .env before creating a public gallery build.');
}

const env = { ...process.env, HUSKY: '0', NG_CLI_ANALYTICS: 'false' };
for (const key of [
  'UNSPLASH_KEY',
  'UNSPLASH_CLIENT_ID',
  'ONEDRIVE_CLIENT_ID',
  'GOOGLE_DRIVE_TOKEN',
  'DROPBOX_API_KEY',
  'WEBDAV_URL',
  'WEBDAV_USERNAME',
  'WEBDAV_PASSWORD',
]) {
  delete env[key];
}

execFileSync(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['run', 'buildFrontend:prodWeb', '--', '--source-map=false'],
  { cwd: root, env, stdio: 'inherit' },
);

const browser = join(root, 'dist/browser');
if (!readFileSync(join(browser, 'index.html'), 'utf8').includes('Super Productivity')) {
  throw new Error('The expected web application was not built.');
}
const site = join(root, 'site');
rmSync(site, { recursive: true, force: true });
cpSync(browser, site, { recursive: true });
// Keep the app and dependency notices with the deployed copy.
cpSync(join(root, 'LICENSE'), join(site, 'LICENSE'));
const thirdPartyLicenses = join(root, 'dist/3rdpartylicenses.txt');
if (existsSync(thirdPartyLicenses)) {
  cpSync(thirdPartyLicenses, join(site, '3rdpartylicenses.txt'));
}
trimSite(site);
// Git must not alter licensed text or the bytes hashed by the service worker.
writeFileSync(
  join(site, '.gitattributes'),
  '# Keep the generated site and license notices byte-for-byte, including on Windows.\n* -text -whitespace\n',
);
console.log('Static gallery site ready at site/index.html; deploy site/ only.');
