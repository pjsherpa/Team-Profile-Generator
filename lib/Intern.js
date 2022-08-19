// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email, school, role);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = this.school;
    this.role = role;
  }

  Intern() {
    return inquirer
      .prompt([
        {
          name: "school",
          type: "input",
          message: "Which School did you go to?",
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
module.exports=Intern