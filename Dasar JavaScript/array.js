// arrray dalam javascript
// array adalah sebuah struktur data yang digunakan untuk menyimpan beberapa nilai dalam satu variabel
// array dapat menyimpan berbagai tipe data seperti number, string, boolean, objek, dan lain-lain
// fungsi arraw functional programming seperti map, filter, reduce dapat digunakan pada array

// contoh array
let tugas = ["Mengerjakan PR", "Belajar JavaScript", "Membaca buku"]

// tambah tugas baru ke akhir
tugas.push("Olahraga") 

// tambah tugas mendesak ke awal
tugas.unshift("Makan")

// hapus tugas yang sudah selesai 
tugas.splice(2, 1) // menghapus tugas pada index ke-2

// menampilkan semua tugas
tugas.forEach((item, i) =>{
     console.log(`${i + 1}: ${item}`);
});

// daftar email array
let daftarEmail = ["joni@gmail.com", "dono@gmail.com", "andreonana@gmail.com"]

// menambahkan email baru didepan
daftarEmail.unshift("alex@gmail.com")

// menghapus email terakhir
daftarEmail.pop()
// menampilkan semua email
daftarEmail.forEach((email, index) =>{
     console.log(`Email ke-${index + 1}: ${email}`);
});

// array dan object
const daftarSiswa = [
    {
        nama: "Andi",
        nilai: 85,
        status: "Lulus"
    },
    {
        nama: "Budi",
        nilai: 60,
        status: "Remedial"
    },
    {
        nama: "Caca",
        nilai: 90,
        status: "Lulus"
    }
];

// Menambah satu siswa baru (Object baru) ke dalam Array
daftarSiswa.push({
    nama: "Deni",
    nilai: 75,
    status: "Lulus"
});

// Menampilkan data menggunakan forEach
console.log("--- LAPORAN NILAI SISWA ---");

daftarSiswa.forEach((siswa, index) => {
    // mengambil data object: siswa.nama atau siswa.nilai
    console.log(`${index + 1}. Nama: ${siswa.nama} | Nilai: ${siswa.nilai} | Status: ${siswa.status}`);
});

// tugas keranjang belanja dengan array dan objek
const keranjangBelanja = [
    { namaBarang: "Kopi",
        harga: 5000
    },

    { namaBarang: "Susu",
        harga: 15000
    },

    { namaBarang: "Roti",
        harga: 10000
    }
];
// menampilkan barang belanja dan total harga DENGAN forEach
let totalHarga = 0;
console.log("--- KERANJANG BELANJA ---");

keranjangBelanja.forEach((item, index) => {
    console.log(`${index + 1}. ${item.namaBarang} - Rp${item.harga}`);
    totalHarga += item.harga; // Tambahkan ke sini
});
totalHarga = keranjangBelanja.reduce((total, item) => total + item.harga, 0);
console.log(`Total yang Harus Dibayar: Rp${totalHarga}`);

// memfiter barang yang terlalu mahal dan stoknya habis dengan menggunakan filter pada array
const gudangBarang = [
    { namaBarang: "Laptop", harga: 15000000, stok: 5 },
    { namaBarang: "Mouse", harga: 150000, stok: 0 },
    { namaBarang: "Monitor", harga: 200000, stok: 10 },
    { namaBarang: "Keyboard", harga: 500000, stok: 0 },
    { namaBarang: "Headset", harga: 800000, stok: 3 }
];
// memfilter barang yang terlalu mahal (harga > 800000) dan stoknya habis (stok === 0)
const barangTersedia = gudangBarang.filter(item => item.harga <= 800000 && item.stok > 0);
console.log("--- BARANG TERSEDIA ---");

barangTersedia.forEach((item, index) => {
    console.log(`${index + 1}. ${item.namaBarang} - Rp${item.harga} | Stok: ${item.stok}`);
});
