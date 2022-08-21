// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(school);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = role;
  }
  getRole() {
    return "Intern";
  }
  getOfficeNumber() {
    return this.school;
  }
  checkEmployeeno() {
    if (this.staffNumber.length > 1) {
      console.log("There is only 1 position available for Interns");
    } else {
      console.log(`Position has been met.`);
    }
  }
}
const employee = [this.name];

module.exports = Intern;
