const express = require('express')
const bodyParser = require('body-parser')

// tambahkan morgan
const morgan = require('morgan')
const app = express()

// parse aplication/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// panggil morgannya
app.use(morgan('dev'))

// panggil routes
const routes = require('./routes')
routes(app)

// daftarkan menu routes dari index
app.use('/auth', require('./middleware'))

app.listen(5000, () => {
  console.log(`Server runing on port 5000!`)
})
