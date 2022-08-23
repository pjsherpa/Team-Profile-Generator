const Employee = require("../lib/Employee");
const employee = new Employee("Pj", 1, "pj@gmail.com", "Engineer");

test("Information from getName method making sure its a string", () => {
  expect(employee.getName()).toBe("Pj");
});

test("Information from getId method", () => {
  expect(employee.getId()).toBe(1);
});

test("Information from getemail method", () => {
  expect(employee.getEmail()).toBe("pj@gmail.com");
});
