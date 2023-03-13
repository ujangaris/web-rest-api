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

// controller untuk login
exports.login = function (req, res) {
  let post = {
    email: req.body.email,
    password: req.body.password,
  }
  // lakukan query ke database
  let query = 'SELECT * FROM ?? WHERE ??=? AND ??=?'
  // membuat isi  nilai yang akan diberikan pada variabel table diatas
  let table = ['user', 'email', post.email, 'password', md5(post.password)]
  // menggabungkan nilai pada variabel query dan table
  query = mysql.format(query, table)
  // akukan query ke database dengan mengirimkan query yang telah diformat 
  // dan menjalankan sebuah fungsi callback yang akan dijalankan ketika query selesai dieksekusi
  connection.query(query, function (err, rows) {
    if (err) {
      console.log(err)
    } else {
      if (rows.length == 1) {
        let token = jwt.sign({ rows }, config.secret, {
          expiresIn: 1440,//berakhir 24jm
        })
        id_user = rows[0].id

        let data = {
          id_user: id_user,
          access_token: token,
          ip_address: ip.address(),
        }
        // jika usernya ada langsung tersimpan ditable access token
        let query = 'INSERT INTO ?? SET ?'
        let table = ['akses_token']

        query = mysql.format(query, table)
        connection.query(query, data, function (err, rows) {
          if (err) {
            console.log(err)
          } else {
            res.json({
              success: true,
              message: 'Token jwt tergenerate!',
              token: token,
              currUser: data.id_user,
            })
          }
        })
      } else {
        res.json({ error: true, message: 'Email atau passwordnya salah!' })
      }
    }
  })
}
