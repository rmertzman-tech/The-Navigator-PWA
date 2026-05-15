# The Navigator PWA-1 — Installable Mobile Companion Build

This repository hosts the first installable PWA build of The Navigator.

Base app: Navigator Twin v3.1.4 Pulse Click Handler Patch.  
PWA layer: manifest, service worker, icons, offline app-shell caching, and mobile home-screen launch behavior.

## What is cached

The service worker caches only the app shell:

- `index.html`
- `manifest.json`
- icon files
- `sw.js` as the active service worker script

## What is not cached

The service worker is designed not to cache:

- backend AI calls
- API responses
- uploaded raw document text
- cross-origin requests

Navigator remains local-first. User memory is stored in the browser through local storage and can be exported/imported as JSON.

## Deployment

Upload these files to the GitHub Pages repo root:

```text
index.html
manifest.json
sw.js
.nojekyll
icons/
README.md
PWA_TESTING_GUIDE.txt
PWA_RELEASE_NOTES.txt
```

Then open the GitHub Pages URL and confirm the app works as a normal web app before testing installability.

## Important update note

Because this build registers a service worker, stale code can sometimes persist in the browser. The app includes a Settings button called **Clear PWA cache / unregister service worker**. Use it before redeploying major changes if the browser keeps showing an old version.
