// panggil package
const connection = require('../koneksi')
const mysql = require('mysql')
const md5 = require('md5')
const response = require('../rest')
const jwt = require('jsonwebtoken')
const config = require('../config/secret')
const ip = require('ip')

// controller untuk register
exports.register = function (req, res) {
  let post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    tanggal_daftar: new Date(),
  }

  // pengecekan email yang sudah terdaftar
  let query = 'SELECT email FROM ?? where ??=?'
  let table = ['user', 'email', post.email]
  query = mysql.format(query, table)

  connection.query(query, function (err, rows) {
    if (err) {
      console.log(err)
    } else {
      if (rows.length == 0) {
        let query = 'INSERT INTO ?? SET?'
        let table = ['user']
        query = mysql.format(query, table)
        connection.query(query, post, function (err, rows) {
          if (err) {
            console.log(err)
          } else {
            response.ok('Berhasil menambahkan data user baru!', res)
          }
        })
        // jika email sudah terdaftar terdapat response
      } else {
        response.ok('Email sudah terdaftar!', res)
      }
    }
  })
}
