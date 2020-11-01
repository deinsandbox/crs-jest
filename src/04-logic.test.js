import { isNull, isTrue, isFalse, isUndefined } from "./04-logic";

describe("04-logic.js", () => {
  describe("Test Null values", () => {
    test("should be null", () => {
      expect(isNull()).toBeNull();
    });
  });

  describe("Test True values", () => {
    test("should be true", () => {
      expect(isTrue()).toBeTruthy();
    });

    test("should be not true", () => {
      expect(isFalse()).not.toBeTruthy();
    });
  });

  describe("Test False values", () => {
    test("should be false", () => {
      expect(isFalse()).toBeFalsy();
    });

    test("should be not false", () => {
      expect(isTrue()).not.toBeFalsy();
    });
  });

  describe("Test Undefined values", () => {
    test("should be undefined", () => {
      expect(isUndefined()).toBeUndefined();
    });
  });

  describe("Test Null values", () => {
    test("should be null", () => {
      expect(isNull()).toBeNull();
    });
  });
});
