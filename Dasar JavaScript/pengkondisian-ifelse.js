// pengkondisian if 
     let angka = 0.6
     if (angka < 0.5) {
         console.log("Angka kurang dari 0.5")
     }


     // pengkondisian if...else
     let nilai = 50
     if (nilai >= 60) {
         console.log("Selamat, Anda lulus!")
     } else {
         console.log("Maaf, Anda tidak lulus.")
     }

     // pengkondisian if...else if...else
     let skorMu = '3-0'
     if (skorMu === '3-0') {
          console.log("King Mu Sulit Dikalahkan")
     } else if (skorMu === '2-1') {
          console.log("King Mu Bosan Menang")
     } else {
          console.log("Tenang King Mu Pasti Menang Lagi")
     }

//      // study kasus kelulusan siswa

     let nilaiAkhir = 55
     let grade 
     if (nilaiAkhir >= 90){
          grade = 'A'
     }else if (nilaiAkhir >= 80){
          grade = 'B'
     }else if (nilaiAkhir >= 70){
          grade = 'C'
     }else {
          grade = 'tidak lulus'
     }
     console.log("Nilai Akhir Anda: " + nilaiAkhir) // output: Nilai Akhir Anda: 75
     console.log("Grade Anda: " + grade) // output: Grade Anda: C

// contoh pengkondisian berikutnya

let totalBelanja = 500000
let member = false
let hari = "senin"
let uangBayar = 600000;
let diskon = 0

// diskon berdasarkan total belanja
if (totalBelanja >= 500000){
     diskon +=20; // diskon 20%
} else if (totalBelanja >= 200000){
     diskon +=10; // diskon 10%
} 

// diskon tambahan untuk member
if (member === true){
     diskon +=5; // diskon tambahan 5%
}
// diskon tambahan untuk hari minggu
if (hari == "minggu"){
     diskon +=5; // diskon tambahan 5%
}
// batasi diskon maksimal 30%
if (diskon >30){
     diskon =30;
}

// hitung total harga setelah diskon
let potongan = totalBelanja * (diskon / 100);
let totalAkhir = totalBelanja - potongan;
// cek pembayaran

if (uangBayar >= totalAkhir){
     let kembalian = uangBayar - totalAkhir;
     console.log("Total Belanja: " + totalBelanja) // output: Total Belanja: 500000
     console.log("Diskon: " + diskon + "%") // output: Diskon: 30%
     console.log("Total yang harus dibayar:"+ totalAkhir) // output: Total yang harus dibayar:350000
     console.log("Kembalian: " + kembalian) // output: Kembalian: 250000

}else{
     console.log("Uang Anda tidak cukup untuk membayar tagihan sebesar: " + totalAkhir) // output: Uang Anda tidak cukup untuk membayar tagihan sebesar: 350000
}