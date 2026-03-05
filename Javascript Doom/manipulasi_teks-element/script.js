// selecting element
const judul = document.getElementById("pesan");
const tombol = document.getElementById("btn-aksi");
const info = document.querySelector(".deskripsi");
const body = document.querySelector("body");

const judul1 = document.getElementById("judul");
const btnHilang = document.getElementById("btn-hilang");
const btnMuncul = document.getElementById("btn-muncul");

// function
function transformasi() {
  // manipulasi teks
  judul.textContent = "Anjayyy Tampilan Berubah";
  info.textContent = "kamu baru saja memanipulasi teks dengan DOM";

  // melakukan styling
  judul.style.color = "deepblue";
  judul.style.fontSize = "2.5rem";
  judul.style.color = "darkred";

  // manipulasi element
  tombol.textContent = "Berhasil";
  tombol.style.backgroundColor = "darkred";
  tombol.style.border = "none";
  tombol.style.color = "white";
  body.style.backgroundColor = "lightgray";
}

tombol.addEventListener("click", transformasi);

// fungsi untuk menyembunyikan element
btnHilang.addEventListener("click", function () {
  judul1.style.display = "none";
});

// fungsi untuk menampilkan element
btnMuncul.addEventListener("click", function () {
  judul1.style.display = "block";
});

// fungsi untuk toggle dark mode
const tombolMode = document.getElementById("btn-mode");
const body2 = document.body;
const temaSekarang = localStorage.getItem("temaTerpilih")

if (temaSekarang === "gelap") {
  body2.classList.add("dark-mode");
  tombolMode.textContent = "Light Mode";
}
function ubahTema(){
  body2.classList.toggle("dark-mode");
  if (body2.classList.contains("dark-mode")) {
    localStorage.setItem("temaTerpilih", "gelap");
    tombolMode.textContent = "Light Mode";
  } else {
    localStorage.setItem("temaTerpilih", "terang");
    tombolMode.textContent = "Dark Mode";
}
}
tombolMode.addEventListener("click", ubahTema);