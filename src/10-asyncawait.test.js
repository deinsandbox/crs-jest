import { getDataFromApi } from "./09-api";

describe("Testing Async/Await", () => {
  test("should make an async api request", async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const data = await getDataFromApi(url);

    expect(data).not.toBeNull();
    expect(data).toHaveProperty("results");
    expect(data.results.length).toBeGreaterThan(0);
  });

  test("should return rick information character", async () => {
    const character = "1";
    const url = `https://rickandmortyapi.com/api/character/${character}`;
    const data = await getDataFromApi(url);

    expect(data).not.toBeNull();
    expect(data).toHaveProperty("name", "Rick Sanchez");
  });

  test("should return an error when fails the api call", async () => {
    const code = 404;
    const url = `http://httpstat.us/${code}`;

    expect.assertions(3);
    try {
      const data = await getDataFromApi(url);
    } catch (error) {
      expect(error).not.toBeNull();
      expect(error).toHaveProperty("response");
      expect(error.response).toHaveProperty("status", code);
    }
  });

  test("should throw an exception when fails the api call", async () => {
    const code = 404;
    const url = `http://httpstat.us/${code}`;
    const exception = new Error(`Request failed with status code ${code}`);

    await expect(getDataFromApi(url)).rejects.toThrow(exception);
  });

  test("should use multiple promises", async () => {
    const greeting = "Hi!";
    const error = "Oh no!";

    await expect(Promise.resolve(greeting)).resolves.toBe(greeting);
    await expect(Promise.reject(error)).rejects.toBe(error);
  });
});
