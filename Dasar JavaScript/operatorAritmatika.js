// operator aritmatika dalam JavaScript

let a = 10
let b = 20

let penjumlahan = a + b // operator penjumlahan
let pengurangan = b - a // operator pengurangan
let perkalian = a * b // operator perkalian
let pembagian = b / a // operator pembagian
let sisaBagi = b % a // operator sisa bagi
let perpangkatan = a ** 2 // operator perpangkatan
console.log("Hasil penjumlahan: " + penjumlahan) // output: Hasil penjumlahan: 30
console.log("Hasil pengurangan: " + pengurangan) // output: Hasil pengurangan: 10
console.log("Hasil perkalian: " + perkalian) // output: Hasil perkalian: 200
console.log("Hasil pembagian: " + pembagian) // output: Hasil pembagian: 2
console.log("Hasil sisa bagi: " + sisaBagi) // output: Hasil sisa bagi: 0
console.log("Hasil perpangkatan: " + perpangkatan) // output: Hasil perpangkatan: 100     



// contoh studi kasus penggunaan operator aritmartika pada kasir tokoh, jika barang mencapai 100.000 maka akan mendapatkan diskon 10%
let hargaBarang = 25000
let jumlahBarang = 5
let uangPembeli = 200000 //uang pembeli
// hitung total harga
let totalHarga = hargaBarang * jumlahBarang
// cek apakah total harga mencapai 100.000
if (totalHarga >= 100000) {
     diskon = totalHarga * 0.10; // hitung diskon 10%
}
// hitung harga setelah diskon
let hargaSetelahDiskon = totalHarga - diskon

// hitung kembalian
let kembalian = uangPembeli - hargaSetelahDiskon

console.log("Total Haga:" + totalHarga) // output: Total Harga:125000
console.log("Harga Setelah Diskon: " + hargaSetelahDiskon) // output: Harga Setelah Diskon: 112500
console.log("Kembalian: " + kembalian) // output: Kembalian: 87500

// contoh dalam bentuk prompt
let harga = Number(prompt("Masukkan harga barang: "))
let jumlah = Number(prompt("Masukan Jumlah Barang:"))
let uangBayar = Number(prompt("Masukkan uang Bayar: "))

let total = harga * jumlah
let diskon = 0
if (total >= 100000){
     diskon = total * 0.10 // hitung diskon 10%
}
let hargaSebelumDiskon = total
let totalHargaAkhir = total - diskon
let kembalianUang = uangBayar - totalHargaAkhir

alert("Total Harga: " + hargaSebelumDiskon) // output: Total Harga: 125000
alert("Harga Setelah Diskon: " + totalHargaAkhir) // output: Harga Setelah Diskon: 112500
alert("Kembalian: " + kembalianUang) // output: Kembalian: 87500

