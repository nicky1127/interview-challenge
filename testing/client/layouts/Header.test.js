import { render, cleanup } from "@testing-library/react";
import Header from "client/components/layouts/Header";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const state = {
  selectedItems: [],
  items: [{ name: "test", id: 1, dietaries: ["test"] }],
  ldgItems: false,
  ldgSuccItems: false
};
const mockStore = configureMockStore();
const store = mockStore(state);

describe("Header", () => {
  it("Snapshot matchs", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Header should render one [data-testid=Header]", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const container = getByTestId("header");
    expect(container).toBeInTheDocument();
  });
});
