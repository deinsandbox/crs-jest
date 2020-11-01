//Before all test
beforeAll(() => console.log("Before whole tests"));
beforeEach(() => console.log("Before each test"));

//After each test
afterEach(() => console.log("After each test"));
afterAll(() => console.log("After whole tests"));

describe("Life cicle", () => {
  test("should be true", () => {
    expect(true).toBeTruthy();
  });
});
