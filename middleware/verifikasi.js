const jwt = require('jsonwebtoken')
const config = require('../config/secret')

// buat fnction verifikasi untuk memeriksa otentikasi pengguna
function verifikasi() {
  return function (req, res, next) {
    // role pengguna yang dikirim melalui request
    let role = req.body.role
    // check authorization header with bearer token
    const tokenWithBearer = req.headers.authorization
    if (tokenWithBearer) {
      let token = tokenWithBearer.split(' ')[1]
      // memverifikasi token JWT 
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res.status(401).json({
            message: 'Unauthorized',
          })
        } else {
          if (role == 2) {
            req.auth = decoded
            next()
          } else {
            return res
              .status(401)
              .send({ auth: false, message: 'Gagal mengotorisasi role anda!' })
          }
        }
      })
    } else {
      return res
        .status(401)
        .send({ auth: false, message: 'Token tidak tersedia!' })
    }
  }
}

module.exports = verifikasi
