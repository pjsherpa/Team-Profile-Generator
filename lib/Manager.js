// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, role, email, id, office) {
    super(name, id, email, role);
    this.office = office;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.Office;
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

module.exports = Manager;
