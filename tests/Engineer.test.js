const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create a Engineer subclass object", () => {
    const result = new Engineer("Nandor", "3", "nandor@company.com", "nandor");

    expect(result.name).toEqual("Nandor");
    expect(result.id).toEqual("3");
    expect(result.email).toEqual("nandor@company.com");
    expect(result.github).toEqual("nandor");
  });
});
