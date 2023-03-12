const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse aplication/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// panggil routes
const routes = require('./routes')
routes(app)

app.listen(5000, () => {
  console.log(`Server runing on port 5000!`)
})
