const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an Employee class object", () => {
    const result = new Employee("Guillermo", "1", "guillermo@company.com");

    expect(result.name).toEqual("Guillermo");
    expect(result.id).toEqual("1");
    expect(result.email).toEqual("guillermo@company.com");
  });
});
