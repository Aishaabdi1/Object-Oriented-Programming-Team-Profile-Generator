const Intern = require("../lib/Intern");
const intern = new intern("Fatime", 0003, "Fatima@gmail.com", "Birmingham");

test("test if we can get the constructor values for the intern object", () => {
  expect(intern.name).toBe("Fatima");
  expect(intern.id).toBe(0002);
  expect(intern.email).toBe("Fatima@gmail.com");
  expect(intern.school).toBe("Birmingham");
});

test("test if we can get the name from the getName() method", () => {
  expect(intern.getName()).toBe("Fatima");
});

test("test if we can get the id from the getId() method", () => {
  expect(intern.getId()).toBe("0003");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(intern.getEmail()).toBe("Fatima@gmail.com");
});

test("if we can get the school from the getSchool() method"), () => {
    expect(intern.getSchool()).toBe("Birmingham");
};


