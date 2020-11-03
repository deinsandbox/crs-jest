describe("Custom Mock Matchers", () => {
  test("should to be called mock function with specific name", () => {
    const myMockFn = jest
      .fn()
      .mockReturnValue("default")
      .mockImplementation((scalar) => 42 + scalar)
      .mockName("add42");

    myMockFn();
    expect(myMockFn).toBeCalled();
  });

  test("should to be called mock function with specific args", () => {
    const myMockFn = jest.fn();

    const arg1 = "arg1";
    const arg2 = "arg2";

    myMockFn(arg1, arg2);
    expect(myMockFn).toBeCalledWith(arg1, arg2);
  });

  test("should to be called the last time with specific args", () => {
    const myMockFn = jest.fn();

    const arg0 = "arg0";
    const arg1 = "arg1";
    const arg2 = "arg2";
    const arg3 = "arg3";

    myMockFn(arg0, arg1);
    myMockFn(arg2, arg3);
    expect(myMockFn).lastCalledWith(arg2, arg3);
  });
});

describe("Common Matchers", () => {
  test("should to be called mock function with specific name", () => {
    const myMockFn = jest
      .fn()
      .mockReturnValue("default")
      .mockImplementation((scalar) => 42 + scalar)
      .mockName("add42");

    myMockFn();
    expect(myMockFn.getMockName()).toBe("add42");
  });

  test("should to be called mock function at least one time", () => {
    const myMockFn = jest.fn();
    myMockFn();
    expect(myMockFn.mock.calls.length).toBeGreaterThan(0);
  });

  test("should to be called mock function with specific args", () => {
    const myMockFn = jest.fn();
    const arg1 = "arg1";
    const arg2 = "arg2";
    myMockFn(arg1, arg2);
    expect(myMockFn.mock.calls).toContainEqual([arg1, arg2]);
  });

  test("should to be called the last time with specific args", () => {
    const myMockFn = jest.fn();

    const arg0 = "arg0";
    const arg1 = "arg1";
    const arg2 = "arg2";
    const arg3 = "arg3";

    myMockFn(arg0, arg1);
    myMockFn(arg2, arg3);
    expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1][0]).toBe(arg2);
  });
});
