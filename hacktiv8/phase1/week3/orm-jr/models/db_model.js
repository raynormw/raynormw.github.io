"use strict"
const sqlite3 = require('sqlite3').verbose();

class DBModel {
  constructor(db) {
    this.connection = new sqlite3.Database(db);
  }

  setup() {
    this.connection.serialize(() => {
      let tableStudents = 'CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, firstname TEXT NOT NULL, lastname TEXT, cohort_id INTEGER);';
      let tableCohorts = 'CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY, name TEXT NOT NULL);';
      this.connection.run(tableStudents, (err) => err ? console.log(err) : console.log('Create table student success'));
      this.connection.run(tableCohorts, (err) => err ? console.log(err) : console.log('Create table cohort success'));
    });
  }
}

export default DBModel
