"use strict"
const sqlite = require('sqlite3').verbose();

let file = 'address_book.db';
let db = new sqlite.Database(file);
let Table = require('cli-table2');
let tableGroup = new Table({
    head: ['Group ID', 'Group Name         ']
    });

class Group{
  constructor(obj) {
    this.name = obj.name;
    this.id = null;
  }

  save() {
    let id = this.id,
    name = this.name,
    obj = this;
    if (this.id === null) {
      db.serialize(function() {
        db.run(`INSERT INTO groups (name) VALUES ('${name}');`,function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log(`${name} inserted`);
            obj.id = this.lastID;
          }
        });
      });
    } else {
      db.serialize(function() {
        db.run(`UPDATE groups SET name = '${name}' WHERE id = ${id};`, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log(`id ${id} updated`);
          }
        });
      });
    }
  }

  static create(name) {
    db.serialize(function() {
     db.run(`INSERT INTO groups (name) VALUES ('${name}');`, function(err) {
       if (err) {
         console.log(err);
       } else {
         console.log('GROUP ADDED');
       }
     });
   });
  }

  static update(id, name, value) {
    db.serialize(function() {
      db.run(`UPDATE groups SET (name) = '${value}' WHERE id = ${id};`, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('GROUP UPDATED');
        }
      });
    });
    return "Process:";
  }

  static delete(id) {
    db.serialize(function() {
      db.run(`DELETE FROM groups WHERE id = ${id};`, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('GROUP DELETED');
        }
      });
      db.run(`DELETE FROM group_contacts WHERE groups_id = '${id}'`, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('GROUP DELETED FROM GROUP_CONTACTS');
        }
      });
    });
    return "Process:";
  }

  static show() {
    db.all(`SELECT * FROM groups`, function(err, data) {
      if (err){
        console.log(err);
      } else {
        data.forEach((element) => tableGroup.push([element.id, element.name]));
        console.log("\n");
        console.log(tableGroup.toString());
        tableGroup.length = 0;
      }
    });
    return "Process:";
  }
}

export default Group
