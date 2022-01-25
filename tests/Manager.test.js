const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should create a Manager subclass object", () => {
    const result = new Manager("Nadja", "2", "nadja@company.com", 100);

    expect(result.name).toEqual("Nadja");
    expect(result.id).toEqual("2");
    expect(result.email).toEqual("nadja@company.com");
    expect(result.officeNumber).toEqual(100);
  });
});
