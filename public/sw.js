// TODO - precache / + 'sw.js' in PRIMARY

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(r => r || fetch(event.request))
  )
})


// Load default files on install
self.addEventListener('install', function(event) {

  var files = {
    '_default/index.html': '/',
    '_default/script.js':  '/script.js',
    '_default/style.css':  '/style.css'
  }

  event.waitUntil(
    // this could use cache.addAll, but we need to
    // map the requests
    caches.open('content').then(cache =>
      Promise.all(
        Object.keys(files)
        .map( (source, i) =>
        fetch(source)
          .then(resp =>
            cache.put(files[source], resp)
          )
        )
      )
    )
  )
})
