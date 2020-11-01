import { callBacking } from "./08-callbacks";

describe("08-callback.js", () => {
  test("should return a value from callback", (done) => {
    const call = (data) => {
      expect(data).toBe("Hello Javascripters!");
      done();
    };

    callBacking(call);
  });
});
