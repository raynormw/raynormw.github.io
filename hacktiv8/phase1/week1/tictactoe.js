function tic_tac_toe_board () {
  let xCount = 0;
  let oCount = 0;
  let board = [];

  for (let i = 0; i < 3 ; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      let random = Math.random();

      if (random < 0.5 && xCount < 5) {
        xCount++;
        row.push("x");
      } else if (oCount < 5) {
        oCount++;
        row.push("o");
      } else {
        row.push("x" || "o");
      }
      
    }
    board.push(row);
  }

  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
