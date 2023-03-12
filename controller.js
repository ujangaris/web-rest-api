'use strict'

const response = require('./rest')
const connection = require('./koneksi')

// index
exports.index = (req, res) => {
  response.ok('Aplikasi REST API berjalan...', res)
}
// menampilkan semua data mahasiswa
exports.listMahasiswa = (req, res) => {
  try {
    connection.query('SELECT * FROM mahasiswa', (err, rows, fields) => {
      if (err) {
        console.log(err)
        throw err
      } else {
        response.ok(rows, res)
      }
    })
  } catch (err) {
    response.error('Terjadi kesalahan pada server', res)
  }
}
