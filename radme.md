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
