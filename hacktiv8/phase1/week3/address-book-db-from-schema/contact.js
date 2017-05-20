"use strict"
const sqlite = require('sqlite3').verbose();

let file = 'address_book.db';
let db = new sqlite.Database(file);
let Table = require('cli-table2');
let tableContact = new Table({
    head: ['Group ID', 'Name      ', 'Company        ', 'Telp Number       ', 'Email                    ', 'Group ID', 'Group Name         ']
    });

class Contact {
  constructor(obj) {
    this.name = obj.name
    this.company = obj.company || null
    this.telp_number = obj.telp_number || null
    this.email = obj.email || null
    this.id = null
  }

  save() {
    let id = this.id,
    name = this.name,
    company = this.company,
    telp_number = this.telp_number,
    email = this.email,
    obj = this;

    if (id === null) {
      db.serialize(function() {
        db.run(`INSERT INTO contact (name, company, telp_number, email) VALUES ('${name}', '${company}', '${telp_number}', '${email}');`,function(err) {
          if (err) {
            console.log(err);
          } else {
            obj.id = this.lastID;
            console.log(`${name} inserted`);
          }
        });
      });
    } else {
      db.serialize(function() {
        db.run(`UPDATE contact SET name = '${name}', company = '${company}', telp_number = '${telp_number}', email = '${email}' WHERE id = ${id};`, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log(`id ${id} updated`);
          }
        });
      });
    }

  }

  static create(name, company, telp_number, email) {
    if (Contact.emailValidation(email)) {
      if (Contact.phoneValidation(telp_number)) {
        db.serialize(function() {
          db.run(`INSERT INTO contact (name, company, telp_number, email) VALUES ('${name}', '${company}', '${telp_number}', '${email}');`, function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Contact added");
            }
          });
        });
      } else {
        console.log("Phone number is not valid");
      }
    } else {
      console.log("Email is not valid");
    }
    return "Process:";
  }

  static update(id, attribute, value) {
    if ((attribute == "email") && (Contact.emailValidation(value))) {
      db.serialize(function() {
        db.run(`UPDATE contact SET ${attribute} = '${value}' WHERE id = ${id};`, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Contact updated");
          }
        });
      });
    } else if ((attribute == "telp_number") && (Contact.phoneValidation(value))) {
      db.serialize(function() {
        db.run(`UPDATE contact SET ${attribute} = '${value}' WHERE id = ${id};`, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Contact updated");
          }
        });
      });
    } else if ((attribute != "telp_number") || (attribute == "email")) {
      if (Contact.emailValidation(value) && Contact.phoneValidation(value)) {
        db.serialize(function() {
          db.run(`UPDATE contact SET ${attribute} = '${value}' WHERE id = ${id};`, function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Contact updated");
            }
          });
        });
      } else {
        console.log("Email or Phone is not valid!");
      }
    } else {
      console.log("Email or Phone is not valid!");
    }
    return "Process:";
  }

  static delete(id) {
    db.serialize(function() {
      db.run(`DELETE FROM contact WHERE id = ${id};`, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Contact deleted");
        }
      });
      db.run(`DELETE FROM group_contacts WHERE contact_id = '${id}'`, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Contact deleted from group_contacts");
        }
      })
    });
    return "Process:";
  }

  static show() {
    db.all(`SELECT
      contact.id as contact_id,
      contact.name as contact_name,
      contact.company,
      contact.telp_number,
      contact.email,
      groups.id as group_id,
      groups.name as group_name
      FROM contact
      LEFT JOIN group_contacts on (contact.id = group_contacts.contact_id)
      LEFT JOIN groups on (group_contacts.groups_id = groups.id);`,function(err, data) {
        if (err) {
          console.log(err);
        } else {
          data.forEach((element) =>
          tableContact.push([element.contact_id,
                             element.contact_name,
                             element.company,
                             element.telp_number,
                             element.email,
                             element.group_id,
                             element.group_name]));
          console.log("\n");
          console.log(tableContact.toString());
          tableContact.length = 0;
        }
      });
    return "Process:";
  }

  static emailValidation(email) {
    let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    return emailregex.test(email)
  }

  static phoneValidation(telp_number) {
    if (telp_number.length < 17) {
     return true;
    }
  }

}

export default Contact;
