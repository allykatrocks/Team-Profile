const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test('should return an object', () => {
    let e = new Employee("Alex", 12, "beatles101@cox.net")
    expect(typeof(e)).toBe("object");
});

test('should return intern school', () => {
    const intern = new Intern("Alex", 12, "beatles101@cox.net", "SDSU")
    expect(intern.getSchool()).toEqual("SDSU");
})

test('should return employee role', () => {
    const intern = new Intern("Intern")
    expect(intern.getRole()).toEqual("Intern")
});