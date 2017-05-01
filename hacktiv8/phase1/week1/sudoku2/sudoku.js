"use strict"

class Sudoku {
  constructor(board_string) {
    this.string = board_string;
    this.solving = this.unsolved();
  }

  unsolved() {
    let unsolvedArray = [];

    for (let i = 0; i < this.string.length; i += 9) {
      let temp = [];
      for (let j = i; j < i+9; j++) {
        temp.push(+this.string[j]);
      }
      unsolvedArray.push(temp);
    }
    return unsolvedArray;
  }

  solve(matrix) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {

        if (matrix[row][col] !== 0) {
          continue;
        }

        for (let guess = 1; guess <= 9; guess++) {

          if (this.insert(matrix, row, col, guess) === true) {
            matrix[row][col] = guess;
            let checkGuess = this.solve(matrix);

            if (checkGuess === true) {
              return true;
            }

            matrix[row][col] = 0;
          }
        }

        return false;
      }
    }

    return true;
  }

  insert(matrix, row, col, guess) {
    for (let newRow = 0; newRow < 9; newRow++) {
      if (newRow !== row && matrix[newRow][col] === guess) {
        return false;
      }
    }

    for (let newCol = 0; newCol < 9; newCol++) {
      if (newCol !== col && matrix[row][newCol] === guess) {
        return false;
      }
    }

    let y = Math.floor((row / 3)) * 3;
    let x = Math.floor((col / 3)) * 3;

    for (let subsetRow = 0; subsetRow < 3; subsetRow++) {
      for (let subsetCol = 0; subsetCol < 3; subsetCol++) {
        if (subsetRow !== row && subsetCol !== col && matrix[y + subsetRow][x + subsetCol] === guess) {
          return false;
        }
      }
    }
    return true;
  }

  checkSolve() {
    this.solve(this.solving);
  }
  // Returns a string representing the current state of the board
  board() {
    let init = this.unsolved();
    for (let i = 0; i < 9; i++) {
      init[i].splice(3, 0, "|");
      init[i].splice(7, 0, "|");
      init[i] = init[i].join(" ");

      this.solving[i].splice(3, 0, "|");
      this.solving[i].splice(7, 0, "|");
      this.solving[i] = this.solving[i].join(" ");
    }

    let line = [];
    for (let j = 0; j < 21; j++) {
      line.push("-");
    }

    line = line.join("");

    for (let k = 0; k < 16; k += 4) {
      init.splice(k, 0, line);
      this.solving.splice(k, 0, line);
    }

    console.log(`Problem : ${this.string}\n`);
    console.log("Init Board :");
    console.log(init.join("\n"));
    console.log("\n");
    console.log("Solve :");
    console.log(this.solving.join("\n"));
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs');
var board_string = fs.readFileSync('set-04_peter-norvig_11-hardest-puzzles.txt')
  .toString()
  .split("\n")[0];
var game = new Sudoku(board_string);

game.checkSolve();
game.board();
