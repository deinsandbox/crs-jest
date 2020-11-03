describe("Mock Implementation", () => {
  const myMockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call");

  test("should return mock implementation once", () => {
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
  });
});
