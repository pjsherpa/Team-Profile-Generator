const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Pj", 1, "pj@gmail.com", "pjSherpa");

test("Information for constructor object", () => {
  expect(engineer.name).toEqual(String);
  expect(engineer.id).toEqual(Number);
  expect(engineer.email).toEqual(String);
  expect(engineer.github).toEqual(String);
});

test("Information from getName method", () => {
  const testName = "Pj";
  const obj = new Engineer(testName);
  expect(engineer.getName(obj.name).toBe(testName));
});

test("Information from getName method", () => {
  const testName = "Pj";
  const obj = new Engineer(testName);
  expect(engineer.getName(obj.name).toBe(testName));
});

test("Information from getId method", () => {
  const testId = "1";
  const obj = new Engineer(testId);
  expect(engineer.getId().toBe(testId));
});

test("Information from getemail method", () => {
  const testEmail = "pj@gmail.com";
  const obj = new Engineer(testId);
  expect(engineer.getEmail(obj.testEmail).toBe(testEmail));
});

test("Information from getrole method", () => {
  const testRole = "Engineer";
  const obj = new Engineer(testRole);
  expect(engineer.getRole(obj.testRole).toBe(testRole));
});
test("Information from github method", () => {
  const testGithub = "pjSherpa.com";
  const obj = new Engineer(testGithub);
  expect(engineer.github(obj.testGithub).toBe(testGithub));
});
