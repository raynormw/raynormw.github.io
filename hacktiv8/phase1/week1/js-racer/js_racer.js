"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.totalPlayer = players;
    this.rowLength = length;
    this.arrayPlayer = [
      {nama: "T", posisi: 0, fullName: "Tirta"},
      {nama: "I", posisi: 0, fullName: "Icha"},
      {nama: "R", posisi: 0, fullName: "Rifki"},
      {nama: "7", posisi: 0, fullName: "Lucky Seven"},
      {nama: "A", posisi: 0, fullName: "Akbar"}
    ];
    this.dice = new Dice();
    this.count = 0;
  }

  print_awal() {
    console.log(" Let the game begin: ");
    console.log(" --------------------\n");
    for (let i = 0; i < this.totalPlayer; i++) {
      this.print_line(this.arrayPlayer[i].nama, this.arrayPlayer[i].posisi);
    }
  }

  print_board() {
    if (this.count === this.totalPlayer) {
      this.count = 0;
    }

    this.advanced_player(this.arrayPlayer[this.count]);
    for (let i = 0; i < this.totalPlayer; i++) {
      this.print_line(this.arrayPlayer[i].nama, this.arrayPlayer[i].posisi);
    }

    this.count++;
  }

  print_line(player, pos) {
    let row = [];
    for (let i = 0; i <= this.rowLength; i++) {
      if (pos === i) {
        row.push(player);
      } else {
        row.push(" ");
      }
    }

    console.log(row.join("|"));
  }

  advanced_player(player) {
    let rollDice = this.dice.roll();
    if ((player.posisi + rollDice) > this.rowLength) {
      player.posisi = this.rowLength;
    } else {
      player.posisi += rollDice;
    }
  }

  finished() {
    for (let i = 0; i < this.totalPlayer; i++) {
      if (this.arrayPlayer[i].posisi >= this.rowLength) {
        this.winner(this.arrayPlayer[i].fullName);
        return true;
      }
    }
    return false;
  }

  winner(win) {
    console.log(`\n And the winner is: ${win}\n`);
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

export default JSRacer
