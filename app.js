const express = require('express')
const app = express()

let healthy = true

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/version', function (req, res) {
  res.send('0.0.12') // change this string to ensure a new version deployed
})

app.get('/health', function (req, res) {
  if (healthy) {
    res.send('ok')
  }
  else {
    res.status(400)
    res.send('Jotakin vialla!')
  }
})

app.get('/break', function (req, res) {
  if (healthy) {
    res.send('breaking')
    healthy = false
  }
  else {
    res.send('healing')
    healthy = true
  }

})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port ', PORT)
})

