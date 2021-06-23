const Manager = require("../lib/Manager");

test("Make sure Manager works", () => {
    const employee = new Manager("sam", 1, "mcewball13@gmail.com", "4435845905");
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toBe(("sam"));
    expect(employee.getId()).toBe((1));
    expect(employee.getEmail()).toBe(("mcewball13@gmail.com"));
    expect(employee.getOfficeNumber()).toBe(("4435845905"));
    expect(employee.getRole()).toBe(("Manager"));
});