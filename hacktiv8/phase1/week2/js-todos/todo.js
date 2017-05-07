"use strict"

const fs = require('fs');

class Model {
  constructor() {
    this._filename = "./data.json";
  }

  getData() {
    let data = fs.readFileSync(this._filename, "utf8");
    let listData = JSON.parse(data);
    return listData;
  }

  addData(data, taskContent, status, createDate) {
    data.push({"task": taskContent, "completed": status, "created_date": createDate});
    let json = JSON.stringify(data);
    fs.writeFileSync('data.json', json, 'utf8');
  }

  deleteData(data, taskID) {
    let index = Number(taskID-1);
    data.splice(index, 1);
    let json = JSON.stringify(data);
    fs.writeFileSync('data.json', json, 'utf8');
  }

  addTag(data, taskID, tag1) {
    let id = Number(taskID-1);
    data[id]["tag"] = [tag1];
    let json = JSON.stringify(data);
    fs.writeFileSync('data.json', json, 'utf8');
  }

  addTag2(data, taskID, tag1, tag2) {
    let id = Number(taskID-1);
    data[id]["tag"] = [tag1];
    data[id]["tag"].push(tag2);
    let json = JSON.stringify(data);
    fs.writeFileSync('data.json', json, 'utf8');
  }

  markCompleted(data, taskID, status, completedDate) {
    let id = Number(taskID-1);
    data[id]["completed"] = status;
    data[id]["completed_date"] = completedDate;
    let json = JSON.stringify(data);
    fs.writeFileSync('data.json', json, 'utf8');
  }

  markUncomplete(data, taskID, status) {
    let id = Number(taskID-1);
    data[id]["completed"] = status;
    let json = JSON.stringify(data);
    fs.writeFileSync('data.json', json, 'utf8');
  }
}

class View {
  constructor() {

  }

  displayHelp() {
    console.log("\n--------------------------------------------------------------------------------------------------------------------");
    console.log("                                             Help Menu:");
    console.log("--------------------------------------------------------------------------------------------------------------------");
    console.log("Type:");
    console.log("         'list'                                          Showing all ToDo list");
    console.log("         'add' <task_content>                            Adding new task");
    console.log("         'task' <task_id>                                Show task by ID");
    console.log("         'delete' <task_id>                              Delete task by ID");
    console.log("         'tag' <task_id> <tag_name1> <tag_name2>         Adding tag to task by ID");
    console.log("         'completed' <task_id>                           Mark task as completed");
    console.log("         'uncomplete' <task_id>                          Mark task as uncomplete");
    console.log("         'list:outstanding' asc|desc                     Showing all list based on created date order by asc or desc");
    console.log("         'list:completed' asc|desc                       Showing all completed list order by asc or desc");
    console.log("         'filter:<tag_name>'                             Showing task filtered by tag name\n");
  }

  displayList(data) {
    return data.forEach((element, index) => {
      if (element.completed === true) {
        console.log(`${index+1}. [x] ${element.task}`);
      } else {
        console.log(`${index+1}. [ ] ${element.task}`);
      }
    });
  }

  displayAdd(taskContent) {
    console.log(`Task "${taskContent}" has been successfully added`);
  }

  displayTask(data, taskID) {
    let id = Number(taskID-1);
    console.log(data[id]["task"]);
  }

  displayDelete(data, taskID) {
    let id = Number(taskID-1);
    let taskName = data[id]["task"];
    console.log(`Task "${taskName}" has been successfully removed`);
  }

  displayTag(data, taskID, tag1) {
    let id = Number(taskID-1);
    let taskName = data[id]["task"];
    console.log(`Tagged task "${taskName}" with tag: ${tag1}`);
  }

  displayTag2(data, taskID, tag1, tag2) {
    let id = Number(taskID-1);
    let taskName = data[id]["task"];
    console.log(`Tagged task "${taskName}" with tags: ${tag1}, ${tag2}`);
  }

  displayCompleted(data, taskID) {
    let id = Number(taskID-1);
    let taskName = data[id]["task"];
    console.log(`Task "${taskName}" has been successfully marked as completed`);
  }

  displayUncomplete(data, taskID) {
    let id = Number(taskID-1);
    let taskName = data[id]["task"];
    console.log(`Task "${taskName}" has been successfully marked as uncomplete`);
  }

