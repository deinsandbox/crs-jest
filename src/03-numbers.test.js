import { numbers } from "./03-numbers";

describe("03-numbers.js", () => {
  test("should greater than", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });

  test("should greater than or equal", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });

  test("should less than", () => {
    expect(numbers(2, 2)).toBeLessThan(5);
  });

  test("should less than or equal", () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(5);
  });

  test("should return float number", () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4, 2);
  });
});
