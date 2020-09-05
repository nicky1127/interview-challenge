import * as middlewares from "client/redux/middlewares";

describe("middleware.itemRemover", () => {
  it("next and dispatch are called when itemRemover gets called", () => {
    const store = {
      getState: jest.fn(() => ({ selectedItemIDs: [1001, 1002] }))
    };
    const next = jest.fn();
    middlewares.itemRemover(store)(next)({ type: "REMOVE_ITEM", payload: 0 });
    expect(next).toHaveBeenCalled();
    expect(store.getState).toHaveBeenCalled();
  });
});
