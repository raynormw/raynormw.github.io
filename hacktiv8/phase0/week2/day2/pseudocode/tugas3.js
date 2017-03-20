// Mengubah Pseudocode menjadi kode JavaScript Tugas 3
// Tirta Wirya Putra - Hacktiv8 Phase0 Week2 day2

var tahun = prompt("Masukkan sebuah tahun:");
if(tahun % 4 === 0) {
  if(tahun % 100 !== 0) {
    console.log(tahun + " adalah tahun kabisat");
  }
  else if(tahun % 400 === 0) {
    console.log(tahun + " adalah tahun kabisat");
  }
  else {
    console.log(tahun + " adalah bukan tahun kabisat");
  }
}
else {
  console.log(tahun + " adalah bukan tahun kabisat");
}
