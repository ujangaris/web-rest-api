const express = require('express')
const auth = require('./auth')
const verifikasi = require('./verifikasi')
const router = express.Router()

// daftarkan endpoint registrasi
router.post('/api/v1/register', auth.register)
// daftarkan endpoint login
router.post('/api/v1/login', auth.login)

// enpoint yang perlu autorization
router.get('/api/v1/rahasia', verifikasi(), auth.halamanRahasia)

module.exports = router
