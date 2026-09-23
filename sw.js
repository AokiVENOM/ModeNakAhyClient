// Service worker minimal — sert uniquement à rendre l'app installable.
// Toujours privilégier le réseau (pas de cache agressif), pour ne jamais
// servir une version obsolète de l'app.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
