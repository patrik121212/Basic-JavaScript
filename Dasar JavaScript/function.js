// function adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi dapat digunakan untuk mengorganisir kode, menghindari pengulangan, dan membuat kode lebih mudah dibaca dan dipelihara.
// contoh fungsi sederhana

function hitungTotal(harga, jumlah) {
     let total = harga * jumlah;
     return total; // mengembalikan nilai total
}

let hargaKopi = hitungTotal(5000, 2);
console.log("Total harga kopi: " + hargaKopi);

// fungsi validasi input menggunakan arow function

const cekPassword = (password) => {
     if (password.length < 8) {
          return "Password terlalu pendek, minimal 8 karakter";
     } else{
          return "Password valid";
     }
}
console.log(cekPassword("ztart101342"));


// menghitung total belanja jika total belanja lebih dari 100.000 dapat diskon 10%
function hitungBelanja(hargaSatuan, jumlah) {
     let totalBelanja = hargaSatuan * jumlah;
     if (totalBelanja >= 100000){
          let diskon = totalBelanja * 0.10; // Potongan 10% 
          return `Total belanja setelah diskon: Rp${totalBelanja - diskon} `;
     }
     return `Total yang harus dibayar: Rp${totalBelanja}`;
}

let belanjaKost = hitungBelanja(25000, 5);
console.log(belanjaKost);

// function dengan try catch untuk menangani error
