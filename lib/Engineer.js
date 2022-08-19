// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email, github, role);
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = this.github;
    this.role = role;
  }

  Engineer() {
    return inquirer
      .prompt([
        {
          name: "github",
          type: "input",
          message: "What is your github username?",
        },
      ])
      .then(getRole());
  }
  getRole() {
    return inquirer
      .prompt([
        {
          name: "Employee1",
          type: "list",
          message: "Position:",
          //overridden?
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((val) => {
        if (val.choice) {
          this.Engineer();
        } else {
          this.Intern();
        }
      });
  }
}

module.exports = Engineer;
