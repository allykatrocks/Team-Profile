const Employee = require("../lib/Employee");

test('should return an object', () => {
    let e = new Employee("Alex", 12, "beatles101@cox.net")
    expect(typeof(e)).toBe("object");
});

test('should return employee name', () => {
    const employee = new Employee("Alex", 12, "beatles101@cox.net")
    expect(employee.getName()).toEqual("Alex");
});

test('should return employee id', () => {
    const employee = new Employee("Alex", 12, "beatles101@cox.net")
    expect(employee.getId()).toEqual(12);
});

test('should return employee email', () => {
    const employee = new Employee("Alex", 12, "beatles101@cox.net")
    expect(employee.getEmail()).toEqual("beatles101@cox.net");
});

test('should return employee role', () => {
    const employee = new Employee("Employee")
    expect(employee.getRole()).toEqual("Employee")
});