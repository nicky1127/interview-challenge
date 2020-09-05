import { render, cleanup } from "@testing-library/react";
import MenuPreview from "client/components/layouts/MenuPreview";
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

describe("MenuPreview", () => {
  it("Snapshot matchs", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MenuPreview />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("MenuPreview should render one [data-testid=menuPreview]", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MenuPreview />
      </Provider>
    );
    const container = getByTestId("menuPreview");
    expect(container).toBeInTheDocument();
  });
});
