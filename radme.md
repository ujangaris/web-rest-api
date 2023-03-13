# Web Rest API

## Configurasi & installasi

    Todo:
    1.  npm init
    2.  npm  install --save express mysql body-parser

## Buat server

    Todo:
    1.  server.js
        - deklarasi dan pasang (express, body-parser)
    2.  jalankan server: node server.js

## Koneksi , Response, Controller, routes

    Todo:
    1.  koneksi.js
        - buat koneksi database
    2.  rest.js
    3.  controller.js
        - panggil koneksi
        - panggil rest
    4.  routes.js
        - panggil controller
    5.  server.js
        - panggil routes
    6.  jalankan server : node server.js

## GET All Data Mahasiswa

    Todo:
    1.  controller.js
        - menampilkan semua data mahasiswa
    2.  routes.js
        - route /mahasiswa
    3.  pengujian pada browser
        - http://localhost:5000/mahasiswa

## GET Single Data Mahasiswa berdasarkan id

    Todo:
    1.  controller.js
        - menampilkan satu data mahasiswa berdasarkan id
    2.  routes.js
        - route /mahasiswa/:id
    3.  pengujian pada browser
        - http://localhost:5000/mahasiswa/1

## POST DATA - Menambah data mahasiswa

    Todo:
    1.  controller.js
        - menambah data mahasiswa
    2.  routes.js
        - route /mahasiswa dengan method POST
    3.  pengujian pada postman:
        - endpoint POST http://localhost:5000/mahasiswa
        - body -> x-www-form-urlencoded
        - isi form dengan nim, nama, dan jurusan kemudian send
        - jika berhasil akan ada response:
            {
                "status": 200,
                "values": "Berhasil menambahkan data!"
            }
        - buka request baru dengan enpoint GET http://localhost:5000/mahasiswa
        - lihat hasil response akan ada data baru yang berhasil terbuat.

## UPDATE DATA - Update data mahasiswa

    Todo:
    1.  controller.js
        - mengubah data berdasarkan id mahasiswa
    2.  routes.js
        - /mahasiswa/update dengan method PUT
    3.  pengujian pada postman:
        - endpoint PUT http://localhost:5000/mahasiswa/update
        - body -> x-www-form-urlencoded
        - isi form dengan id,nim, nama, dan jurusan kemudian send
        - jika berhasil akan ada response:
            {
                "status": 200,
                "values": "Berhasil mengupdate data!"
            }
        - buka request baru dengan enpoint GET http://localhost:5000/mahasiswa
        - lihat hasil response akan ada data  yang berhasil terupdate.

## DELETE DATA - Delete data mahasiswa

    Todo:
    1.  controller.js
        - Delete data mashasiswa
    2.  routes.js
        - /mahasiswa/delete method DELETE
    3.  pengujian pada postman:
        - endpoint PUT http://localhost:5000/mahasiswa/delete
        - body -> x-www-form-urlencoded
        - isi form dengan id,kemudian send
        - jika berhasil akan ada response:
            {
                "status": 200,
                "values": "Berhasil mendelete data!"
            }
        - buka request baru dengan enpoint GET http://localhost:5000/mahasiswa
        - lihat hasil response akan ada data  yang berhasil terhapus.

## Nested json Object

    Todo:
    1.  controller.js
        - menampilkan matakuliah group
    2.  routes.js
        - tampilmatakuliah method GET
    3.  pada phpmyadmin:
        - tambahkan 2 table baru :
            - table : matakuliah
                * id_matakuliah
                * matakuliah
                * sks
            - table : krs
                * id_krs
                * tanggal_krs
                * id_matakuliah
                * id_mahasiswa
        - kemudian insert data disetiap table
        - pada table krs masuk ke bagian SQL kemudian relasikan data yang sudah kita insert
          menggunakan query:
             "SELECT mahasiswa.id_mahasiswa, mahasiswa.nim,mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah,matakuliah.sks
                FROM krs
                JOIN mahasiswa
                JOIN matakuliah
                WHERE krs.id_mahasiswa = mahasiswa.id_mahasiswa
                AND krs.id_matakuliah = matakuliah.id_matakuliah
                ORDER BY mahasiswa.id_mahasiswa;"
    4.  pengujian pada postman:
        - endpoint GET http://localhost:5000/tampilmatakuliah
        - kemudian send
        - jika berhasil akan ada response yakni tampil data krs yang terhubung dengan mahasiswa dan matakuliah

## Install JWT dan Package

    Todo:
    1.  install morgan
        - npm i morgan
    2.  install IP
        - npm i ip
    3.  install jsonwebtoken
        - npm i jsonwebtoken
