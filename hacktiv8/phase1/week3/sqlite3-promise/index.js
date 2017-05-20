const repl = require('repl');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

let replServer = repl.start({
  prompt: '>> ',
  input: process.stdin,
  output: process.stdout
});

function create(data) {
  let query = `INSERT INTO teacher (id, name, subject) VALUES (${data.id}, '${data.name}', '${data.subject}');`;
  return new Promise((resolve, reject) => {
    db.serialize(() =>  {
      db.run(query, (error) => error ? reject(error) : resolve());
    });
  });
}

function addRecord(data) {
  create(data).then(() => {console.log("Add success..")}).catch((err) => {console.log(err);});
  return "Process";
}

function read() {
  let query = 'SELECT * FROM teacher;';
  return new Promise((resolve, reject) => {
    db.serialize(function() {
      db.all(query, (error, rows) => error ? reject(error) : resolve(rows));
    });
  });
}

function showRecords() {
  read().then((data) => {console.log(data)}).catch((err) => {console.log(err);});
  return "Process";
}

function update(data) {
  let query = `UPDATE teacher SET name = '${data.name}', subject = '${data.subject}' WHERE id = ${data.id};`;
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(query, (error) => error ? reject(error) : resolve());
    });
  });
}

function updateRecord(data) {
  update(data).then(() => {console.log("Update success..")}).catch((err) => {console.log(err);});
  return "Process";
}

function deletes(id) {
  let query = `DELETE FROM teacher where id = '${id}'`;
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(query, (error) => error ? reject(error) : resolve());
    });
  });
}

function deleteRecord(id) {
  update(id).then(() => {console.log("Delete success..")}).catch((err) => {console.log(err);});
  return "Process";
}

module.exports = {
  create, read, update, deletes
};

replServer.context.create = addRecord;
replServer.context.read = showRecords;
replServer.context.update = updateRecord;
replServer.context.delete = deleteRecord;
