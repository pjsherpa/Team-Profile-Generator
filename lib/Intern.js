// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email, role);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
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

module.exports = Intern;
