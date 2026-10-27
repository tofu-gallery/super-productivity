# Super Productivity on Tofu

Super Productivity is an offline-first to-do list, Pomodoro timer and time-tracking application. It includes task planning, boards, reports and optional integrations. This fork preserves the upstream name, logo, favicon and application behavior.

## Hosting

- Tofu framework preset: `static`.
- **Site root: `site/`.** Import that subdirectory at the pinned commit, or upload only that directory. The repository root is the Angular/Electron source tree, not a prebuilt static site. Its default `npm run build` makes a desktop application and is not the gallery deployment command.
- Site entry point: `site/index.html`. No server, install or build is needed when deploying the checked-in site. Routes use URL fragments, so no server rewrite is needed.
- Database: none on the server. Application data is stored in the user's browser (IndexedDB and local settings), separately for each origin and browser profile.
- Required environment variables: none. No Tofu account, API key or shared credential is included.
- Serve over HTTPS in production for service workers and offline support.
- Size: the site publishes 833 files (358 of them scripts at the site root, mostly the app's code-split chunks). A gallery copy goes online on any plan, Free included, on Tofu's server hosting, because the site is bigger than the Free plan's static hosting takes (at most 500 files).

## Rebuilding the static copy

Use Node.js 22 and the upstream package manager, `npm@11.18.0`, with the committed `package-lock.json`:

```sh
HUSKY=0 ELECTRON_SKIP_BINARY_DOWNLOAD=1 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci --no-audit --no-fund
NG_BUILD_MAX_WORKERS=2 node tools/tofu-build.mjs
```

`tools/tofu-build.mjs` invokes the upstream `npm run buildFrontend:prodWeb -- --source-map=false`, including its shared packages and bundled plugins. Upstream builds into `dist/browser/`; the wrapper copies that output into `site/` and includes the unmodified MIT license and extracted dependency notices. It then runs `tools/tofu-site-trim.mjs`, which removes the Google Calendar plugin and the test archive described below, takes them out of the start-up plugin list and `site/ngsw.json` (updating the changed file's hash there), and stops if any file still holds a Google OAuth client secret (`GOCSPX-`). Keep `site/` committed on the `tofu` branch so each gallery copy is already built.

The wrapper refuses a root `.env` and clears the upstream frontend credential variables from the build process. Do not put provider secrets in this frontend. The dependency install can also run upstream environment generation: perform gallery builds in a clean checkout without `.env` or injected frontend credentials.

## Adaptations and provenance

- Added `tools/tofu-build.mjs`, `tools/tofu-site-trim.mjs` and the generated `site/` so Tofu can deploy the app as static files without building Electron or starting the optional sync server.
- Excluded source maps from the site to keep the download smaller. Preserved the app's own service worker, assets, fonts, icons and every bundled plugin except Google Calendar. The generated `site/.gitattributes` prevents Git from changing those bytes or license text through automatic newline conversion.
- Removed the bundled Google Calendar plugin (`site/assets/bundled-plugins/google-calendar-provider/`). Its `plugin.js` embeds upstream's own Google OAuth client secret for their desktop app, which a gallery copy must not publish, and in a browser that plugin's sign-in refuses to start (upstream's message: "this plugin is not available in the web build"). Its entry is removed from the plugin list the app loads at start-up (one list entry in `site/chunk-Dy2IczTc.js`) and its files from `site/ngsw.json`. Its id stays reserved, as upstream has it, so an uploaded plugin cannot take its name. The app loses nothing that worked in a browser: Google Calendar can still be shown, read-only, through Connect Calendar, Google Calendar (iCal).
- Removed `site/assets/test-plugin.zip`, an upstream end-to-end test file that no page loads; Tofu's static hosting serves no `.zip` files.
- Added this deployment guide. No upstream application source or lockfile was changed.
- Upstream repository: https://github.com/super-productivity/super-productivity
- Upstream branch: `master`.
- Base upstream commit: `dee0b6d20ca11926b4488fc237470efe580ee55b`.
- Fork: https://github.com/tofu-gallery/super-productivity
- Adaptation branch: `tofu`. Both `main` and the original `master` mirror the base upstream commit without adaptation commits.
- License: MIT, copyright (c) 2018 Johannes Millan. The original `LICENSE` and all bundled notices remain intact.

## Before offering this app

This is personal software with local browser storage, not a shared workspace. Clearing browser storage, changing the app address or using a different browser does not carry tasks over; export backups and use the app's own import/export controls. Browsers may evict stored data, so users should keep backups outside the browser.

Cloud sync and integrations are optional and disabled until the user configures them. A user can supply their own WebDAV/Nextcloud server or sign into an upstream sync provider. Tofu does not run SuperSync or provide paid upstream service access. OneDrive requires the user's own OAuth application setup for the deployed origin. Two-way Google Calendar sync is not included (see above); a read-only Google Calendar through its iCal address works. Unsplash search is unavailable in this key-free build; local image selection remains available. Desktop-only integrations and native idle detection are outside the browser version's scope.

No analytics or advertising has been added. The core application does not require an external account. User-selected plugins and integrations can contact their configured external services and have their own terms.

## Local verification (2026-10-23 UTC)

Verified on Node.js `v22.22.3` and npm `11.18.0`:

1. `HUSKY=0 ELECTRON_SKIP_BINARY_DOWNLOAD=1 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm exec --yes --package npm@11.18.0 -- npm ci --no-audit --no-fund` succeeded with all optional frontend credential variables unset. The upstream lockfile was unchanged. npm reported the upstream Nextcloud library's Node/npm engine warning and deprecated dependencies; installation completed.
2. `NG_BUILD_MAX_WORKERS=2 NG_CLI_ANALYTICS=false HUSKY=0 npm exec --yes --package npm@11.18.0 -- node tools/tofu-build.mjs` succeeded. All 28 shared packages/plugins built. Angular reported an unused RouterLink and a 5.78 MB initial bundle exceeding its 5.5 MB warning budget, below its 6 MB error budget.
3. `python3 -I -m http.server 4867 --bind 127.0.0.1 --directory site` served the built app. `curl --fail --silent --show-error --max-time 10 --output /dev/null --write-out '%{http_code}' http://127.0.0.1:4867/` returned `200`; all local entry-page script, stylesheet, manifest and icon URLs also returned `200`.
4. The browser opened the real built app, created a task through the UI, navigated to the entry page again and confirmed the saved task persisted. Console errors were `[]`; no external resource origins were observed during initial load or this task flow. This is a focused smoke test, not a full integration or security audit.
5. As built, all 832 entries in `site/ngsw.json` matched the generated files' SHA-1 hashes and the 840-file site was 21,682,340 bytes, with no source maps. `site/LICENSE` is byte-identical to the upstream license; extracted third-party notices are included.

No deployment or upstream sync/integration login was performed.

## Trim verification (2026-10-23 UTC)

The trim was applied to the build above with `node tools/tofu-site-trim.mjs site`, the same function `tools/tofu-build.mjs` now calls; a full rebuild with the updated wrapper was not run again.

1. It removed the three Google Calendar plugin files and `assets/test-plugin.zip`, and removed exactly one 50-byte list entry from `site/chunk-Dy2IczTc.js`; a second run changed nothing. All 828 entries in `site/ngsw.json` match the files' SHA-1 hashes. Including its Git byte-preservation rule, the 836-file site is 21,670,413 bytes. No file contains `GOCSPX-` or the plugin's path.
2. A copy of `site/`, without the folders Tofu's GitHub import drops, was served with `python3 -I -m http.server` on 127.0.0.1. In the browser the app started on a fresh address in about a second; a task created through the UI (Shift+A) was still there after a reload. The app requested the other 22 bundled plugins' manifests (all `200`) and nothing under `google-calendar-provider`; every request returned `200` or `304`; the service worker installed the new manifest. Loads on fresh addresses (two of each copy) started in about a second with no console errors. In this test browser, which runs a page-injecting extension, some loads of both the trimmed and the untrimmed copy stayed on the loading screen for more than ten seconds, and one reload logged a failed lazy import of a locale chunk; the following loads of both copies started normally. This is a focused smoke test, not a full integration or security audit.
3. Tofu's own GitHub-import check of the pushed `tofu` branch with app folder `site` refused no file type and reported `safety ok (4 findings)`, none blocking. It also reported the site as not on the Free static lane, because 833 files to publish exceed that lane's 500-file limit.

## Hosting note (2026-10-27 UTC)

1. The Size line now says a gallery copy goes online on Tofu's server hosting, on any plan, Free included; Tofu's static hosting still publishes at most 500 files per site. `git ls-tree -r --name-only HEAD -- site` lists 836 files, the count the trim above reports; static hosting skips `site/.gitattributes`, `site/assets/bundled-plugins/.gitkeep` and `site/LICENSE`, which leaves the 833 files to publish that the Size line and the 2026-10-23 import check count.
