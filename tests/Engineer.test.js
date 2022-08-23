const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Pj", 345, "pj@gmail.com", "pjSherpa");

test("Information for constructor object", () => {
  expect(engineer.name).toBe("Pj");
  expect(engineer.id).toBe(345);
  expect(engineer.email).toBe("pj@gmail.com");
  expect(engineer.github).toBe("pjSherpa");
});

test("Information from getName method", () => {
  expect(engineer.getName()).toBe("Pj");
});

test("Information from getId method", () => {
  expect(engineer.getId()).toEqual(345);
});

test("Information from getemail method", () => {
  expect(engineer.getEmail()).toEqual("pj@gmail.com");
});

test("Information from github method", () => {
  expect(engineer.getGithub()).toEqual("pjSherpa");
});
