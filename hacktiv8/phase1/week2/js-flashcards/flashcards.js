"use strict"

var readlineSync = require('readline-sync');

class Model {
  constructor() {
  }

  getDatabase(deck) {
    var sqlite3 = require('sqlite3').verbose();
    var sqlite = require('sqlite-sync');
    var db = new sqlite3.Database('./cards.db');
    sqlite.connect('cards.db');
    let rows = sqlite.run(`SELECT * FROM ${deck}`);
    return rows;
  }

  nextQuestion(index, data) {
    return data.splice(index, 1);
  }

  skippedQuestion(index, data) {
    let skip = data[index];
    data.splice(index, 1);
    data.push(skip);
    return data;
  }

}

class View {
  constructor() {

  }

  displayMenu(deck) {
    console.log(`Welcome to JS Flash Cards, you have choosen "${deck}" questions!`);
    console.log(`To play just enter the correct term for each definition. Ready? Go!`);
  }

  displayRight(count) {
    console.log("Correct!");
    console.log(`There are ${count} questions left`);
  }

  displayWrong(count) {
    console.log("Incorrect! Try again.");
    console.log(`You've already guess ${count} times`);
  }

  displayFinish(answer) {
    return answer == "exit" ? console.log("Thank you for playing JS Flash Cards!"):
    console.log("Congratulations, You win!");
  }

  displayError() {
    console.log("Deck not Found! please correct your input..");
  }
}

class Controller {
  constructor() {
    this._model = new Model();
    this._view = new View();
  }

  executeMenu(option) {
    let data;

    if (option === undefined) {
      option = "social";
      data = this._model.getDatabase(option);
      this._view.displayMenu(option);
      return this.game(0, 0, data);
    } else if (option !== undefined) {
      let deck = option.toLowerCase();
      if (deck === "social") {
        data = this._model.getDatabase(deck);
        this._view.displayMenu(deck);
        return this.game(0, 0, data);
      } else {
        return this._view.displayError();
      }
    }
  }

  game(index = 0, count = 0, data) {
    if (data.length >= 1) {
      let answer = readlineSync.question(`\n${data[index].definition}:\n`);
      answer = answer.toLowerCase();

      if (answer == data[index].term.toLowerCase()) {
        this._model.nextQuestion(index, data);
        if (data.length > 0) {
          this._view.displayRight(data.length);
        }
        return this.game(index, 0, data);
      } else if (answer == "skip") {
        this._model.skippedQuestion(index, data);
        return this.game(index, count, data);
      } else if (answer == "exit") {
        this._view.displayFinish(answer);
      } else {
        count++;
        this._view.displayWrong(count);
        return this.game(index, count, data);
      }

    }
    else {
      this._view.displayFinish("finish");
    }
  }

}

let argv = process.argv;
let option = argv[2];
let play = new Controller();
play.executeMenu(option);
