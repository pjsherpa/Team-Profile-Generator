// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email, office, role);
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = this.office;
    this.role = role;
  }

  Manager() {
    return inquirer.prompt([
      {
        name: "Office",
        type: "input",
        message: "What is your office number?",
        default: "1",
      },
    ]);
  }
  getRole() {
    return "Manager";
    //     .prompt([
    //       {
    //         name: "Employee1",
    //         type: "list",
    //         message: "Position:",
    //         choices: ["Engineer", "Intern"],
    //       },
    //     ])
    //     .then((val) => {
    //       if (val.choice) {
    //         this.Engineer();
    //       } else {
    //         this.Intern();
    //       }
    //     });
  }
}
module.exports = Manager;
