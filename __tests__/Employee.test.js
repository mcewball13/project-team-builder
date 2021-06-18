const Employee = require("../lib/Employee");

// jest.mock("../lib/Employee");

test("This is a test to make sure Employee works", () => {
    const employee = new Employee("sam", 1, "gbnn;m");
    // console.log(employee);
    // const e = new employee ('sam')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getName()).toBe("sam");
});
