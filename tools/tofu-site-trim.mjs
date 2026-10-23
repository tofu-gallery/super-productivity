#!/usr/bin/env node
// Tofu adaptation: remove what a gallery copy must not ship from a built site, then keep the
// service worker's file list and hashes true. Run by tools/tofu-build.mjs; `node tools/tofu-site-trim.mjs site`
// applies it to an already built site.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const GOOGLE_CALENDAR = 'assets/bundled-plugins/google-calendar-provider';
const REMOVED = [
  // Upstream's Google Calendar plugin embeds its desktop OAuth client secret; in a browser
  // its sign-in refuses to start ("not available in the web build").
  GOOGLE_CALENDAR,
  // An end-to-end test fixture that no page loads; static hosting serves no .zip files.
  'assets/test-plugin.zip',
];
const LOADER_ENTRY = /([`'"])assets\/bundled-plugins\/google-calendar-provider\1,/g;

const sha1 = (bytes) => createHash('sha1').update(bytes).digest('hex');

export const trimSite = (site) => {
  const hadPlugin = existsSync(join(site, GOOGLE_CALENDAR));
  for (const path of REMOVED) rmSync(join(site, path), { recursive: true, force: true });

  // The plugin list the app loads at start-up; the reserved plugin ids stay as upstream has them.
  const changed = [];
  for (const name of readdirSync(site).filter((n) => n.endsWith('.js'))) {
    const text = readFileSync(join(site, name), 'utf8');
    const trimmed = text.replace(LOADER_ENTRY, '');
    if (trimmed !== text) {
      writeFileSync(join(site, name), trimmed);
      changed.push(name);
    }
  }
  if (hadPlugin && changed.length !== 1) {
    throw new Error(`Expected one start-up plugin list naming ${GOOGLE_CALENDAR}; found ${changed.length}.`);
  }

  const manifestPath = join(site, 'ngsw.json');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const gone = (url) => REMOVED.some((path) => url === `/${path}` || url.startsWith(`/${path}/`));
  for (const group of manifest.assetGroups) group.urls = group.urls.filter((url) => !gone(url));
  for (const url of Object.keys(manifest.hashTable)) if (gone(url)) delete manifest.hashTable[url];
  for (const name of changed) manifest.hashTable[`/${name}`] = sha1(readFileSync(join(site, name)));
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  // Never publish an OAuth client secret, whatever upstream adds later.
  const walk = (dir) =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
    );
  const leaking = walk(site).filter((file) => readFileSync(file).includes('GOCSPX-'));
  if (leaking.length) throw new Error(`OAuth client secret left in: ${leaking.join(', ')}`);
  return changed;
};

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const changed = trimSite(resolve(process.argv[2] ?? 'site'));
  console.log(`Trimmed the site; updated ${changed.join(', ') || 'no script'} and ngsw.json.`);
}
