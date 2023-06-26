const express = require('express')
const app = express()



// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/version', function (req, res) {
  res.send('8') // change this string to ensure a new version deployed
})

app.get('/health', function (req, res) {
  // throw 'error...'
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port ', PORT)
})

