"use strict"

const repl = require('repl');
const sqlite = require('sqlite3').verbose();

var file = 'student.db';
var db = new sqlite.Database(file);

let replServer = repl.start({
  prompt: '>> ',
  input: process.stdin,
  output: process.stdout
});

// SQL Statement
var CREATE_TABLE = "CREATE TABLE IF NOT EXISTS student ( id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100), gender VARCHAR(25), birthday DATE, email VARCHAR(100), phone VARCHAR );";
var SEED_DATA = "INSERT INTO student (first_name, last_name, gender, birthday, email, phone) VALUES ('Rubi', 'Henjaya', 'laki-laki', '1986-11-20', 'rubi@hacktiv8.com', '0811223344'), ('Riza', 'Fahmi', 'laki-laki', '1983-12-31', 'riza@hacktiv8.com', '0855667788');";

// CREATE_TABLE
let createTable = () => {
  // Run SQL one at a time
  db.serialize(function() {
    // Create table
    db.run(CREATE_TABLE, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Create table success');
      }
    });
  });
  return "Process:";
}

// SEED_DATA
let seedData = () => {
// Your code here
  db.serialize(function() {
    db.run(SEED_DATA, (err) => {
      if (!err) {
        console.log('Insert data success!');
      } else {
        console.log(err);
      }
    });
  });
  return "Process:";
}

replServer.context.createTable = createTable;
replServer.context.seedData = seedData;
