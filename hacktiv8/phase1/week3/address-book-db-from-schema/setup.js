"use strict"

const repl = require('repl');
const sqlite = require('sqlite3').verbose();
const fs = require('fs');

var file = 'address_book.db';
var db = new sqlite.Database(file);

let replServer = repl.start({
  prompt: '>> ',
  input: process.stdin,
  output: process.stdout
});

// SQL Statement
var CREATE_TABLE_CONTACT = "CREATE TABLE IF NOT EXISTS contact (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, company TEXT,  telp_number TEXT, email TEXT );";
var CREATE_TABLE_GROUPS = "CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);";
var CREATE_TABLE_GROUP_CONTACTS = "CREATE TABLE IF NOT EXISTS group_contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, contact_id INTEGER, groups_id INTEGER);";
// CREATE_TABLE
let createTable = () => {
  // Run SQL one at a time
  db.serialize(function() {
    // Create table
    db.run(CREATE_TABLE_CONTACT, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Create table contact success');
      }
    });

    db.run(CREATE_TABLE_GROUPS, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Create table group success');
      }
    });

    db.run(CREATE_TABLE_GROUP_CONTACTS, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Create table group_contacts success');
      }
    });

  });
  return "Process:";
}

// SEED_DATA
let seedContact = () => {
  let contact = JSON.parse(fs.readFileSync('contact.json','utf8'));
  contact.forEach( (element) => {
    db.serialize(function() {
      db.run(`INSERT INTO
                contact
                (name, company, telp_number, email)
              VALUES
                ('${element.name}', '${element.company}', '${element.telp_number}', '${element.email}')`,
      (err) => {
        if (!err) {
          console.log('Insert data contact success!');
        } else {
          console.log(err);
        }
      });
    });
  });
  return "Process:";
}

let seedGroup = () => {
  let groups = JSON.parse(fs.readFileSync('group.json','utf8'));
  groups.forEach( (element) => {
    db.serialize(function() {
      db.run(`INSERT INTO groups (name) VALUES ('${element.name}')`, (err) => {
        if (!err) {
          console.log('Insert data group success!');
        } else {
          console.log(err);
        }
      });
    });
  });
  return "Process:";
}

replServer.context.createTable = createTable;
replServer.context.seedContact = seedContact;
replServer.context.seedGroup = seedGroup;
