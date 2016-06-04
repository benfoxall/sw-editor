// TODO - precache / + 'sw.js' in PRIMARY

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(r => r || fetch(event.request))
  )
})
