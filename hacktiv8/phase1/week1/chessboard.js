'use strict'

const makeChessboard = () => {
  let rowBlackPieces = [];
  let rowBlackPawn = [];
  let rowWhitePawn = [];
  let rowWhitePieces = [];
  let board = new Array(8);
  let result = [];

  for (let i = 0; i < 8; i++) {
    if (i === 0 || i === 7) {
      rowBlackPieces[i] = "Benteng Hitam";
      rowWhitePieces[i] = "Benteng Putih";
    } else if (i === 1 || i === 6) {
      rowBlackPieces[i] = "Kuda Hitam";
      rowWhitePieces[i] = "Kuda Putih";
    } else if (i === 2 || i === 5) {
      rowBlackPieces[i] = "Gajah Hitam";
      rowWhitePieces[i] = "Gajah Putih";
    } else if (i === 3) {
      rowBlackPieces[i] = "Ratu Hitam";
      rowWhitePieces[i] = "Ratu Putih";
    } else if (i === 4) {
      rowBlackPieces[i] = "Raja Hitam";
      rowWhitePieces[i] = "Raja Putih";
    }
    rowBlackPawn[i] = "Pion Hitam";
    rowWhitePawn[i] = "Pion Putih";
  }

  for (let index = 0; index < 8; index++) {
    if (index === 0) {
      result.push(rowBlackPieces);
    } else if (index === 1) {
      result.push(rowBlackPawn);
    } else if (index === 6) {
      result.push(rowWhitePawn);
    } else if (index === 7) {
      result.push(rowWhitePieces);
    } else {
      result.push(board);
    }
  }

  return result;
}

const printBoard = x => {
  for (let i = 0; i < x.length; i++) {
    console.log(x[i].join(" "));
  }
}

printBoard(makeChessboard());

let tes = makeChessboard();
console.log(tes[7][0]); // 'Benteng Putih'
console.log(tes[0][1]); // 'Kuda Hitam'
console.log(tes[6][4]); // 'Pion Putih'
console.log(tes[0][5]); // 'Gajah Hitam'

module.exports = {
  makeChessboard,
  printBoard
}
