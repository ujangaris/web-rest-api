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
                "values": "Berhasil menambahkan data!"
            }
        - buka request baru dengan enpoint GET http://localhost:5000/mahasiswa
        - lihat hasil response akan ada data  yang berhasil terupdate.
