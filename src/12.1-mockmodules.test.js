import axios from "axios";
import Users from "./12.1-user";

jest.mock("axios");

test("should fetch users", async () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };

  axios.get.mockResolvedValue(resp);
  //axios.get.mockImplementation(() => Promise.resolve(resp))

  const data = await Users.all();
  expect(data).toEqual(users);
});

import axios from "axios";
import Users from "./12.1-user";
describe("Mock Modules", () => {
  jest.mock("axios");

  test("should fetch users", async () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };

    axios.get.mockResolvedValue(resp);
    //axios.get.mockImplementation(() => Promise.resolve(resp))

    const data = await Users.all();
    expect(data).toEqual(users);
  });
});
