import { getDataFromApi } from "./09-api";

describe("Testing Promises", () => {
  test("should make an api request", (done) => {
    const url = "https://rickandmortyapi.com/api/character";
    getDataFromApi(url).then((data) => {
      expect(data).not.toBeNull();
      expect(data).toHaveProperty("results");
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  test("should return a greeting", () => {
    const greeting = "Hi!";
    return expect(Promise.resolve(greeting)).resolves.toBe(greeting);
  });

  test("should reject with an error", () => {
    const error = "Oh no!";
    return expect(Promise.reject(error)).rejects.toBe(error);
  });
});
