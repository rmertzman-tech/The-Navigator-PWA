/* Navigator v3.5.1 Service Worker
   Cache policy: app shell only. Never cache backend AI/API responses or raw uploads.
*/
const CACHE_NAME = 'navigator-v3-5-1-ebb-capability-content-patch-shell';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(name => name.startsWith('navigator-') && name !== CACHE_NAME)
           .map(name => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});

function isApiOrBackendRequest(url){
  return url.pathname.includes('/api/') ||
         url.href.includes('claude-proxy') ||
         url.href.includes('ucp-backend') ||
         url.href.includes('openai') ||
         url.href.includes('anthropic');
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if(request.method !== 'GET') return;

  const url = new URL(request.url);

  // Do not cache cross-origin calls, backend/API calls, or extension requests.
  if(url.origin !== self.location.origin || isApiOrBackendRequest(url)){
    event.respondWith(fetch(request));
    return;
  }

  // Network-first for navigation so GitHub Pages updates are not trapped by stale cache.
  if(request.mode === 'navigate'){
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          if(response && response.ok){
            caches.open(CACHE_NAME).then(cache => cache.put('./index.html', clone));
          }
          return response;
        })
        .catch(() => caches.match('./index.html').then(cached => cached || caches.match('./')))
    );
    return;
  }

  // Cache-first for static same-origin app-shell assets, with background refresh.
  event.respondWith(
    caches.match(request).then(cached => {
      const networkFetch = fetch(request).then(response => {
        if(response && response.ok){
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || networkFetch;
    })
  );
});
