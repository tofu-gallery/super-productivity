# Super Productivity on Tofu

Super Productivity is an offline-first to-do list, Pomodoro timer and time-tracking application. It includes task planning, boards, reports and optional integrations. This fork preserves the upstream name, logo, favicon and application behavior.

## Hosting

- Tofu framework preset: `static`.
- **Site root: `site/`.** Import that subdirectory at the pinned commit, or upload only that directory. The repository root is the Angular/Electron source tree, not a prebuilt static site. Its default `npm run build` makes a desktop application and is not the gallery deployment command.
- Site entry point: `site/index.html`. No server, install or build is needed when deploying the checked-in site. Routes use URL fragments, so no server rewrite is needed.
- Database: none on the server. Application data is stored in the user's browser (IndexedDB and local settings), separately for each origin and browser profile.
- Required environment variables: none. No Tofu account, API key or shared credential is included.
- Serve over HTTPS in production for service workers and offline support.

## Rebuilding the static copy

Use Node.js 22 and the upstream package manager, `npm@11.18.0`, with the committed `package-lock.json`:

```sh
HUSKY=0 ELECTRON_SKIP_BINARY_DOWNLOAD=1 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci --no-audit --no-fund
NG_BUILD_MAX_WORKERS=2 node tools/tofu-build.mjs
```

`tools/tofu-build.mjs` invokes the upstream `npm run buildFrontend:prodWeb -- --source-map=false`, including its shared packages and bundled plugins. Upstream builds into `dist/browser/`; the wrapper copies that output into `site/` and includes the unmodified MIT license and extracted dependency notices. Keep `site/` committed on the `tofu` branch so each gallery copy is already built.

The wrapper refuses a root `.env` and clears the upstream frontend credential variables from the build process. Do not put provider secrets in this frontend. The dependency install can also run upstream environment generation: perform gallery builds in a clean checkout without `.env` or injected frontend credentials.

## Adaptations and provenance

- Added `tools/tofu-build.mjs` and the generated `site/` so Tofu can deploy the app as static files without building Electron or starting the optional sync server.
- Excluded source maps from the site to keep the download smaller. Preserved the app's own service worker, assets, fonts, icons and bundled plugins. The generated `site/.gitattributes` prevents Git from changing those bytes or license text through automatic newline conversion.
- Added this deployment guide. No upstream application source or lockfile was changed.
- Upstream repository: https://github.com/super-productivity/super-productivity
- Upstream branch: `master`.
- Base upstream commit: `dee0b6d20ca11926b4488fc237470efe580ee55b`.
- Fork: https://github.com/tofu-gallery/super-productivity
- Adaptation branch: `tofu`. Both `main` and the original `master` mirror the base upstream commit without adaptation commits.
- License: MIT, copyright (c) 2018 Johannes Millan. The original `LICENSE` and all bundled notices remain intact.

## Before offering this app

This is personal software with local browser storage, not a shared workspace. Clearing browser storage, changing the app address or using a different browser does not carry tasks over; export backups and use the app's own import/export controls. Browsers may evict stored data, so users should keep backups outside the browser.

Cloud sync and integrations are optional and disabled until the user configures them. A user can supply their own WebDAV/Nextcloud server or sign into an upstream sync provider. Tofu does not run SuperSync or provide paid upstream service access. OneDrive requires the user's own OAuth application setup for the deployed origin. Unsplash search is unavailable in this key-free build; local image selection remains available. Desktop-only integrations and native idle detection are outside the browser version's scope.

No analytics or advertising has been added. The core application does not require an external account. User-selected plugins and integrations can contact their configured external services and have their own terms.

## Local verification (2026-10-23 UTC)

Verified on Node.js `v22.22.3` and npm `11.18.0`:

1. `HUSKY=0 ELECTRON_SKIP_BINARY_DOWNLOAD=1 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm exec --yes --package npm@11.18.0 -- npm ci --no-audit --no-fund` succeeded with all optional frontend credential variables unset. The upstream lockfile was unchanged. npm reported the upstream Nextcloud library's Node/npm engine warning and deprecated dependencies; installation completed.
2. `NG_BUILD_MAX_WORKERS=2 NG_CLI_ANALYTICS=false HUSKY=0 npm exec --yes --package npm@11.18.0 -- node tools/tofu-build.mjs` succeeded. All 28 shared packages/plugins built. Angular reported an unused RouterLink and a 5.78 MB initial bundle exceeding its 5.5 MB warning budget, below its 6 MB error budget.
3. `python3 -I -m http.server 4867 --bind 127.0.0.1 --directory site` served the built app. `curl --fail --silent --show-error --max-time 10 --output /dev/null --write-out '%{http_code}' http://127.0.0.1:4867/` returned `200`; all local entry-page script, stylesheet, manifest and icon URLs also returned `200`.
4. The browser opened the real built app, created a task through the UI, navigated to the entry page again and confirmed the saved task persisted. Console errors were `[]`; no external resource origins were observed during initial load or this task flow. This is a focused smoke test, not a full integration or security audit.
5. All 832 entries in `site/ngsw.json` matched the generated files' SHA-1 hashes. Including its Git byte-preservation rule, the 840-file site is 21,682,340 bytes, with no source maps. `site/LICENSE` is byte-identical to the upstream license; extracted third-party notices are included.

No deployment or upstream sync/integration login was performed.
