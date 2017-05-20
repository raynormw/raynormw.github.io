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
    first_name : 'Erwin',
    last_name  : 'Ramadhan',
    gender     : 'Laki-laki',
    birthday   : new Date('1966-06-06'),
    email      : 'erwin_sableng@stress.com',
    phone      : 8989999999,
    createdAt  : new Date(),
    updatedAt  : new Date(),
    height     : 172
  }).then(Students => {
    console.log('Success');
  }).catch(err => {
    console.log("Error : " + err.message);
  });
}

function addTeacher() {
  db.Teachers.create({
    name       : 'Windiana',
    email      : 'windiana@hacktiv8.com',
    phone      : 8128837878,
    createdAt  : new Date(),
    updatedAt  : new Date(),
  }).then(Teachers => {
    console.log('Success');
  }).catch(err => {
    console.log("Error : " + err.message);
  });
}

function assignStudent() {
  db.Student_teachers.create({
    student_id : 2,
    teacher_id : 5,
    createdAt  : new Date(),
    updatedAt  : new Date()
  }).then(Student_teachers => {
    console.log('Success');
  }).catch(err => {
    console.log("Error : " + err.message);
  });
}

function findTeacher(id) {
  db.Students.findOne({
      where: {
        id: id
      }
    })
    .then(function(Students) {
      console.log(`${Students.first_name} ${Students.last_name} has teachers: `);
      Students.getTeachers()
        .then(function(Teachers) {
          Teachers.forEach(function(Teachers) {
            console.log(`Name :${Teachers.name} | Email : ${Teachers.email}`);
          })
        })
    })
}

replServer.context.addStudent = addStudent;
replServer.context.addTeacher = addTeacher;
replServer.context.assignStudent = assignStudent;
replServer.context.findTeacher = findTeacher;
replServer.context.getAge = getAge;
