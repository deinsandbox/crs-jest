import { forEach } from "./12-mock";

describe("12-mock.js", () => {
  describe("Mock Callback", () => {
    let mockCallback;

    beforeAll(() => {
      mockCallback = jest.fn((x) => 42 + x);
      forEach([2, 3], mockCallback);
    });

    test("mock should been called twice ", () => {
      expect(mockCallback.mock.calls.length).toBe(2);
    });

    test("first argument of the first call should be 0", () => {
      expect(mockCallback.mock.calls[0][0]).toBe(2);
    });

    test("first argument of the second call should be 1", () => {
      expect(mockCallback.mock.calls[1][0]).toBe(3);
    });

    test("return value of first call should be 42", () => {
      expect(mockCallback.mock.results[0].value).toBe(44);
    });
  });

  describe("This on Mock", () => {
    const myMock = jest.fn();

    const a = new myMock();
    a.name = "a";

    const b = {};
    b.name = "b";
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);
  });

  describe("Mock functions", () => {
    let someMockFunction;

    beforeAll(() => {
      someMockFunction = jest.fn(() => "mock result");
      someMockFunction("first arg", "second arg");
    });

    test("mock should been called twice ", () => {
      expect(someMockFunction.mock.calls.length).toBe(1);
    });

    test("first argument of the first call should be 'first arg'", () => {
      expect(someMockFunction.mock.calls[0][0]).toBe("first arg");
    });

    test("second argument of first call should be 'second arg'", () => {
      expect(someMockFunction.mock.calls[0][1]).toBe("second arg");
    });

    test("return value of first call should be 'mock result' ", () => {
      expect(someMockFunction.mock.results[0].value).toBe("mock result");
    });
  });

  describe("Mock Instance", () => {
    let mockConstructor;

    beforeAll(() => {
      mockConstructor = jest.fn();
      const a = new mockConstructor();
      a.name = "test";
      const b = new mockConstructor();
    });

    test("mock should should be instantiated exactly twice", () => {
      expect(mockConstructor.mock.instances.length).toBe(2);
    });

    test("first instance should return a name property called 'test'", () => {
      expect(mockConstructor.mock.instances[0].name).toEqual("test");
    });
  });

  describe("Return Values on Mock", () => {
    const myMock = jest.fn();
    console.log(myMock());

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce("x")
      .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
  });

  describe("Calls Values on Mock", () => {
    const filterTest = jest.fn();

    filterTest.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(filterTest);
    console.log(result);

    console.log(filterTest.mock.calls[0][0], filterTest.mock.calls[1][0]);
  });
});
