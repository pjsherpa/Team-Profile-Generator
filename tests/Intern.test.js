const Intern = require("../lib/Intern");
const intern = new Intern("Pj", 1, "pj@gmail.com", "UCB");

test("Information for constructor object", () => {
  expect(Intern.name).toBe(String);
  expect(Intern.id).toBe(Number);
  expect(Intern.email).toBe(String);
  expect(Intern.school).toBe(String);
});

test("Information from getName method", () => {
  const testName = "Pj";
  const obj = new Intern(testName);
  expect(Intern.getName(obj.name).toBe("testName"));
});

test("Information from getId method", () => {
  const testId = "1";
  const obj = new Intern(testId);
  expect(Intern.getId().toBe("1"));
});

test("Information from getemail method", () => {
  const testEmail = "pj@gmail.com";
  const obj = new Intern(testEmail);
  expect(Intern.getEmail(obj.testEmail).toBe("pj@gmail.com"));
});

test("Information from getrole method", () => {
  const testRole = "pj@gmail.com";
  const obj = new Intern(testRole);
  expect(Intern.getRole(obj.testRole).toBe("testRole"));
});

test("Information from school method", () => {
  const testSchool = "UCB";
  const obj = new Intern(testSchool);
  expect(Intern.school(obj.testSchool).toBe("testSchool"));
});
