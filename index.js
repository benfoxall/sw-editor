const express = require('express')
const app = express()

app.use(express.static('public'))

app.use(function(req, res, next) {
  res.sendFile(__dirname + '/public/_fallback.html')
})

app.listen(process.env.PORT || 3000)
