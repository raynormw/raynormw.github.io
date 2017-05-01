// 1. Describe
/* Set adalah adalah tipe data abstrak yang dapat menyimpan nilai tertentu,
   tanpa urutan tertentu, dan tidak ada nilai yang berulang. */
// ------------
// 2. Implement
  // Database customer
  let set = new Set();

  let akbar = { name: "Akbar" };
  let rifki = { name: "Rifki" };
  let icha = { name: "Icha" };

  // visits, some customer come multiple times
  set.add(akbar);
  set.add(rifki);
  set.add(icha);
  set.add(akbar);
  set.add(icha);

  // set keeps only unique values
  console.log(set.size); // 3

  for (let user of set) {
    console.log(user.name); // Akbar (then Rifki and Icha)
  }
// ------------
// 3. Get real
/* Permasalahan di dunia nyata yang dapat di pecahkan dengan struktur data Set
   adalah seperti contoh kode diatas, yaitu database / datalist customer tidak
   ada repetitif atau duplikat. Value tetap unique, walaupun customer datang
   kembali tetapi tetap dihitung hanya sekali. */
