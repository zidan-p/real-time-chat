## Frontend dari aplikasi real-time-chat
perlu diketahui, ini adalah versi yang masih belum stabil, sehingga kedepanya pasati akan ada beberapa perubahan besar untuk bagian ini.
untuk frontend ini tersendiri terdapat banyak sekali struktur folder yang harus menjalankan aplikasi ini.

akan saya ringkas bagian penting berikut

 - `dist` | ini merupakan tempat hasil module js yang sudah dicompile, ini juga nantinya yang digunakan untuk script src main index.
 - `src` | tempat bagaimana tampilan dan logika aplikasi ini berjalan. lebih baik untuk tidak terlalu banyak memberi perubahan folder saat ini.
 - `temp_view` | tempat membuat view sementara dari aplikasinya, karena pasti nantinya akan diubah strukturnya menjadi componen js di folder `src`. 

untuk menjalankan program yang sudah di build, langkahnya mudah.
ikuti instruksi dibawah.

 1. ubah directory ke folder fronted | `cd ./frontend`.
 2. lakukan build webpack | `npm run build`.
 3. buka file `index.html` langsung dari explorer

karena disini hanya buid 'js'-nya saja yang masih saya bisa, jadi untuk membukanya langsung ke explorernya. untuk kedepanya pasti akan saya ganti ke server tersendiri untuk buildnya.

__note__
jangan lupa instal semua dependency | `npm install`
