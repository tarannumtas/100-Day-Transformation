var CACHE_NAME = 'transform-v5';
var ASSETS = [
  './', './index.html', './manifest.json',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap'
];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE_NAME).then(function(c){
    return Promise.all(ASSETS.map(function(a){ return c.add(a).catch(function(){}); }));
  }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE_NAME;}).map(function(k){return caches.delete(k);}));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  if (e.request.url.indexOf('api.anthropic.com') !== -1) { e.respondWith(fetch(e.request)); return; }
  e.respondWith(
    caches.match(e.request).then(function(cached){
      return cached || fetch(e.request).then(function(resp){
        if (resp.ok && resp.type==='basic') { var cl=resp.clone(); caches.open(CACHE_NAME).then(function(c){c.put(e.request,cl);}); }
        return resp;
      });
    }).catch(function(){ return caches.match('./index.html'); })
  );
});
