import { render, cleanup } from "@testing-library/react";
import MenuBuilder from "client/components/layouts/MenuBuilder";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const state = {
  selectedItemIDs: [],
  items: [{ name: "test", id: 1, dietaries: ["test"] }],
  ldgItems: false,
  ldgSuccItems: false
};
const mockStore = configureMockStore();
const store = mockStore(state);

describe("MenuBuilder", () => {
  it("Snapshot matchs", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MenuBuilder />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("MenuBuilder should render one [data-testid=menuBuilder]", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MenuBuilder />
      </Provider>
    );
    const container = getByTestId("menuBuilder");
    expect(container).toBeInTheDocument();
  });
});
