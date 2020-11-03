describe("Mock This", () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  };

  const otherObj = {
    myMethod: jest.fn(function () {
      return this;
    }),
  };

  console.log(myObj.myMethod());
  console.log(otherObj.myMethod());
});
