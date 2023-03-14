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

## Tambah Table user & akses_token

    Todo:
    1.  table user
        pada phpmyadmin:
        - id :int
        - username : varchar
        - email  : varchar
        - password : varchar
        - role : int
        - tanggal_daftar : date
    2.  table akses_token
        pada phpmyadmin:
        - id_akses_token :int
        - id_user : int
        - access_token  : text
        - ip_address : varchar
    3.  pada table akses_token
        - relasikan table user dan table akses_token
        - on_delete: casecade
        - on_update: casecade
        - column : id_user
        - database : dbrestapi
        - table : use
        - column : id

## Registrasi User Baru

    Todo:
    1.  install md5
        - npm i md5
        - encripsi password ketika user melakukan registrasi
    2.  config/secret.js
    3.  midleware/auth.js
        - panggil package
        - controller untuk register
        - pengecekan email yang sudah terdaftar
    4.  midleware/index.js
        - daftarkan controller auth.js
    5.  server.js
        - tambahkan morgan
        - panggil morgannya
        - daftarkan menu routes dari index
    6.  pengujian pada postman:
        Enpoint Register : POST http://localhost:5000/auth/api/v1/register
        - body -> x-www-form-urlencoded
        - isi form dengan :
        username,email,password, role(1 atau 2 karna boolean), tanggal_daftar
        kemudian send
        - jika berhasil akan ada response:
        {
            "status": 200,
            "values": "Berhasil menambahkan data user baru!"
        }


        jika email sudah terdaftar tidak akan bisa register,
        dan akan ada response: Email sudah terdaftar!

## Login User & generate token

    Todo:
    1.  middleware/auth.js
        - controller untuk login
        - lakukan query ke database
        - membuat isi  nilai yang akan diberikan pada variabel table diatas
        - menggabungkan nilai pada variabel query dan table
        - akukan query ke database dengan mengirimkan query yang telah diformat
          dan menjalankan sebuah fungsi callback yang akan dijalankan ketika query selesai dieksekusi
        - jika usernya ada langsung tersimpan ditable access token
    2.  middleware/index.js
        - daftarkan endpoint login
    3.  setiap melakukan perubahan jangan lupa restart servernya : node server.js
    4.  pengujian pada postman:
        Enpoint Login : POST http://localhost:5000/auth/api/v1/login
        - body -> x-www-form-urlencoded
        - isi form dengan :
        ,email,password, kemudian send
        - jika berhasil akan ada response:
        {
            "success": true,
            "message": "Token jwt tergenerate!",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZCI6NiwidXNlcm5hbWUiOiJnaWxhbmciLCJlbWFpbCI6ImdpbGFuZ0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicm9sZSI6MiwidGFuZ2dhbF9kYWZ0YXIiOiIyMDIzLTAzLTEzVDE3OjAwOjAwLjAwMFoifV0sImlhdCI6MTY3ODc0OTk4OSwiZXhwIjoxNjc4NzUxNDI5fQ.n8ewrKygpEmwX5iTyasyClOLfcVrWlztZniRcq3c5HQ",
            "currUser": 6
        }


        jika email dan password tidak match/sama ,
        dan akan ada response:
        {
            "error": true,
            "message": "Email atau passwordnya salah!"
        }

## Verifikasi Token JWT & Role User

    Todo:
    1.  middleware/verifikasi.js
        - buat fnction verifikasi untuk memeriksa otentikasi pengguna
        - check authorization header with bearer token
        - memverifikasi token JWT
    2.  middleware/auth.js
        - akses halaman sesuai role
    3.  middleware/index.js
        - enpoint yang perlu autorization
    4.  pengujian pada postman:
        lakukan login dengan user role=2 pada Enpoint Login : POST http://localhost:5000/auth/api/v1/login
        kemudian pada Enpoint rahasia : POST http://localhost:5000/auth/api/v1/rahasia
        - authorization -> Bearer Token, kemudian copas token dari user yang login
        - body -> x-www-form-urlencoded
        - isi form dengan :
        ,role = 2 (pada pengujian ini bisa diganti 1,2, atau 3 jika multiple user*), namun pada pengujian ini user yang dapat mengakses hanya user dengan role = 2 kemudian send
        - jika berhasil akan ada response:
        {
            "status": 200,
            "values": "Halaman ini hanya untuk user dengan role = 2!"
        }


        jika role pada body diganti menjai 1/3 lain dari pada 2 ,
        dan akan ada response:
        {
            "auth": false,
            "message": "Gagal mengotorisasi role anda!"

        }

        jika token dikosongkan rensponnya:
        {
            "auth": false,
            "message": "Token tidak tersedia!"
        }
