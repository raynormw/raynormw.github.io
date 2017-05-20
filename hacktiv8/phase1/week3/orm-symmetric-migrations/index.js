"use strict"

const db = require('./models');
const repl = require('repl');
let replServer = repl.start({
  prompt: '>> ',
  input: process.stdin,
  output: process.stdout
});

function getAge() {
  db.Students.findAll()
  .then(Students => {
    Students.forEach(Students => {
      console.log(Students.getAge());
    });
  });
}

let all = db.Students.getAllData((Students) => {
  Students.forEach((Students) => {
    console.log(Students.id);
    console.log(Students.name);
    console.log(Students.gender);
    console.log(Students.birthday);
    console.log(Students.address);
    console.log(Students.email);
    console.log(Students.phone);
    console.log(Students.height);
  });
});

function addStudent() {
  db.Students.create({
    name       : 'Jumadi Akhmad',
    gender     : 'Laki-laki',
    birthday   : new Date('1990-09-09'),
    address    : 'Jln. jalan dimalam hari',
    email      : 'jumadi_mencret@rsj.com',
    phone      : 876543212345,
    createdAt  : new Date(),
    updatedAt  : new Date(),
    height     : 158
  }).then(Students => {
    console.log('Success');
  }).catch(err => {
    console.log("Error : " + err.message);
  });
}

function showData() {
  db.Students.getAllData((Students) => {
    Students.forEach((Students) => {
      console.log(Students.id);
      console.log(Students.name);
      console.log(Students.gender);
      console.log(Students.birthday);
      console.log(Students.address);
      console.log(Students.email);
      console.log(Students.phone);
      console.log(Students.height);
    });
  });
  return 'Showing data students:';
}

replServer.context.add = addStudent;
replServer.context.getAge = getAge;
replServer.context.showData = showData;
