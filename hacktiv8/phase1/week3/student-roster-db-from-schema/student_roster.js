"use strict"

const repl = require('repl');
const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('student.db');

var Table = require('cli-table2');
var tableStudent = new Table({
    head: ['ID', 'First Name    ', 'Last Name        ', 'Gender    ', 'Birthday    ', 'Email              ', 'Phone    ']
});
var tableSearch = new Table({
    head: ['First Name    ', 'Last Name        ']
});

let replServer = repl.start({
  prompt: '>> ',
  input: process.stdin,
  output: process.stdout
});

// write your code here
class Student {
  constructor() {
  }

  addData(first_name, last_name, gender, birthday, email, phone) {
    db.serialize(function() {
      let query = `INSERT INTO student (first_name, last_name, gender, birthday, email, phone) VALUES ('${first_name}', '${last_name}', '${gender}', '${birthday}', '${email}', '${phone}');`;
      db.run(query, (err) => {
        if (!err) {
          console.log('Insert data success!');
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  updateData(id, first_name, last_name, gender, birthday, email, phone) {
    db.serialize(function() {
      let query = `UPDATE student SET first_name = '${first_name}', last_name = '${last_name}', gender = '${gender}', birthday = '${birthday}', email = '${email}', phone = '${phone}' WHERE id = ${id};`;
      db.run(query, (err) => {
        if (!err) {
          console.log('Update data success!');
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  deleteData(id) {
    db.serialize(function() {
      let query = `DELETE FROM student WHERE id = ${id};`;
      db.run(query, (err) => {
        if (!err) {
          console.log('Delete data success!');
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  showData() {
    db.serialize(function() {
      let query = `SELECT * FROM student;`;
      db.all(query, (err, rows) => {
        if (!err) {
          rows.forEach((element) =>
          tableStudent.push([element.id,
                             element.first_name,
                             element.last_name,
                             element.gender,
                             element.birthday,
                             element.email,
                             element.phone]));
          console.log("\n");
          console.log(tableStudent.toString());
          tableStudent.length = 0;
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  searchByName(name) {
    db.serialize(function() {
      let query = `SELECT first_name, last_name FROM student WHERE first_name like '%${name}%' or last_name like '%${name}%';`;
      db.all(query, (err , rows) => {
        if (!err) {
          rows.forEach( (element) => tableSearch.push([element.first_name, element.last_name]) );
          console.log("\n");
          console.log(tableSearch.toString());
          tableSearch.length = 0;
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  showDataByInput(attribute, value) {
    db.serialize(function() {
      let query = `SELECT * FROM student WHERE ${attribute} = '${value}';`;
      db.all(query, (err, rows) => {
        if (!err) {
          rows.forEach((element) =>
          tableStudent.push([element.id,
                             element.first_name,
                             element.last_name,
                             element.gender,
                             element.birthday,
                             element.email,
                             element.phone]));
          console.log("\n");
          console.log(tableStudent.toString());
          tableStudent.length = 0;
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  birthday() {
    db.serialize(function() {
      let query = `SELECT * FROM student WHERE strftime('%m', birthday) = strftime('%m', date('now'));`;
      db.all(query, (err, rows) => {
        if (!err) {
          rows.forEach((element) =>
          tableStudent.push([element.id,
                             element.first_name,
                             element.last_name,
                             element.gender,
                             element.birthday,
                             element.email,
                             element.phone]));
          console.log("\n");
          console.log(tableStudent.toString());
          tableStudent.length = 0;
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  orderBirthday() {
    db.serialize(function() {
      let query = `SELECT * FROM student ORDER BY strftime('%m%d', birthday) ASC;`;
      db.all(query, (err, rows) => {
        if (!err) {
          rows.forEach((element) =>
          tableStudent.push([element.id,
                             element.first_name,
                             element.last_name,
                             element.gender,
                             element.birthday,
                             element.email,
                             element.phone]));
          console.log("\n");
          console.log(tableStudent.toString());
          tableStudent.length = 0;
        } else {
          console.log(err);
        }
      });
    });
    return "Process:";
  }

  help() {
    console.log("\n-------------------------------------------------------------------------------------------------------------------------------------------");
    console.log("                                                                 Help Menu:");
    console.log("-------------------------------------------------------------------------------------------------------------------------------------------");
    console.log("Type:");
    console.log("         addData(first_name, last_name, gender, birthday, email, phone)                    Adding new student record");
    console.log("         updateData(id, first_name, last_name, gender, birthday, email, phone)             Update record by ID");
    console.log("         deleteData(id)                                                                    Delete record by ID");
    console.log("         showData()                                                                        Showing all records");
    console.log("         searchByName(name)                                                                Showing all records that have certain name");
    console.log("         showDataByInput(attribute, value)                                                 Showing all records based on attribute and value");
    console.log("         birthday()                                                                        Showing this month student birthdate record");
    console.log("         orderBirthday()                                                                   Showing all records order by birthdate");
    return "-------------------------------------------------------------------------------------------------------------------------------------------";
  }

}

let school = new Student();
replServer.context.addData = school.addData;
replServer.context.updateData = school.updateData;
replServer.context.deleteData = school.deleteData;
replServer.context.showData = school.showData;
replServer.context.searchByName = school.searchByName;
replServer.context.showDataByInput = school.showDataByInput;
replServer.context.birthday = school.birthday;
replServer.context.orderBirthday = school.orderBirthday;
replServer.context.help = school.help;
