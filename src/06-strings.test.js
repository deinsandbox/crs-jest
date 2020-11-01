describe("Test strings", () => {
  const text = "That's a dummy text";
  test("should match specific regexp", () => {
    expect(text).toMatch(/dummy/);
  });

  test("should not match specific regexp", () => {
    expect(text).not.toMatch(/not/);
  });

  test("should match specific text", () => {
    expect(text).toMatch("dummy");
  });

  test("should not match specific text", () => {
    expect(text).not.toMatch("not");
  });

  test("should have an specific length", () => {
    expect(text).toHaveLength(19);
  });
});
