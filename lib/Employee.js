const inquirer = require("inquirer");
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "What is the Employee Id number?",
          default: "1",
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
          name: "employee",
          type: "list",
          message: "role:",
          choices: ["Manager"],
        },
      ])
      //how to move to the next question?
      .then((name) => {
        if (val.choice) {
          //how do we enter another class?
          getID();
        }
      });
  }

  // getID() {
  //   inquirer
  //     .prompt([
  //       {
  //         name: "id",
  //         type: "input",
  //         message: "What is the name of the Manager's ID?",
  //         default: "1",
  //       },
  //     ])
  //     .then(getEmail());
  // }
  // getEmail() {
  //   inquirer
  //     .prompt([
  //       {
  //         name: "email",
  //         type: "input",
  //         message: "Please provide email address?",
  //       },
  //     ])
  //     .then(getRole());
  // }
  getRole() {
    inquirer
      .prompt([
        {
          name: "employee",
          type: "list",
          message: "Position:",
          choices: ["Manager"],
        },
      ])
      .then((val) => {
        if (val.choice) {
          Manager();
        }
      });
  }
}

//created new object

module.exports = Employee;

//Would it be like this??
// getName() {
//   return inquirer
//     .prompt([
//       {
//         name: "name",
//         type: "input",
//         message: "What is the name of the Team member?",
//       },
//     ])
//     .then(getID()=>{
//   return inquirer
//     .prompt([
//       {
//         name: "id",
//         type: "input",
//         message: "What is the name of the Manager's ID?",
//         default: "1",
//       },
//     ])
//   })}
