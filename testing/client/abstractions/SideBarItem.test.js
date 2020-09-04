import React from "react";
import { render, cleanup } from "@testing-library/react";
import SideBarItem from "client/components/abstractions/SideBarItem";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const props = { item: { name: "test", id: 1, dietaries: ["test"] } };

const state = {
  selectedItems: [],
  items: [{ name: "test", id: 1, dietaries: ["test"] }],
  ldgItems: false,
  ldgSuccItems: false
};
const mockStore = configureMockStore();
const store = mockStore(state);

describe("SideBarItem", () => {
  it("Snapshot matchs", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SideBarItem {...props} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("SideBarItem should render one [data-testid=sideBarItem]", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SideBarItem {...props} />
      </Provider>
    );
    const container = getByTestId("sideBarItem");
    expect(container).toBeInTheDocument();
  });
});
