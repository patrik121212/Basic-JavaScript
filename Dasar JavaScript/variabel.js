// variabel adalah tempat untuk menyimpan data
// contoh penggunaan variabel


// deklarasi variabel dengan let
let umur = 25
console.log("Umur saya adalah " + umur + " tahun.") // output: Umur saya adalah 25 tahun.


// deklarasi variabel dengan const
const PI = 3.14
console.log("Nilai PI adalah " + PI) // output: Nilai PI adalah 3.14

// deklarasi variabel dengan var
var namaDepan = "John"
var namaBelakang = "Doe"
console.log("Nama lengkap saya adalah " + namaDepan + " " + namaBelakang) // output: Nama lengkap saya adalah John Doe

// deklarasi variabel yang sering digunakan
let a = 10
let b = 20
let c = a + b
console.log("Hasil penjumlahan a dan b adalah " + c) // output: Hasil penjumlahan a dan b adalah 30

// alasan mengapa var sudah jarang digunakan
// 1. var memiliki scope function, sehingga dapat menyebabkan masalah jika digunakan di dalam blok seperti if atau for
// 2. var dapat dideklarasikan ulang, sehingga dapat menyebabkan kebingungan jika tidak hati-hati
// 3. var tidak memiliki fitur block scope seperti let dan const, sehingga dapat menyebabkan masalah jika digunakan di dalam blok seperti if atau for
// contoh masalah yang dapat terjadi dengan var
if (true) {
    var x = 10
}    
console.log(x) // output: 10 karena var memiliki scope function, sehingga x dapat diakses di luar blok if

if (true) {
    let y = 20
    console.log(y) // output: 20 karena let memiliki block scope, sehingga y dapat diakses di dalam blok if
} 
//console.log(y) output: ReferenceError: y is not defined karena let memiliki block scope, sehingga y tidak dapat diakses di luar blok if

// contoh mengapa const dan let lebih baik daripada var
// contoh penggunaan const
const PI2 = 3.14
//PI2 = 3.14159 // output: TypeError: Assignment to constant variable karena const tidak dapat diubah nilainya
// contoh penggunaan let
let umur2 = 30
umur2 = 31 // nilai umur2 dapat diubah karena let dapat diubah nilainya
console.log("Umur saya sekarang adalah " + umur2 + " tahun.") // output: Umur saya sekarang adalah 31 tahun.
// kesimpulan: gunakan const jika nilai variabel tidak akan diubah, gunakan let jika nilai variabel akan diubah, hindari penggunaan var untuk menghindari masalah scope dan redeklarasi.

let namaLengkap = "Patrik Tangdilintin" //variabel menggunakan camel case
let NamaLengkap = "Patrik" //variabel menggunakan pascal case
let nama_lengkap = "Tangdilintin" //variabel menggunakan snake case
let $variabel = "contoh" //variabel menggunakan simbol $ di awal