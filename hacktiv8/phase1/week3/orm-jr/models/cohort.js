"use strict"

import Student from "./student.js";

class Cohort {
  constructor(id, name) {
      this.id = id;
      this.name = name;
  }

  static create(db, obj) {
    db.serialize(() => {
     db.run(`INSERT INTO cohorts (id, name) VALUES ('${obj.id}', '${obj.name}');`, (err) => err ? console.log(err) : console.log('COHORT ADDED'));
   });
   return "Process:";
  }

  static update(db, obj) {
    db.serialize(() => {
      db.run(`UPDATE cohorts SET name = '${obj.name}' WHERE id = ${obj.id};`, (err) => err ? console.log(err) : console.log('COHORT UPDATED'));
    });
  }

  static delete(db, id) {
    db.serialize(() => {
      db.run(`DELETE FROM cohorts WHERE id = ${id};`, (err) => err ? console.log(err) : console.log('COHORT DELETED'));
    });
    return "Process:";
  }

  static findById(db, id) {
    db.each(`SELECT * FROM cohorts WHERE id = '${id}';`, (err,data) => err ? console.log(err) : console.log(data));
    return "Process:";
  }

  static findAll(db, callback) {
    db.all('SELECT * FROM cohorts', callback);
    return "Process:";
  }

  static where(db, condition, callback) {
    db.all(`SELECT * FROM cohorts WHERE ${condition}`, callback);
    return "Process:";
  }

}

export default Cohort
