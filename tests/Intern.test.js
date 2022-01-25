const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create an Intern subclass object", () => {
    const result = new Intern("Laszlo", "4", "laszlo@company.com", "UT Austin");

    expect(result.name).toEqual("Laszlo");
    expect(result.id).toEqual("4");
    expect(result.email).toEqual("laszlo@company.com");
    expect(result.school).toEqual("UT Austin");
  });
});
