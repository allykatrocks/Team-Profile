const Employee = require("../lib/Employee");

test('should return an object', () => {
    let e = new Employee("Alex", 12, "beatles101@cox.net")
    expect(typeof(e)).toBe("object");
});