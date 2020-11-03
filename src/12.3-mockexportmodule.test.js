jest.mock("./12.3-foo.js");
const foo = require("./12.3-foo");

describe("Mock Export Module", () => {
  test("should mock entire module", () => {
    foo.mockImplementation(() => 42);
    expect(foo()).toBe(42);
  });
});
