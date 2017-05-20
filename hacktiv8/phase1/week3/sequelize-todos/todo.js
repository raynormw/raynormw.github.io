'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo', 'postgres', 'jack1899', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});
const db = require('./models');

// Cek Koneksi
// sequelize.authenticate().then(() => {
//   console.log("Success!");
// }).catch((err) => {
//   console.log(err);
// });

class View {
  constructor() {

  }

  displayHelp() {
    console.log("\n--------------------------------------------------------------------------------");
    console.log("                                   Help Menu:");
    console.log("--------------------------------------------------------------------------------");
    console.log("Type:");
    console.log("         'list'                                          Showing all ToDo list");
    console.log("         'add' <task_content>                            Adding new task");
    console.log("         'delete' <task_id>                              Delete task by ID");
    console.log("         'completed' <task_id>                           Mark task as completed");
    console.log("         'uncomplete' <task_id>                          Mark task as uncomplete");
    console.log("--------------------------------------------------------------------------------");
  }

  displayList() {
    console.log("\n");
    db.Tasks.getAllData((Tasks) => {
      Tasks.forEach((Tasks) => {
        if (Tasks.completed === true) {
          console.log(`${Tasks.id}. [x] ${Tasks.name}`);
        } else {
          console.log(`${Tasks.id}. [ ] ${Tasks.name}`);
        }
      });
    });
  }

  displayAdd(taskContent) {
    console.log("\n");
    db.Tasks.create({
      name       : taskContent,
      completed  : false,
      createdAt  : new Date(),
      updatedAt  : new Date()
    }).then(Tasks => {
      console.log(`Append "${taskContent}" to your TODO list...`);
    }).catch(err => {
      console.log("Error : " + err.message);
    });
  }

  displayDelete(taskID) {
    console.log("\n");
    db.Tasks.destroy({
      where : {
        id : taskID
      }
    })
    .then(() => {
      console.log(`Delete Task with id ${taskID} from your TODO list...`);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  displayMark(id, status) {
    let mark;

    if (status === true) {
      mark = "completed"
    } else {
      mark = "uncomplete"
    }

    console.log("\n");

    db.Tasks.update({
      completed  : status
    },{
      where: {
        id: id
      }
    })
    .then(() => {
      console.log(`Task with id ${id} have been mark to ${mark}`);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  displayError() {
    console.log("Command not found! type 'help' for command list");
  }

}

class Controller {
  constructor() {
    this._view = new View();
  }

  executeMenu(option, contentOrID) {
    let status = false;

    if (option == "help") {
      return this._view.displayHelp();
    } else if (option == "list") {
      return this._view.displayList();
    } else if (option == "add") {
      return this._view.displayAdd(contentOrID);
    } else if (option == "delete") {
      return this._view.displayDelete(contentOrID);
    } else if (option == "completed") {
      status = true;
      return this._view.displayMark(contentOrID, status);
    } else if (option == "uncomplete") {
      return this._view.displayMark(contentOrID, status);
    } else {
      return this._view.displayError();
    }
  }

}

let argv = process.argv;
let option = argv[2];
let contentOrID = argv[3];
let controller = new Controller();

controller.executeMenu(option, contentOrID);
