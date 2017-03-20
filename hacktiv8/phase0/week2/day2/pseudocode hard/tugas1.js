//Pseudocode Menjadi Kode JavaScript (Hard), Tugas 1
// Tirta Wirya Putra - Hacktiv8 bootcamp phase0 week2 day2

var total = 0;
for(index = 1; index <= 100; index++) {
  if(index % 2 === 0) {
    total = total + index;
  }
  else if(index % 2 !== 0) {
    total = total - index;
  }
}
console.log("Total: " + total);