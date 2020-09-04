import { render, cleanup} from "@testing-library/react";
import SideBar from "client/components/layouts/SideBar";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const state = {
  items: [{ name: "test", id: 1, dietaries: ["test"] }],
  ldgItems: false,
  ldgSuccItems: false
};
const mockStore = configureMockStore();
const store = mockStore(state);

describe("SideBar", () => {
  it("Snapshot matchs", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SideBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
    it("SideBar should render one [data-testid=sideBar]", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <SideBar />
        </Provider>
      );
      const container = getByTestId("sideBar");
      expect(container).toBeInTheDocument();
    });
});
