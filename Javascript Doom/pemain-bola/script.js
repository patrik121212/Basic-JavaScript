const wadah = document.getElementById("daftar-pemain");
const pemain = ["Cristiano Ronaldo", "Lionel Messi", "Neymar Jr.", "Kylian Mbappé"];

pemain.forEach(function(nama){
     // Membuat elemen <li> untuk setiap nama pemain
     const li = document.createElement("li");
     li.textContent = nama + " ";
     li.style.marginBottom = "10px";
     li.style.color = "black";

     // Membuat tombol "Berikan Seragam"
     const btnSeragam = document.createElement("button");
     btnSeragam.textContent = "Berikan Seragam";
     btnSeragam.style.marginLeft = "20px";
     btnSeragam.style.color = "blue";

     btnSeragam.addEventListener("click", function(){
          if (li.style.color === "black") {
               li.style.color = "red";
               btnSeragam.textContent = "Buang seragam";
          } else if(li.style.color === "red") {
               li.style.color = "black";
               btnSeragam.textContent = "Berikan Seragam";
          }    });
               
     wadah.appendChild(li);
     li.appendChild(btnSeragam);


     });