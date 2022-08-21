const Employee = require("../lib/Employee");

/*
Step 1: Describe
Step 2:it:Label of what try to do
Step 3:arrange:Initital value to run
Step 4:action:New instance of commitment??check
Step 5:assortion:What to expect
*/

test("Information from getName method making sure its a string", () => {
  const employee = new Employee();
  expect(employee.getName().toBe("Phinjock"));
});

test("Information from getId method", () => {
  expect(employee.getId().toBe("1"));
});

test("Information from getemail method", () => {
  expect(employee.getEmail().toBe("pjs@gmail.com"));
});

test("Information from getrole method", () => {
  expect(employee.getRole().toBe("Engineer"));
});
