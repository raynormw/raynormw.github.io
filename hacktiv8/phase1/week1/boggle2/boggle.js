'use strict'

import words from "./data.js"

class BoogleBoard {
  constructor(data) {
    this.dict = words;
    this.board = [];
  }

  shake(number) {
    let board = this.board;

    for (let i = 0; i < number; i++) {
      board.push([]);
      for (let j = 0; j < number; j++) {
        board[i].push(String.fromCodePoint(Math.floor(Math.random() * 26) + 65));
      }
    }

    console.log("\nBoggle Board:");
    console.log(board);
    return board;
  }

  solve() {
    let board = this.board;
    let dict = this.dict;
    let result = this.boggleSolver(board, dict);
    console.log(`\n${result.length} words found:`);
    console.log(result.join(",\n"));
  }

  boggleSolver(grid, dict) {
    return dict.filter(word => this.findWord(grid, word)).sort((a, b) => a.length === b.length ? a.localeCompare(b) : b.length - a.length);
  }

  findWord(grid, word) {
    let stack = [];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === word[0]) {
          stack.push([[i, j]]);
        }
      }
    }

    while (stack.length > 0) {
      let usedLetters = stack.pop();

      if (usedLetters.length === word.length) {
        return true;
      }

      let [i, j] = usedLetters[usedLetters.length - 1];
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) {
            continue;
          }

          let ii = i + x;
          let jj = j + y;

          if ((grid[ii] || [])[jj] === word[usedLetters.length] && !this.containsSubarray(usedLetters, [[ii, jj]])) {
            stack.push(usedLetters.slice().concat([[ii, jj]]));
          }

        }
      }

    }
    return false;
  }

  containsSubarray(arrays, array) {
    let target = array.toString();
    return arrays.some(arr => target === arr.toString());
  }

}

let play = new BoogleBoard();

play.shake(4);
play.solve();
