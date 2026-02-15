// looping dalam javascript
// looping adalah sebuah perulangan yang digunakan untuk mengeksekusi
// sebuah blok kode secara berulang-ulang hingga kondisi tertentu terpenuhi

// contoh looping menggunakan for
for (let nomor = 1; nomor <= 5; nomor++){
     console.log("nomor antrean ke-" + nomor + " silahkan masuk");
}

for (let i=1; i<=10; i+=2){
     console.log("angka ganjil: " + i);
}

// looping dengan menggunakan filtering
for (let i=1; i <= 10; i++){
     if (i % 2 != 0){
          console.log("angka ganjil: " + i);
     }
}
// membuat bintang dengan looping
let jumlahBaris = 3
for (let i = 1; i <= jumlahBaris; i++){
     let bintang = ""; 
     for (let j = 1; j <= i; j++){
          bintang += "*";
     }
     console.log(bintang);
}

// looping dengan menggunakan array
// mencari barang yang ada digudang
let gudang = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"]
let barangDicari = "Keyboard"
let ditemukan = false

for (let i= 0; i < gudang.length; i++){
     console.log(`Mencari rak ke- ${i}: + ${gudang[i]}`);

     if (gudang[i] === barangDicari){
          ditemukan = true
          console.log(`Ketemu! ${barangDicari} ada di rak ke- ${i}`);
          break; // keluar dari looping jika barang ditemukan
     }
if (!ditemukan){
     console.log(`${barangDicari} tidak ditemukan di gudang`);
}
}

// contoh looping menggunakan while
// penerapan pada sistem login

let pinBenar = "1234";
let inputUser = "";
let percobaan = 0;
const maxPercobaan = 3;

// loop akan berjalan selama input user tidak sama dengan pin benar
while (inputUser !== pinBenar && percobaan < maxPercobaan) {
     percobaan++;
     inputUser = 1111 // misalkan user memasukkan pin 1111
     console.log(`Percobaan ke-${percobaan}: pin salah.`);
}
if (inputUser === pinBenar){
     console.log("aksess diterima, Selamat Datang!");
} else {
     console.log("Aksess ditolak, terlalu banyak percobaan.");
}

// contoh pada penrapan pembayaran di alfamart
const hargaBarang = [15000, 20000, 50000, 30000];
let totalBelanja = 0;

for (let i = 0; i < hargaBarang.length; i++) {
    totalBelanja += hargaBarang[i];
}
// Cek jika total belanja lebih dari 100.000 
if (totalBelanja > 100000) {
    let nilaiDiskon = totalBelanja * 0.10; // Potongan 10%
    let totalSetelahDiskon = totalBelanja - nilaiDiskon;
    
    console.log(`Selamat! Anda dapat diskon 10% sebesar Rp${nilaiDiskon}`);
    console.log(`Total yang harus dibayar menjadi: Rp${totalSetelahDiskon}`);
} else {
    console.log(`Total belanja Anda: Rp${totalBelanja}`);
    console.log("Terima kasih sudah berbelanja!");
}

// Nested Looping

for (let baris= 1; baris <= 3; baris++){
     let barisTeks = "";
     // looping dalam looping
     for (let kolom = 1; kolom <= 5; kolom++){
          barisTeks += `(B${baris}-k${kolom}) `;
     }
     console.log(barisTeks);
}

// // nested looping dinamis membuat bintang
for (let i = 1; i <= 5; i++){
     let baris = "";
     for (let j = 1; j <= i; j++){
          baris += "*";
     }    
     console.log(baris);
}
// nested looping statis membuat bintang     
for (let i = 1; i <= 5; i++) {
    let teks = "";
    for (let j = 1; j <= 5; j++) { // Batasnya saya ganti jadi 5 tetap (statis)
        teks += "*";
    }
    console.log(teks);
}