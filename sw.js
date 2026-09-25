const CACHE = 'settings-pwa-v34';
const SPRITES = ['./assets/sprites/0042-112-1510.png', './assets/sprites/0042-112-1672.png', './assets/sprites/0042-112-1834.png', './assets/sprites/0042-112-1996.png', './assets/sprites/0042-112-2158.png', './assets/sprites/0042-112-2320.png', './assets/sprites/0043-112-1016.png', './assets/sprites/0043-112-1178.png', './assets/sprites/0043-112-1340.png', './assets/sprites/0043-112-1502.png', './assets/sprites/0043-112-1664.png', './assets/sprites/0043-112-1826.png', './assets/sprites/0043-112-1988.png', './assets/sprites/0043-112-530.png', './assets/sprites/0043-112-692.png', './assets/sprites/0043-112-854.png', './assets/sprites/0044-112-1139.png', './assets/sprites/0044-112-1301.png', './assets/sprites/0044-112-1463.png', './assets/sprites/0044-113-1730.png', './assets/sprites/0044-113-1892.png', './assets/sprites/0044-113-2054.png', './assets/sprites/0044-112-2321.png', './assets/sprites/0044-112-388.png', './assets/sprites/0044-112-550.png', './assets/sprites/0044-112-712.png', './assets/sprites/0044-112-874.png', './assets/sprites/0045-112-2354.png', './assets/sprites/0048-118-438.png', './assets/sprites/0049-118-438.png', './assets/sprites/0050-118-438.png', './assets/sprites/0052-112-1060.png', './assets/sprites/0052-112-1293.png', './assets/sprites/0052-112-1688.png', './assets/sprites/0052-112-1912.png', './assets/sprites/0059-112-1981.png', './assets/sprites/0059-112-2166.png', './assets/sprites/0059-112-2412.png', './assets/sprites/0061-112-1162.png', './assets/sprites/0061-112-1327.png', './assets/sprites/0061-112-1492.png', './assets/sprites/0061-112-1754.png', './assets/sprites/0061-112-2032.png', './assets/sprites/0061-112-2197.png', './assets/sprites/0061-112-2362.png', './assets/sprites/0061-112-2527.png', './assets/sprites/0061-112-2692.png', './assets/sprites/0061-118-438.png', './assets/sprites/0062-112-1446.png', './assets/sprites/0062-112-1611.png', './assets/sprites/0062-112-1776.png', './assets/sprites/0062-112-1941.png', './assets/sprites/0062-112-2106.png', './assets/sprites/0062-112-2271.png', './assets/sprites/0062-112-2436.png', './assets/sprites/0062-112-2601.png', './assets/sprites/0063-112-1376.png', './assets/sprites/0063-112-1646.png', './assets/sprites/0063-112-1916.png', './assets/sprites/0063-112-2178.png', './assets/sprites/avatar.png'];
const ASSETS = ['./', './index.html', './style.css?v=34', './app.js?v=34', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './assets/apple-intelligence-reference.png', './assets/reference-4035.png', './assets/reference-4036.png', './assets/reference-4037.png', './assets/reference-4038.png', './assets/reference-4039.png', './assets/reference-4041.png', ...SPRITES];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok && new URL(event.request.url).origin === self.location.origin) {
      const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match(event.request)));
});
