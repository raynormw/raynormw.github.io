const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var Table = require('cli-table2');
var tableListPatient = new Table({
    head: ['ID', 'Name    ', 'Diagnosis        ']
});
// table is an Array, so you can `push`, `unshift`, `splice` and friends
var tablePatient = new Table({
    head: ['ID', 'Name    ', 'Diagnosis        ']
});
var tableListEmployee = new Table({
    head: ['Name    ', 'Position        ']
});
var tableEmployee = new Table({
    head: ['Name    ', 'Position        ']
});

class Hospital {
  constructor(name, location, employees, patients) {
    this.name = name;
    this.employees = employees;
    this.patients = patients;
    this.location = location;
  }

  login() {
    console.log("----------------------------------------------------------------");
    console.log(`Selamat Datang di ${this.name}\n${this.location}`);
    console.log("----------------------------------------------------------------");
    rl.question("Please enter your username: ", (answer) => {
        if (this.checkUsername(answer)) {
          return this.validatePassword(answer);
        } else {
          console.log("Username not found! please correct your input..")
          return this.login();

        }
    })
  }

  validatePassword(username) {
    rl.question("Please enter your password: ", (pass) => {
      if (this.checkPassword(pass)) {
        console.log("----------------------------------------------------------------");
        console.log(`Welcome ${this.findName(username)}! You are logged in as ${this.findPosition(username)}`);
        return this.displayMenu(username);
      } else {
        console.log("Password incorrect! please try again..")
        return this.login();
      }
    })
  }

  checkUsername(username) {
    for (let i = 0; i < this.employees.length; i++) {
      if (username === this.employees[i].username) {
        return true;
      }
    }
  }

  checkPassword(password) {
    for (let i = 0; i < this.employees.length; i++) {
      if (password === this.employees[i].password) {
        return true;
      }
    }
  }

  findName(username) {
    for (let i = 0; i < this.employees.length; i++){
      if (username === this.employees[i].username) {
        return this.employees[i].name;
      }
    }
  }

  findPosition(username) {
    for (let i = 0; i < this.employees.length; i++) {
      if (username === this.employees[i].username) {
        return this.employees[i].position;
      }
    }
  }

  validateAdmin(username) {
    if (this.findPosition(username) === "Admin") {
      return true;
    }
  }

  validateDoctorOrAdmin(username) {
    if (this.findPosition(username) === 'Doctor' || this.findPosition(username) === 'Admin') {
      return true;
    }
  }

  listPatients() {
    for (let i = 0; i < this.patients.length; i++) {
      tableListPatient.push(
          [this.patients[i].id, this.patients[i].name, this.patients[i].diagnosis]
      );
    }
    console.log(tableListPatient.toString());
    tableListPatient.length = 0;
  }

  viewRecords(id) {
    for (let i = 0; i < this.patients.length; i++) {
      if (this.patients[i].id === id) {
        tablePatient.push(
            [this.patients[i].id, this.patients[i].name, this.patients[i].diagnosis]
        );
        console.log(tablePatient.toString());
      }
    }
    tablePatient.length = 0;
  }

  addRecord(name,diagnosis) {
    let patient = new Patient('0'+(Number(this.patients[this.patients.length-1].id)+1).toString(), name, diagnosis);
    this.patients.push(patient);
    console.log('Patient has been successfully added!');
    console.log(`----------------------------------------------------------------`);
  }

  removeRecord(id) {
    for (let i = 0; i < this.patients.length; i++) {
      if (this.patients[i].id === id) {
        this.patients.splice(i, 1);
        console.log('Patient has been successfully removed!');
      }
    }
    console.log(`----------------------------------------------------------------`);
  }

  listEmployees() {
    for (let i = 0; i < this.employees.length ; i++) {
      tableListEmployee.push(
          [this.employees[i].name, this.employees[i].position]
      );
    }
    console.log(tableListEmployee.toString());
    tableListEmployee.length = 0;
  }

  viewEmployee(name) {
    for (let i = 0; i < this.employees.length ; i++) {
      if (this.employees[i].name.toLowerCase() === name.toLowerCase()) {
        tableEmployee.push(
            [this.employees[i].name, this.employees[i].position]
        );
        console.log(tableEmployee.toString());
      }
    }
    tableEmployee.length = 0;
  }

  addEmployee(name, position, username, password) {
    let employee = new Employee(name, position, username, password);
    this.employees.push(employee);
    console.log('Employee has been successfully added!');
    console.log(`----------------------------------------------------------------`);
  }

  removeEmployee(name) {
    for (let i = 0; i < this.employees.length ; i++) {
      if (this.employees[i].name === name) {
        this.employees.splice(i, 1);
        console.log('Employee has been successfully removed!');
      }
    }
    console.log(`----------------------------------------------------------------`);
  }

  displayMenu(username) {
    console.log('Options:');
    console.log('1 list_patients');
    console.log('2 view_patient <patient_id>');
    console.log('3 add_patient <patient_name> <diagnosis>');
    console.log('4 remove_patient <patient_id>');
    console.log('5 list_employees');
    console.log('6 view_employee <employee_name>');
    console.log('7 add_employee <name> <position> <username> <password>');
    console.log('8 remove_employee <employee_name');
    console.log('0 logout');

    rl.question('What would you like to do? ', (line) => {
      if (line.trim() === '1') {
        if (this.validateDoctorOrAdmin(username)) {
          this.listPatients();
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } else if (line.trim()[0] === '2') {
        if (this.validateDoctorOrAdmin(username)) {
          line = line.split(" ");
          this.viewRecords(line[1]);
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } else if (line.trim()[0] === '3') {
        if (this.validateDoctorOrAdmin(username)) {
          line = line.split(" ");
          this.addRecord(line[1],line[2]);
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } else if (line.trim()[0] === '4') {
        if (this.validateDoctorOrAdmin(username)) {
          line = line.split(" ");
          this.removeRecord(line[1]);
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } if (line.trim() === '5') {
        if (this.validateAdmin(username)) {
          this.listEmployees();
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } else if (line.trim()[0] === '6') {
        if (this.validateAdmin(username)) {
          line = line.split(" ");
          this.viewEmployee(line[1]);
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } else if (line.trim()[0] === '7') {
        if (this.validateAdmin(username)) {
          line = line.split(" ");
          this.addEmployee(line[1],line[2],line[3],line[4]);
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } else if (line.trim()[0] === '8') {
        if (this.validateAdmin(username)) {
          line = line.split(" ");
          this.removeEmployee(line[1]);
          return this.displayMenu(username);
        } else {
          console.log('You do not have access to this feature');
          console.log(`----------------------------------------------------------------`);
          return this.displayMenu(username);
        }
      } else if (line.trim() === '0') {
        console.log('You have logged out successfully');
        return this.login();
      }
    })
  }
}

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id;
    this.name = name;
    this.diagnosis = diagnosis;
  }
}

class Employee {
  constructor(name, position, username, password) {
    this.name = name;
    this.position = position;
    this.username = username;
    this.password = password;
  }
}

let erwin = new Patient('01', 'Erwin', 'Mencret');
let jumadi = new Patient('02', 'Jumadi', 'Stress');
let ade = new Patient('03', 'Ade', 'Cacingan');
let tirta = new Employee('Tirta', 'Admin', 'raynor', 'mw');
let akbar = new Employee('Akbar', 'Doctor', 'akbar', 'akb');
let joko = new Employee('Joko', 'OB', 'joko', '123');
let hospital = new Hospital('Rumah Sehat', 'Jl. Sakura berguguran, Jakarta Tenggara', [tirta, akbar, joko], [erwin, jumadi, ade])
hospital.login();
