import { createOrder, OrderRequest, OrderResponse } from "./orderService";

describe("orderService", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("dummy test", async () => {
    expect(true).toBe(true);
  });

 
});
