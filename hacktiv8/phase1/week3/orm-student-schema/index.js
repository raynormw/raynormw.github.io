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
    console.log(Students.first_name);
    console.log(Students.last_name);
    console.log(Students.full_name);
    console.log(Students.gender);
    console.log(Students.birthday);
    console.log(Students.email);
    console.log(Students.phone);
    console.log(Students.height);
  });
});

function addStudent() {
  db.Students.create({
    first_name : 'Tirta',
    last_name  : 'Wirya Putra',
    gender     : 'Laki-laki',
    birthday   : new Date('1987-07-01'),
    email      : 'tirtawiryaputra@yahoo.com',
    phone      : 81298230631,
    createdAt  : new Date(),
    updatedAt  : new Date(),
    height     : 172
  }).then(Students => {
    console.log('Success');
  }).catch(err => {
    console.log("Error : " + err.message);
  });
}

replServer.context.add = addStudent;
replServer.context.getAge = getAge;
