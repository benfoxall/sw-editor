// TODO - precache / + 'sw.js' in PRIMARY

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(r => r || fetch(event.request))
  )
})


// Load default files on install
self.addEventListener('install', function(event) {
  event.waitUntil(
    // this could use cache.addAll, but we need to
    // map the requests
    caches.open('content').then(cache =>
      Promise.all([
        'index.html',
        'script.js',
        'style.css'
      ].map( file =>
        fetch('/~default/' + file)
          .then(resp =>
            cache.put('/' + file, resp)
          )
        )
      )
    )
  )
})
