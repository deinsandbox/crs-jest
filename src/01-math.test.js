import { add, subtract, multiply, divide } from "./01-math";

describe("01-math.js", () => {
  test("Should return an add result", () => {
    expect(add(1, 1)).toBe(2);
  });

  test("Should return a subtract result", () => {
    expect(subtract(1, 1)).toBe(0);
  });

  test("Should return a multiplication result", () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test("Should return a divide result", () => {
    expect(divide(10, 1)).toBe(10);
  });
});
