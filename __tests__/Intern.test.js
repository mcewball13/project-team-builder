const Intern = require("../lib/Intern");

test("Make sure Intern works", () => {
    const employee = new Intern("sam", 1, "mcewball13@gmail.com", "UCLA");
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toBe(("sam"));
    expect(employee.getId()).toBe((1));
    expect(employee.getEmail()).toBe(("mcewball13@gmail.com"));
    expect(employee.getSchool()).toBe(("UCLA"));
    expect(employee.getRole()).toBe(("Intern"));
});