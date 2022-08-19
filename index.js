const generateEmployeeInfo = require("./dist/generateEmployeeInfo");
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

const employee = new Employee();

employee.getName();

const questions = [
  {
    name: "id",
    type: "input",
    message: "What is the name of the Manager's ID?",
    default: "1",
  },

  {
    name: "email",
    type: "input",
    message: "Please provide email address?",
  },

  {
    name: "employee",
    type: "list",
    message: "Position:",
    choices: ["Manager"],
  },
];

// //Would this function be here or in Employee test?
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Success! A Index file has now been created.");
//     }
//   });
// }

// function init() {
//   inquirer.prompt(Employee).then((data) => {
//     console.log(data);
//     writeToFile("index.html", generateEmployeeInfo(data));
//   });
// }
