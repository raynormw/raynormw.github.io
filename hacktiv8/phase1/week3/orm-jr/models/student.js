"use strict"

class Student {
  constructor(id, firstname, lastname, cohort_id) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.cohort_id = cohort_id;
  }

  static create(db, obj) {
    db.serialize(() => {
     db.run(`INSERT INTO students (id, firstname, lastname, cohort_id) VALUES ('${obj.id}', '${obj.firstname}', '${obj.lastname}', '${obj.cohort_id}');`,
     (err) => err ? console.log(err) : console.log('STUDENT ADDED'));
   });
   return "Process:";
  }

  static update(db, obj) {
    db.serialize(() => {
      db.run(`UPDATE students SET firstname = '${obj.firstname}', lastname = '${obj.lastname}', cohort_id = '${obj.cohort_id}' WHERE id = ${obj.id};`,
      (err) => err ? console.log(err) : console.log('STUDENT UPDATED'));
    });
    return "Process:";
  }

  static delete(db, id) {
    db.serialize(() => {
      db.run(`DELETE FROM students WHERE id = ${id};`, (err) =>  err ? console.log(err) : console.log('STUDENT DELETED'));
    });
    return "Process:";
  }

  static findById(db, id) {
    db.each(`SELECT * FROM students WHERE id = '${id}';`, (err,data) => err ? console.log(err) : console.log(data));
    return "Process:";
  }

  static findAll(db, callback) {
    db.all('SELECT * FROM students', callback);
    return "Process:";
  }

  static findLimit(db, obj, callback) {
    db.all(`SELECT * FROM students LIMIT ${obj.limit} OFFSET ${obj.offset}`, callback);
    return "Process:";
  }

  static where(db, condition, callback) {
    db.all(`SELECT * FROM students WHERE ${condition}`, callback);
    return "Process:";
  }

  static findOrCreate(db, obj) {
    db.all(`SELECT * FROM students WHERE id = ${obj.id} AND firstname = '${obj.firstname}' AND lastname = '${obj.lastname}' AND cohort_id = ${obj.cohort_id}`, function(err, rows) {
      if(err) {
        console.log(err);
      } else if (rows.length === 0) {
        Student.create(db, obj);
      } else {
        console.log(rows);
      }
    });
  }
}

export default Student
