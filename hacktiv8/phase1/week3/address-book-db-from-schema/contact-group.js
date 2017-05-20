"use strict"
const sqlite = require('sqlite3').verbose();

let file = 'address_book.db';
let db = new sqlite.Database(file);

class ContactGroup {
  constructor(obj){
    this.id = null;
    this.contact_id = obj.contact_id;
    this.groups_id = obj.groups_id;
  }

  save() {
    let id = this.id,
    groups_id = this.groups_id,
    contact_id = this.contact_id,
    obj = this;
    if (id === null) {
      db.serialize(function() {
        db.run(`INSERT INTO group_contacts (contact_id, groups_id) VALUES ('${contact_id}', '${groups_id}');`, function(err) {
          if (err) {
            console.log(err);
          } else {
            obj.id = this.lastID
            console.log(`Group contact inserted`)
          }
        })
      })
    } else {
      db.serialize(function() {
        db.run(`UPDATE group_contacts SET contact_id = '${contact_id}', groups_id = '${groups_id}' WHERE id = ${id};`, function(err) {
          if(err){
            console.log(err.message)
          } else {
            console.log(`id ${id} updated`)
          }
        })
      })
    }
  }

  static assign(contact_id, groups_id){
    db.serialize(function(){
      db.run(`INSERT INTO group_contacts (contact_id, groups_id) VALUES (${contact_id}, ${groups_id});`,function(err){
        if(err){
          console.log(err.message)
        } else {
          console.log(`Group contact inserted`)
        }
      });
    });
    return "Process:";
  }
}

export default ContactGroup
