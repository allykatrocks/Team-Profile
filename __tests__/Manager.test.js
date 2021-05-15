const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test('should return an object', () => {
    let e = new Employee("Alex", 12, "beatles101@cox.net")
    expect(typeof(e)).toBe("object");
});

test('should return manager office number', () => {
    const manager = new Manager("Alex", 12, "beatles101@cox.net", 45)
    expect(manager.getOfficeNumber()).toEqual(45);
})

test('should return employee role', () => {
    const manager = new Manager("Manager")
    expect(manager.getRole()).toEqual("Manager")
});