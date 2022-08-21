// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(github);
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = role;
  }
  getRole() {
    return "Engineer";
  }
  github() {
    return this.github;
  }
}

module.exports = Engineer;
