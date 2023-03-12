'use strict'

module.exports = function (app) {
  const jsonku = require('./controller')
  app.route('/').get(jsonku.index)
  app.route('/mahasiswa').get(jsonku.listMahasiswa)
  app.route('/mahasiswa/:id').get(jsonku.mahasiswa)
  app.route('/mahasiswa').post(jsonku.tambahMahasiswa)
}
