/*
HACKTIV8 Final Live Coding Rocket

Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di
Inggris dengan melakukan pengeboman di tempat-tempat yang berbeda. Setiap kali mereka
mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh ke
Scotland Yard, markas kepolisian Inggris. Seorang detektif pemula tengah mencoba
menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan angka 2,3,4,6,7,
atau 8
yang ditulis dengan kata dalam bahasa Inggris, dan diacak. Seluruh karakter di kode tersebut
apabila disusun dengan baik, akan menghasilkan beberapa kata berupa angka dalam bahasa
Inggris.
District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode
tersebut!
Karena tiga narapidana ini benci dengan sel mereka, mereka tidak memasukkan angka 1, 5,
dan 9.
Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
TWO -> 2
THREE -> 3
FOUR -> 4
SIX -> 6
SEVEN -> 7
EIGHT -> 8
Contoh Kode 1:
WTWTHROETEO. Apabila diacak mendapatkan kombinasi TWO TWO THREE => 2, 2, dan 3.
2 + 2 + 3 = 7, maka targetnya District 7!
Contoh Kode 2:
HSEVTEEING. Apabila diacak mendapatkan kombinasi SEVEN EIGHT => 7 dan 8. 7 + 8 = 15,
maka targetnya District 15!
Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi FOUR SIX SEVEN => 4, 6, dan 7. 4
+ 6 + 7 = 17, maka targetnya District 17!
Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi TWO => 2. Maka targetnya District 2!

=======================
British National Crisis
=======================
*/

function nextTargetArea(code) {
  // Code Hanya Disini!
  let district = 0;
  let totalDistrict = 0;
  let totalCode = code.split("").reduce((sum, current) => sum + current.codePointAt(0), 0);

  for (let char of code) {
		if (char === "W") {
			district += 2;
			totalDistrict += 250;
		} else if (char === "F") {
			district += 4;
			totalDistrict += 316;
		} else if (char === "X") {
			district += 6;
			totalDistrict += 244;
		} else if (char === "V") {
			district += 7;
			totalDistrict += 385;
		} else if (char === "G") {
			district += 8;
			totalDistrict += 369;
		}
  }

  while (totalCode !== totalDistrict) {
		district += 3;
		totalDistrict += 376;
  }

  return `District ${district} is the next target!`;
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"
