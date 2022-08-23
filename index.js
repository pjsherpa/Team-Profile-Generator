const generateEmployeeInfo = require("./src/generateEmployeeInfo");
const fs = require("fs");
const inquirer = require("inquirer");
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
        name: "name",
        type: "input",
        message: "What is the name of the Employee?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the Employee Id number?",
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
    .then((eng) => {
      console.log(eng);
      const engineer = new Engineer(
        eng.name,
        eng.id,
        eng.email,
        eng.github,
        eng.role
      );
      if (eng.github) {
        eng.role = "Engineer";
      }
      newEmployee.push(engineer);
      return choices("Engineer");
    });
};

const managerQ = function () {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the Employee?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the Employee Id number?",
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
    .then((man) => {
      console.log(man);
      const manager = new Manager(
        man.name,
        man.id,
        man.email,
        man.office,
        man.role
      );
      if (man.office) {
        man.role = "Manager";
      }
      newEmployee.push(manager);

      return choices("Manager");
    });
};

const internQ = function () {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the Employee?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the Employee Id number?",
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
    .then((int) => {
      console.log(int);
      const intern = new Intern(
        int.name,
        int.id,
        int.email,
        int.school,
        int.role
      );
      if (int.school) {
        int.role = "Intern";
      }
      newEmployee.push(intern);
      return choices("Intern");
    });
};

choices();

function positionfilled() {
  console.log(newEmployee);
  fs.writeFileSync(
    "./dist/index.html",
    generateEmployeeInfo(newEmployee),

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
