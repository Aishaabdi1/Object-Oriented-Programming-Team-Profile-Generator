const Engineer = require("../Engineer");
const engineer = new Engineer("aisha", 0002, "");

test("Can create a github.", () => {
  const testGithub = "aisha";
  const employeeInstance = new Engineer(
    "aisha",
    2,
    "aisha@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "aisha";
  const employeeInstance = new Engineer(
    "aisha",
    2,
    "aisha@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});
test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer("aisha", 2, "aisha@gmail.com", "aisha");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
