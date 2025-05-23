import { render, screen } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import Icon from "../Icon";

const defaultProps = {
  name: "github",
  alt: "github icon",
  width: "100px",
  height: "100px",
};
describe("Icon component", () => {
  it("should render", () => {
    render(<Icon {...defaultProps} />);
    expect(screen.getByRole("img", { name: "github icon" })).toBeInTheDocument();
  });
});