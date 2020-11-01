import { fruitsArray, colorsArray } from "./05-arrays";

describe("05-arrays.js", () => {
  describe("Test Fruit elements", () => {
    test("should contain a banana", () => {
      expect(fruitsArray()).toContain("🍌");
    });

    test("should contain a red apple", () => {
      expect(fruitsArray()).toContain("🍎");
    });

    test("should not contain a green apple", () => {
      expect(fruitsArray()).not.toContain("🍏");
    });

    test("should compare fruits length", () => {
      expect(fruitsArray()).toHaveLength(7);
    });
  });

  describe("Test Color elements", () => {
    test("should contain yellow", () => {
      expect(colorsArray()).toContain("🟨");
    });
  });
});
