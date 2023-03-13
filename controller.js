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
// mengubah data berdasarkan id mahasiswa
exports.ubahDataMahasiswa = function (req, res) {
  const id = req.body.id_mahasiswa // ambil id dari parameter url
  const nim = req.body.nim
  const nama = req.body.nama
  const jurusan = req.body.jurusan

  connection.query(
    'UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',
    [nim, nama, jurusan, id],
    function (err, rows, fields) {
      if (err) {
        console.log(err)
        res.status(500).send('Terjadi kesalahan saat mengupdate data')
      } else if (rows.affectedRows === 0) {
        // tambahkan kondisi untuk handle data tidak ditemukan
        res.status(404).send('Data tidak ditemukan')
      } else {
        response.ok('Berhasil mengupdate data!', res)
      }
    }
  )
}

// Delete data mashasiswa
exports.deleteMahasiswa = function (req, res) {
  const id = req.body.id_mahasiswa
  connection.query(
    'DELETE FROM mahasiswa WHERE id_mahasiswa=? ',
    [id],
    function (err, rows, fields) {
      if (err) {
        console.log(err)
        res.status(500).send('Terjadi kesalahan saat menghapus data')
      } else if (rows.affectedRows === 0) {
        // tambahkan kondisi untuk handle data tidak ditemukan
        res.status(404).send('Data tidak ditemukan')
      } else {
        response.ok('Berhasil dihapus', res)
      }
    }
  )
}

// menampilkan matakuliah group
exports.tampilGroupMatakuliah = (req, res) => {
  connection.query(
    'SELECT mahasiswa.id_mahasiswa, mahasiswa.nim,mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah,matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',

    function (err, rows, fields) {
      if (err) {
        console.log(err)
      } else {
        response.oknested(rows, res)
      }
    }
  )
}
