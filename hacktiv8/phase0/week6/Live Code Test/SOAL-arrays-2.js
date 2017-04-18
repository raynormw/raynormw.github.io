// Array 2 Competency Test

function initialGrouping(studentsArr) {
  let hasil = [];
  let init = studentsArr.map(item => item[0]);
  let unique = Array.from(new Set(init));

  unique.forEach(item => {
    let temp = [];
    temp.push(item);

    for (let student of studentsArr) {
      if (student[0] === item) temp.push(student);
    }
    
    hasil.push(temp);
  });

  return hasil;
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
