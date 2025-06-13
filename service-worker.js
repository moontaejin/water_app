
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("checklist-cache").then(function(cache) {
      return cache.addAll([
        "product_checklist_pwa.html",
        "manifest.json",
        "icon-192.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
