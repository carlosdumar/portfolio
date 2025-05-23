import { render, screen } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import Overview from "../Overview";

describe("Overview component", () => {
  it("should render", () => {
    render(<Overview />);
    expect(screen.getByText("Carlos Rodriguez")).toBeInTheDocument();
  });
});