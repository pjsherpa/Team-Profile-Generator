// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email, role);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}

module.exports = Engineer;
