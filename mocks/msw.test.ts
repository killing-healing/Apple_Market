import axios from "axios";
import { server } from "./server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MSW Fetch Test: ", () => {
  it("login", async () => {
    const {
      data: { data },
    } = await axios.post("/login");
    
    expect(data["ACCESS-TOKEN"]).toBe("123QWEasdZXC");
  });
});
