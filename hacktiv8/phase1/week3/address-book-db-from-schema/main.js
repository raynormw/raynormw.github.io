"use strict"

import Contact from "./contact.js";
import ContactGroup from "./contact-group.js";
import Group from "./group.js";

const repl = require('repl');
let replServer = repl.start({
  prompt: '>> ',
  input: process.stdin,
  output: process.stdout
});

function help() {
  console.log("\n--------------------------------------------------------------------------------------------------");
  console.log("                                       Help Menu:");
  console.log("--------------------------------------------------------------------------------------------------");
  console.log("Type:");
  console.log("         Contact.create(name, company, telp_number, email)             Adding new contact record");
  console.log("         Contact.update(id, attribute, value)                          Update contact record by ID");
  console.log("         Contact.delete(id)                                            Delete contact record by ID");
  console.log("         Contact.show()                                                Showing all contact records");
  console.log("         Group.create(name)                                            Adding new group record");
  console.log("         Group.update(id, name, value)                                 Update group record by ID");
  console.log("         Group.delete(id)                                              Delete group record by ID");
  console.log("         Group.show()                                                  Showing all group records");
  console.log("         ContactGroup.assign(contact_id, groups_id)                    Assign a contact to group");
  return "-------------------------------------------------------------------------------------------------";
}

replServer.context.help = help;
replServer.context.Contact = Contact;
replServer.context.ContactGroup = ContactGroup;
replServer.context.Group = Group;

let person = new Contact({name: "Erwin Ramadhan"});
replServer.context.person = person;
