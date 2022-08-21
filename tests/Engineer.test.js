const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
/*
Step 1: Describe
Step 2:it:Label of what try to do
Step 3:arrange:Initital value to run
Step 4:action:New instance of commitment??check
Step 5:assortion:What to expect
*/
test("Information from getName method", () => {
  expect(Engineer.getName().toBe("Phinjock"));
});

test("Information from getId method", () => {
  expect(Engineer.getId().toBe("1"));
});

test("Information from getemail method", () => {
  expect(Engineer.getEmail().toBe("pjs@gmail.com"));
});

test("Information from getrole method", () => {
  expect(Engineer.getRole().toBe("Engineer"));
});
test("Information from github method", () => {
  expect(Engineer.github().toBe("pjsherpa"));
});
