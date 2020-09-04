import { render, cleanup} from "@testing-library/react";
import MenuPreview from "client/components/layouts/MenuPreview";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});


describe("MenuPreview", () => {
  it("Snapshot matchs", () => {
    const tree = renderer
      .create(
          <MenuPreview />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
    it("MenuPreview should render one [data-testid=menuPreview]", () => {
      const { getByTestId } = render(
          <MenuPreview />
      );
      const container = getByTestId("menuPreview");
      expect(container).toBeInTheDocument();
    });
});
