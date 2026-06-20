// © 2026 Barun Kumar Shaw
// service worker for offline support

const CACHE_NAME = 'barun-legacy-run-v3';

const ASSETS = [
  './game.html',
  './manifest.json'
];

const CDN_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap',
  'https://fonts.gstatic.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('sw: caching assets');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => {
              console.log('sw: clearing old cache', key);
              return caches.delete(key);
            })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request.clone()).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'error') {
          return networkResponse;
        }

        const url = event.request.url;
        const shouldCache = CDN_ASSETS.some(cdn => url.startsWith(cdn));

        if (shouldCache) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }

        return networkResponse;
      }).catch(() => {
        // fallback to game.html if offline and requested a document
        if (event.request.destination === 'document') {
          return caches.match('./game.html');
        }
      });
    })
  );
});
