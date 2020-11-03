describe("Mock Implementations", () => {
  test("should return a value with callback", () => {
    const myMockFunction = jest.fn((cb) => cb(null, true));

    myMockFn((err, val) => console.log(val));
  });
});
