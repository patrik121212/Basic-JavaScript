
// tipe data number
let angka =10
console.log(typeof angka) // output: number

// tipe data string
let nama ="John Doe"
console.log(typeof nama) // output: string

// tipe data boolean
let isStudent = true
console.log(typeof isStudent) // output: boolean

// tipe data nan
let notANumber = NaN
console.log(typeof notANumber) // output: number
// contoh
let hasil = "kamu" / 1
console.log(hasil) // output: NaN

let a = 5
let b = "string"
console.log(a == b) // output: false karena tipe berbeda
// contoh penggunaan operator perbandingan
let x = 10
let y = "20"
console.log(x < y) // output: true karena 10 < 20
console.log(x === y) // output: false karena tipe berbeda
console.log(x != y) // output: true karena 10 tidak sama dengan 20
console.log(x !== y) // output: true karena tipe berbeda
console.log(x >= 10) // output: true karena 10 >= 10
console.log(y <= "20") // output: true karena 20 <= 20

// cara mengecek jumlah karakter pada string
let kalimat = "HalonamasayaJohnDoe"
console.log("Jumlah karakter pada kalimat: " + kalimat.length) // output: Jumlah karakter pada kalimat: 24

// perbedaan null dan undefined
let dataKosong = null
console.log(typeof dataKosong) // output: object karena null dianggap sebagai objek di javascript

let dataTidakDidefinisikan
console.log(typeof dataTidakDidefinisikan) // output: undefined karena variabel belum didefinisikan

// math object
Math.PI // output: 3.141592653589793
Math.sqrt(16) // output: 4
Math.pow(2, 3) // output: 8
Math.random() // output: angka random antara 0 dan 1

let angkaRandom = Math.floor(Math.random() * 100) + 1 // menghasilkan angka random antara 1 dan 100
console.log("Angka random antara 1-100: " + angkaRandom)