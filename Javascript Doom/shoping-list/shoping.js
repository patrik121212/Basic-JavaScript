const keranjang = document.getElementById("keranjang");
const belanjaan = ["Susu", "Roti", "Kopi", "Keju"];

belanjaan.forEach(function(barang) 
{
   const li = document.createElement("li");
   li.textContent = barang + " ";
   li.style.marginBottom = "10px";

   const btnHapus = document.createElement("button");
   btnHapus.textContent = "Hapus";
   btnHapus.style.marginLeft = "20px";
   btnHapus.style.color = "red";

    btnHapus.addEventListener("click", function() {
        li.remove(); // Menghapus elemen <li> saat tombol "Hapus" diklik
    });
    // Menambahkan tombol "Hapus" ke dalam elemen <li>
    li.appendChild(btnHapus);
    // Menambahkan elemen <li> ke dalam keranjang
    keranjang.appendChild(li);
});