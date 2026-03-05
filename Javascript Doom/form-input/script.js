const wadah = document.getElementById("daftar-pemain");
const inputBaru = document.getElementById("input-pemain");
const btnTambah = document.getElementById("btn-tambah");

btnTambah.addEventListener("click", function(){
     const nama = inputBaru.value;
     // cek jika input kosong,jangan jalankan kode
     if (nama === "") {
          alert("Masukkan nama pemain!");
          return;
     }
     // Membuat elemen <li> untuk setiap nama pemain
     const li = document.createElement("li");
     li.textContent = nama + " ";
     li.style.color = "black";

     const btnSeragam = document.createElement("button");
     btnSeragam.textContent = "Berikan Seragam";

     // condisi if- else if
     btnSeragam.addEventListener("click", function(){
          if (li.style.color === "black"){
               li.style.color = "red";
               btnSeragam.textContent = "Buang Seragam";
          }else if(li.style.color === "red"){
               li.style.color = "black";
               btnSeragam.textContent = "Berikan Seragam";
          }    
     });
    
     const btnHapus = document.createElement("button");
     btnHapus.textContent = "Hapus";
     btnHapus.addEventListener("click", function(){
          wadah.remove(li);
     });

     wadah.appendChild(li);
     li.appendChild(btnSeragam);
     li.appendChild(btnHapus);

     // reset input setelah menambahkan pemain
     inputBaru.value = "";
});