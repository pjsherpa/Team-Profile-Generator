const Employee = require("../lib/Employee");

test("Information from getName method making sure its a string", () => {
  const name = "Pj";
  const obj = new Employee(name);
  expect(Employee.getName(obj.name).toBe("name"));
});

test("Information from getId method", () => {
  const testId = "1";
  const obj = new Employee(testId);
  expect(Employee.getId(obj.id).toBe("testId"));
});

test("Information from getemail method", () => {
  const testEmail = "pj@gmail.com";
  const obj = new Employee(testEmail);
  expect(Employee.getEmail(obj.mail).toBe(testEmail));
});

test("Information from getrole method", () => {
  const testRole = "Employee";
  const obj = new Employee(testRole);
  expect(Employee.getRole(obj.role).toBe(testRole));
});
