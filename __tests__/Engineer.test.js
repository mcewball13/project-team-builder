const Engineer = require("../lib/Engineer");

test("Make sure Engineer works", () => {
    const employee = new Engineer("sam", 1, "mcewball13@gmail.com", "mcewball13");
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toBe(("sam"));
    expect(employee.getId()).toBe((1));
    expect(employee.getEmail()).toBe(("mcewball13@gmail.com"));
    expect(employee.getGithub()).toBe(("mcewball13"));
    expect(employee.getRole()).toBe(("Engineer"));
});