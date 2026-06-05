# 🦋 100 Day Transformation Tracker

A personal Progressive Web App (PWA) for tracking spiritual, physical, and nutritional goals over 100 days. Mobile-first, installable, works offline.

## Deploy to GitHub Pages (5 min)

1. Create a repo at **github.com/new** (e.g. `transform`)
2. Upload ALL these files, keeping the `icons/` folder:
   ```
   index.html
   manifest.json
   sw.js
   icons/icon-192.png
   icons/icon-512.png
   ```
3. Repo → **Settings → Pages → Source: Deploy from a branch → main → / (root)** → Save
4. Live in ~1-2 min at `https://YOUR_USERNAME.github.io/transform/`

## Add to Homescreen

- **Android (Chrome):** open the URL → tap the "Install" banner, or menu ⋮ → "Add to Home screen"
- **iPhone (Safari):** open the URL → Share button → "Add to Home Screen"

Launches fullscreen like a native app.

## AI Features (food photo + recipes)

1. Get a key at **console.anthropic.com**
2. In the app: ⚙ Goals → paste into "Anthropic API Key"
3. Stored only on your device. Needs internet; everything else works offline.

## Notes
- All data is saved locally on your device (localStorage). No server, no tracking.
- First open needs internet (to load React once). After that it works offline.
- Pre-compiled — no build step, just static files.
