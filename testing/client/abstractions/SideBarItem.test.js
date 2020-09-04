import React from "react";
import { render, cleanup } from "@testing-library/react";
import SideBarItem from "client/components/abstractions/SideBarItem";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const props = { item: { name: "test", id: 1, dietaries: ["test"] } };

jest.useFakeTimers();

describe("SideBarItem", () => {
  it("Snapshot matchs", () => {
    const tree = renderer.create(<SideBarItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("SideBarItem should render one [data-testid=sideBarItem]", () => {
    const { getByTestId } = render(<SideBarItem {...props} />);
    const container = getByTestId("sideBarItem");
    expect(container).toBeInTheDocument();
  });
});
