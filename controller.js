'use strict'

const response = require('./rest')
const connection = require('./koneksi')

exports.index = function (req, res) {
  response.ok('Aplikasi REST API berjalan...', res)
}
