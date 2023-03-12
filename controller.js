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

// menampilkan satu data mahasiswa berdasarkan id nya
exports.mahasiswa = function (req, res) {
  let id = req.params.id
  connection.query(
    'SELECT * FROM mahasiswa WHERE id_mahasiswa = ?',
    [id],
    function (err, rows, fields) {
      if (err) {
        console.log(err)
      } else {
        response.ok(rows, res)
      }
    }
  )
}

// menambah data mahasiswa
exports.tambahMahasiswa = function (req, res) {
  const nim = req.body.nim
  const nama = req.body.nama
  const jurusan = req.body.jurusan

  connection.query(
    'INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)',
    [nim, nama, jurusan],
    function (err, rows, fields) {
      if (err) {
        console.log(err)
        res.status(500).send('Terjadi kesalahan saat menambahkan data')
      } else {
        // res.status(200).send('Berhasil menambahkan data!')
        response.ok('Berhasil menambahkan data!', res)
      }
    }
  )
}
