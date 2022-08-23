const Manager = require("../lib/Manager");
const manager = new Manager("Pj", 1, "pj@gmail.com", 1, "Manager");

test("Information for constructor object", () => {
  expect(manager.name).toBe("Pj");
  expect(manager.id).toBe(1);
  expect(manager.email).toBe("pj@gmail.com");
  expect(manager.office).toBe(1);
});

test("Information from getName method", () => {
  expect(manager.getName()).toBe("Pj");
});

test("Information from getId method", () => {
  expect(manager.getId()).toBe(1);
});

test("Information from getemail method", () => {
  expect(manager.getEmail()).toBe("pj@gmail.com");
});

test("Information from getrole method", () => {
  expect(manager.getRole()).toBe("Manager");
});
