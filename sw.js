const VERSION = '1.0.0'; // ← bump this on each deploy
const CACHE_NAME = `la-lyric-v${VERSION}`;
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './songs.js',
  './background.webp',
  './la.png',
  './Raleway/static/Raleway-Regular.woff2',
  './Raleway/static/Raleway-Medium.woff2',
  './Raleway/static/Raleway-SemiBold.woff2',
  './Raleway/static/Raleway-Bold.woff2',
  './Raleway/static/Raleway-ExtraBold.woff2'
];

// Pre-cache all listed assets on install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Remove old caches on activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Serve from cache first, fall back to network (and update cache)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
