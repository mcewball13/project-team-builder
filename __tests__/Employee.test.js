const Employee = require("../lib/Employee");

test("Make sure Employee works", () => {
    const employee = new Employee("sam", 1, "mcewball13@gmail.com");
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toBe(("sam"));
    expect(employee.getId()).toBe((1));
    expect(employee.getEmail()).toBe(("mcewball13@gmail.com"));
    expect(employee.getRole()).toBe(("Employee"));
});
