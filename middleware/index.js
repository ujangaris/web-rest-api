const express = require('express')
const auth = require('./auth')
const router = express.Router()

// daftarkan endpoint registrasi
router.post('/api/v1/register', auth.register)
// daftarkan endpoint login
router.post('/api/v1/login', auth.login)

module.exports = router
