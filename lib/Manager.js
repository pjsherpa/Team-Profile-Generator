// const EmployeeDetails = require("../index");
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, office, email, role) {
    super(office);
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.role = role;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.Office;
  }
  checkEmployeeno() {
    if (this.staffNumber.length > 1) {
      console.log("There is only 1 position available for Manager");
    } else {
      console.log(`Position has been met.`);
    }
  }
}

const employee = [this.name];
module.exports = Manager;
