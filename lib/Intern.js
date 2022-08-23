// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(name, id, email);
    this.school = school;
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
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
