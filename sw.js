console.log("sw.js (sw-editor)")

// TODO - precache / + 'sw.js' in PRIMARY

self.addEventListener('message', function(message) {

  // if data.path && data.body - populate the cache
  console.log("message>" + message)

})
