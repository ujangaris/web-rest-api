'use strict'

module.exports = function (app) {
  const jsonku = require('./controller')
  app.route('/').get(jsonku.index)
  app.route('/mahasiswa').get(jsonku.listMahasiswa)
  app.route('/mahasiswa/:id').get(jsonku.mahasiswa)
  app.route('/mahasiswa').post(jsonku.tambahMahasiswa)
  app.route('/mahasiswa/update').put(jsonku.ubahDataMahasiswa)
  app.route('/mahasiswa/delete').delete(jsonku.deleteMahasiswa)
  app.route('/tampilmatakuliah').get(jsonku.tampilGroupMatakuliah)
}
