## Frontend dari aplikasi real-time-chat (#2)
### perubahan yang kedua

Fungsi singkat beberpaa direktori

 - `./dist` | ini merupakan tempat hasil module js yang sudah dicompile, ini juga nantinya yang digunakan untuk script src main index.
 - `./src` | tempat bagaimana tampilan dan logika aplikasi ini berjalan. lebih baik untuk tidak terlalu banyak memberi perubahan folder saat ini.
 - `./temp_view` | tempat membuat view sementara dari aplikasinya, karena pasti nantinya akan diubah strukturnya menjadi componen js di folder `./src`.  __bila ingin melihat file yang masih statis yg belum diproses, maka bisa langsung masuk direktori ini dan buka semua file pada `./temp_view/view`__.
 - `config` | berisi semua konfigurasi untuk frontend project ini, untuk tahap ini masih berisi konfigurasi "webpack".

untuk menjalankan program yang sudah di build, langkahnya mudah.
ikuti instruksi dibawah. (versi #2)

 1. ubah directory ke folder fronted | `cd ./frontend`.
 2. lakukan build webpack | `npm run build`.
 3. buka file `./dist/index.html` langsung dari explorer

bisa langsung dibuka karena ini merupakan hasil bundling, sehingga semua kode dari node js sudah di ambil, _transpile_ , dan _compile. sehingga menghasilkan file js murni yang sangat kecil.

__note__
+ jangan lupa instal semua dependency | `npm install`.
+ bila ingin melakukan pengembangan maka gunakan command `npm run dev`.
