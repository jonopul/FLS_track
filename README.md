# SRN Parts Lookup PWA

A lightweight offline-capable (PWA) viewer for the SRN Parts Database.

## Features
- Progressive Web App: installable on iOS / Android / Desktop
- Offline cache of app shell via `service-worker.js`
- Manifest with icons for Add-To-Home-Screen
- Searchable parts database UI (embedded via iframe)

## Project Structure
```
index.html                      # Loader page + registers service worker
SRN_Parts_Database_Improved.html # Main searchable UI
manifest.json                   # PWA manifest
service-worker.js               # Caches core assets
icons/                          # PWA icons (192, 512)
```

## Local Preview
You can just open `index.html` directly in a browser. (Service worker will be limited when using file://.) For a full PWA test, run a tiny static server:

```pwsh
# PowerShell
python -m http.server 8080
# or
npx serve .
```
Open: http://localhost:8080/

## Deploy to GitHub Pages
1. Create (or choose) a repo on GitHub (public).
2. In this folder:
   ```pwsh
   git init
   git branch -m main
   git add .
   git commit -m "Initial PWA publish"
   git remote add origin https://github.com/<yourusername>/<reponame>.git
   git push -u origin main
   ```
3. GitHub: Settings → Pages → Source: Deploy from a branch → main / (root) → Save.
4. Wait ~1 minute. Site URL:
   - User site repo: https://<yourusername>.github.io/
   - Project repo: https://<yourusername>.github.io/<reponame>/

The files use relative `./` paths so both work.

## iPhone Installation
1. Open the site in Safari.
2. Tap Share → Add to Home Screen.
3. Launch from the icon (standalone mode).

## Updating
- Edit files
- Bump cache version string in `service-worker.js` (e.g. `srn-pwa-v3` → `srn-pwa-v4`)
- Commit & push: `git add .; git commit -m "Update"; git push`
- Users may need one refresh for newest cache.

## Cache Busting Tip
If you change core HTML/JS/CSS often, increment the `CACHE` constant to force an update.

## 404 Handling
A simple `404.html` is included so unexpected paths still load the app shell.

## License
(Choose a license or leave blank.)
