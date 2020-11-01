describe("Common compare", () => {
  const user1 = {
    name: "Camilo",
    lastName: "Martínez",
  };
  const user2 = {
    name: "Camilo",
    lastName: "Martínez",
  };

  test("should elements to be equal", () => {
    expect(user1).toEqual(user2);
  });

  test("should elements to be different", () => {
    user2.name = "Juan";
    expect(user1).not.toEqual(user2);
  });
});

//Run a selected file
//npm test -- matchers.test.js
//npm t -- matchers
