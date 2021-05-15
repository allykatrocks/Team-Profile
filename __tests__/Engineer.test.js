const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test('should return an object', () => {
    let e = new Employee("Alex", 12, "beatles101@cox.net", "https://github.com/allykatrocks")
    expect(typeof(e)).toBe("object");
});

test('should return engineer github', () => {
    const engineer = new Engineer("Alex", 12, "beatles101@cox.net", "https://github.com/allykatrocks")
    expect(engineer.getGithub()).toEqual("https://github.com/allykatrocks");
});

test('should return employee role', () => {
    const engineer = new Engineer("Engineer")
    expect(engineer.getRole()).toEqual("Engineer")
});