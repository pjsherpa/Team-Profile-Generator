const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
/*
Step 1: Describe
Step 2:it:Label of what try to do
Step 3:arrange:Initital value to run
Step 4:action:New instance of commitment??check
Step 5:assortion:What to expect
*/
test("Information from getName method", () => {
  expect(Intern.getName().toBe("Phinjock"));
});

test("Information from getId method", () => {
  expect(Intern.getId().toBe("1"));
});

test("Information from getemail method", () => {
  expect(Intern.getEmail().toBe("pjs@gmail.com"));
});

test("Information from getrole method", () => {
  expect(Intern.getRole().toBe("Intern"));
});
test("Information from school method", () => {
  expect(Intern.school().toBe("pjsherpa"));
});