  displayOutstanding(data) {
    let sorting = data.sort((a, d) => a["created_date"] > d["created_date"]);
    console.log("Sorting by ascending:");
    return sorting.forEach((element, index) => console.log(`${index+1}. ${element["task"]}`));
  }

  displayOutstandingDesc(data) {
    let sorting = data.sort((a, d) => a["created_date"] < d["created_date"]);
    console.log("Sorting by descending:");
    return sorting.forEach((element, index) => console.log(`${index+1}. ${element["task"]}`));
  }

  displayCompletedAsc(data) {
    let filter = data.filter((element) => element["completed"]);
    let sorting = filter.sort((a, d) => a["completed_date"] > d["completed_date"]);
    console.log("Sorting by ascending:");
    return sorting.forEach((element, index) => console.log(`${index+1}. ${element["task"]}`));
  }

  displayCompletedDesc(data) {
    let filter = data.filter((element) => element["completed"]);
    let sorting = filter.sort((a, d) => a["completed_date"] < d["completed_date"]);
    console.log("Sorting by descending:");
    return sorting.forEach((element, index) => console.log(`${index+1}. ${element["task"]}`));
  }

  displayFilter(data, tag) {
    let filter = data.filter((element) => {
      if (element.hasOwnProperty("tag") && element["tag"].includes(tag)) return element;
    });
    filter.forEach((element, index) => console.log(`${index+1}. ${element["task"]} ${element["tag"]}`));
  }

  displayError(error) {
    if (error === 1) {
      console.log("Todo List empty!");
    } else if (error === 2) {
      console.log("ID not found, please correct your input");
    } else if (error === 3) {
      console.log("Command not found! type 'help' for command list");
    }
  }
}

class Controller {
  constructor() {
    this._model = new Model();
    this._view = new View();
  }

  executeMenu(option, contentOrID, tag1, tag2) {
    let data = this._model.getData();
    let status = false;
    let createDate = new Date();
    let completedDate = new Date();

    if (option == "help") {
      return this._view.displayHelp();
    } else if (option == "list") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else {
        return this._view.displayList(data);
      }

    } else if (option == "add") {
      this._model.addData(data, contentOrID, status, createDate);
      return this._view.displayAdd(contentOrID);

    } else if (option == "task") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID > data.length) {
        return this._view.displayError(2);
      } else {
        return this._view.displayTask(data, contentOrID);
      }

    } else if (option == "delete") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID > data.length) {
        return this._view.displayError(2);
      } else {
        this._view.displayDelete(data, contentOrID);
        return this._model.deleteData(data, contentOrID);
      }

    } else if (option == "tag") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID > data.length) {
        return this._view.displayError(2);
      } else if (tag2 != "") {
        this._view.displayTag2(data, contentOrID, tag1, tag2);
        return this._model.addTag2(data, contentOrID, tag1, tag2);
      } else {
        this._view.displayTag(data, contentOrID, tag1);
        return this._model.addTag(data, contentOrID, tag1);
      }

    } else if (option == "completed") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID > data.length) {
        return this._view.displayError(2);
      } else {
        status = true;
        this._model.markCompleted(data, contentOrID, status, completedDate);
        return this._view.displayCompleted(data, contentOrID);
      }

    } else if (option == "uncomplete") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID > data.length) {
        return this._view.displayError(2);
      } else {
        this._model.markUncomplete(data, contentOrID, status);
        return this._view.displayUncomplete(data, contentOrID);
      }

    } else if (option == "list:outstanding") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID == "desc") {
        return this._view.displayOutstandingDesc(data);
      } else {
        return this._view.displayOutstanding(data);
      }

    } else if (option == "list:completed") {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else if (contentOrID == "desc") {
        return this._view.displayCompletedDesc(data);
      } else {
        return this._view.displayCompletedAsc(data);
      }

    } else if (option.includes("filter")) {
      if (data.length === 0) {
        return this._view.displayError(1);
      } else {
        let tag = option.slice(7);
        return this._view.displayFilter(data, tag);
      }

    } else {
      return this._view.displayError(3);
    }
  }

}

let argv = process.argv;
let option = argv[2];
let contentOrID = argv[3];
let tag1 = argv[4];
let tag2 = argv[5];
let controller = new Controller();

controller.executeMenu(option, contentOrID, tag1, tag2);
