const Manager = require("../lib/Manager");
const manager = new Manager("Pj", 1, "pj@gmail.com", 2);
test("Information from getName method", () => {
  const testName = "Pj";
  const obj = new Manager(testName, 1, "pj@gmail.com", "Manager", 1);
  expect(manager.getName(obj.name).toBe("testName"));
});

test("Information from getId method", () => {
  const testId = "1";
  const obj = new Manager(testId);
  expect(manager.getId()).toBe("1");
});

test("Information from getemail method", () => {
  const testEmail = "pj@gmail.com";
  const obj = new Manager(testEmail);
  expect(manager.getEmail(obj.testEmail)).toBe("pjs@gmail.com");
});

test("Information from getrole method", () => {
  const testRole = "pj@gmail.com";
  const obj = new Manager(testRole);
  expect(manager.getRole(obj.testRole)).toBe("testRole");
});

test("Information from Offince No. method", () => {
  const testOfficeNo = "1";
  const obj = new Manager("Pj", 1, "pj@gmail.com", "Manager", testOfficeNo);
  expect(manager.getRole(obj.testOfficeNo)).toBe("testOfficeNo");
});
