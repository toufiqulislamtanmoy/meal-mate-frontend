// Simple service worker for offline caching of basic assets.
// This is intentionally minimal. For production use consider using Workbox or next-pwa.

const CACHE_NAME = "meal-mate-cache-v1";
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch(() => {
        // ignore individual failures
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== "GET") return;

  // For navigation requests (HTML pages), try network first then fallback to cache
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Put a copy in the cache
          const respClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, respClone));
          return response;
        })
        .catch(() => caches.match(event.request).then((res) => res || caches.match("/")))
    );
    return;
  }

  // For other requests, try cache first then network
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((res) => {
          // cache fetched asset
          if (!res || res.status !== 200 || res.type !== "basic") return res;
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => {
            try {
              cache.put(event.request, resClone);
            } catch {
              // ignore cache put failures
            }
          });
          return res;
        })
        .catch(() => {
          // final fallback: try root
          return caches.match("/");
        });
    })
  );
});
