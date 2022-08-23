// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
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
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
