import React from "react";
import { render, cleanup } from "@testing-library/react";
import MenuItem from "client/components/abstractions/MenuItem";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const props = { item: { name: "test", id: 1, dietaries: ["test"] }, idx: 0 };

const state = {
  selectedItemIDs: [],
  items: [{ name: "test", id: 1, dietaries: ["test"] }],
  ldgItems: false,
  ldgSuccItems: false
};
const mockStore = configureMockStore();
const store = mockStore(state);

describe("MenuItem", () => {
  it("Snapshot matchs", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MenuItem {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("MenuItem should render one [data-testid=MenuItem]", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MenuItem {...props} />
      </Provider>
    );
    const container = getByTestId("menuItem");
    expect(container).toBeInTheDocument();
  });
});
