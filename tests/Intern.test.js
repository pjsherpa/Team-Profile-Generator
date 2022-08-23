const Intern = require("../lib/Intern");
const intern = new Intern("Pj", 2, "pj@gmail.com", "Intern", "UCB");

test("Information for constructor object", () => {
  expect(intern.name).toBe("Pj");
  expect(intern.id).toBe(2);
  expect(intern.email).toBe("pj@gmail.com");
  expect(intern.role).toBe("Intern");
  expect(intern.school).toBe("UCB");
});

test("Information from getName method", () => {
  expect(intern.getName()).toBe("Pj");
});

test("Information from getId method", () => {
  expect(intern.getId()).toBe(2);
});

test("Information from getemail method", () => {
  expect(intern.getEmail()).toBe("pj@gmail.com");
});

test("Information from getrole method", () => {
  expect(intern.getRole()).toBe("Intern");
});

test("Information from school method", () => {
  expect(intern.getSchool()).toBe("UCB");
});
