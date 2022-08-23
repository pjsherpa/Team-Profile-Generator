// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, office, role) {
    super(name, id, email);
    this.office = office;
  }
  getOfficeNumber() {
    return this.office;
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
    return "Manager";
  }
}

module.exports = Manager;
