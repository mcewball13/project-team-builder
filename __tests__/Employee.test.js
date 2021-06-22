const Employee = require("../lib/Employee");

// jest.mock("../lib/Employee");

test("Make sure Employee works", () => {
    const employee = new Employee("sam", 1, "gbnn;m");
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(getRole()).toBe(("Employee"));
});
