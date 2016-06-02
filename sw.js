console.log("sw.js (sw-editor)")

// TODO - precache / + 'sw.js' in PRIMARY

self.addEventListener('message', function(message) {
  var data = message.data

  // push content into the cache
  if(data.path && data.body && data.type){
    console.log("save> ", data.path, data.type, data.body.length)
    caches.open('content')
      .then( cache =>
        cache.put(data.path, new Response(data.body, {
          headers: {
            'Content-Type': data.type
          }
        }))
      )
  }

})
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(r => r || fetch(event.request))
  )
})
