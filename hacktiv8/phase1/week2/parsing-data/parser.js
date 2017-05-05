"use strict"

class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(id, fName, lName, email, phone, createdAt) {
    this._id = id;
    this._firstName = fName;
    this._lastName = lName;
    this._email = email;
    this._phone = phone;
    this._createdAt = createdAt;
  }

  get convert() {
    return `${this._id},${this._firstName},${this._lastName},${this._email},${this._phone},${this._createdAt}`;
  }
}

class PersonParser {

  constructor(file) {
    this._file = file
    this._people = [];
  }

  get people() {
    const fs = require("fs");
    let list = fs.readFileSync(this._file, "utf8");
    list = list.split("\n");

    for (let i = 0; i < list.length; i++) {
      list[i] = list[i].split(",");
    }

    for (let i = 1; i < list.length; i++) {
      let date = new Date(list[i][5]);
      let persons = new Person(list[i][0], list[i][1], list[i][2], list[i][3], list[i][4], date);
      this._people.push(persons);
    }

    return this._people;
  }

  addPerson(peopleObj) {
    this._people.push(peopleObj.convert);
    return this._people;
  }

  save() {
    const fs = require("fs");
    fs.appendFileSync(this._file, this._people + "\n", "utf8");
  }

}

let parser = new PersonParser("people.csv");
let tirta = new Person("201", "Tirta", "Wirya", "tirtawiryaputra@yahoo.com", "0812-982-30631", new Date());

parser.addPerson(tirta);
parser.save();

console.log(`There are ${parser.people.length-2} people in the file '${parser._file}'.`);
