const generateEmployeeInfo = require("./src/generateEmployeeInfo");
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const newEmployee = [];
const removedChoices = [];

const choices = function (choice) {
  removedChoices.push(choice);
  const allChoices = ["Manager", "Engineer", "Intern", "Position's Filled"];
  const updatedChoices = allChoices.filter((item) => {
    return !removedChoices.includes(item);
  });
  console.log("updatedChoice......", updatedChoices);
  inquirer
    .prompt([
      {
        name: "employee",
        type: "list",
        message: "Position:",
        choices: updatedChoices,
      },
    ])
    .then(function (select) {
      if (select.employee === "Engineer") {
        engineerQ();
      } else if (select.employee === "Intern") {
        internQ();
      } else if (select.employee === "Manager") {
        managerQ();
      } else {
        positionfilled();
      }
    });
};

const engineerQ = function () {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the Employee Id number?",
      },
      {
        name: "name",
        type: "input",
        message: "What is the name of the Employee?",
      },

      {
        name: "email",
        type: "input",
        message: "Please provide email address?",
      },
      {
        name: "github",
        type: "input",
        message: "Please provide GitHub Username?",
      },
    ])
    .then((engineer) => {
      console.log(engineer);
      var engineer = new Engineer(
        engineer.id,
        engineer.name,
        engineer.email,
        engineer.github,
        engineer.role
      );
      if (engineer.github) {
        engineer.role = "Engineer";
      }
      newEmployee.push(engineer);
      return choices();
    });
};

const managerQ = function () {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the Employee Id number?",
      },
      {
        name: "name",
        type: "input",
        message: "What is the name of the Employee?",
      },

      {
        name: "email",
        type: "input",
        message: "Please provide email address?",
      },
      {
        name: "office",
        type: "input",
        message: "Please provide office number?",
      },
    ])
    .then((manager) => {
      console.log(manager);
      var manager = new Manager(
        manager.id,
        manager.name,
        manager.email,
        manager.office
      );
      if (manager.office) {
        manager.role = "Manager";
      }
      newEmployee.push(manager);

      return choices("Manager");
    });
};

const internQ = function () {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the Employee Id number?",
      },
      {
        name: "name",
        type: "input",
        message: "What is the name of the Employee?",
      },

      {
        name: "email",
        type: "input",
        message: "Please provide email address?",
      },
      {
        name: "school",
        type: "input",
        message: "Which School did you go to?",
      },
    ])
    .then((intern) => {
      console.log(intern);
      var intern = new Intern(
        intern.id,
        intern.name,
        intern.email,
        intern.school
      );
      if (intern.school) {
        intern.role = "Intern";
        newEmployee.push(intern);
      }
      return choices("Intern");
    });
};

choices();

function positionfilled() {
  fs.writeFileSync(
    "./dist/index.html",
    generateEmployeeInfo(newEmployee).toString(),
    "utf-8",
    function (err) {
      if (err) {
        throw err;
      } else {
        console.log("Success! A file has now been created.");
      }
    }
  );
}
