let hari
let tanggal = new Date().getDay()

switch (tanggal) {
     case 0:
          hari = "Minggu"
          break
     case 1:
          hari = "Senin"
          break
     case 2 :
          hari = "Selasa"
          break
     case 3 :
          hari = "Rabu"
          break
     case 4 :
          hari = "Kamis"
          break
     case 5 :
          hari = "Jumat"
          break
     case 6 :
          hari = "Sabtu"
          break
}

console.log ("Hari INi adalah : " + hari)
