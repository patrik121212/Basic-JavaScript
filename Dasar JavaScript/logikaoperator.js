// operator logika adalah operator yang digunakan untuk menggabungkan dua atau lebih ekspresi logika
// operator logika yang umum digunakan adalah AND (&&), OR (||), dan NOT (!)
// contoh penggunaan operator logika

// operator AND (&&)
// operator and adalah operator yang mengembalikan nilai true jika kedua operan bernilai true
let umur = 20;
let memilikiKTP = true;

if (umur >= 17 && memilikiKTP) {
     console.log("Anda cukup umur.");
} else {
     console.log("Anda belum cukup umur atau tidak memiliki KTP.");
}


// operator OR (||)
// operator or adalah operator yang mengembalikan nilai true jika salah satu operan bernilai true
let hariLibur = false;
let cuacaCerah = true;
if (hariLibur || cuacaCerah) {
     console.log("Anda bisa pergi piknik.");
} else {
     console.log("Anda tidak bisa pergi piknik.");
}


// operator NOT (!)
// operator not adalah operator yang mengembalikan nilai kebalikan dari operan
let sedangHujan = true;
if (!sedangHujan) {
     console.log("Anda bisa keluar rumah tanpa payung.");
} else {
     console.log("Anda perlu membawa payung.");
}

// gabungan and dan or

let isLogin =true;
let isVerified = true;
let isAdmin =  true;

if (isLogin && (isVerified || isAdmin)) {
     console.log("Akses diberikan.");
} else {
     console.log("Akses ditolak.");
}

// contoh penggunaan operator logika dalam pengkondisian
let usia = 14;
if (usia >= 18 && usia <= 30) {
     console.log("Anda termasuk dalam kategori dewasa muda.");
} else {
     console.log("Anda tidak termasuk dalam kategori dewasa muda.");
}