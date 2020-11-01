import { getCharacter, getUser } from "./11-snapshot";
import character from "./11-rick.json";

describe("snapshot.js", () => {
  test("should compare a snapshot", () => {
    const result = getCharacter(character);
    expect(result).toMatchSnapshot();
  });

  test.skip("alway should fail the snapshot", () => {
    const result = getUser();
    expect(result).toMatchSnapshot();
  });

  test("should use snapshot exceptions", () => {
    const result = getUser();

    const propertyMatchers = {
      createAt: expect.any(Date),
      id: expect.any(Number),
    };
    expect(result).toMatchSnapshot(propertyMatchers);
  });
});

// Run Test: npm test snapshot
// Update Snapshot: npm test snapshot -u
