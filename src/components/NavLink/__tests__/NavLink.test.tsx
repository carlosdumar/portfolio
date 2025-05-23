import { render, screen, fireEvent } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import NavLink from "../NavLink";

const defaultProps = {
  children: "NavLink",
  url: "/",
};
describe("NavLink component", () => {
  it("should render", () => {
    render(<NavLink {...defaultProps} />);
    expect(screen.getByText("NavLink")).toBeInTheDocument();
  });
  it("should render with url", () => {
    render(<NavLink {...defaultProps} url="https://www.google.com" />);
    const link = screen.getByRole("link", { name: "NavLink" })
    fireEvent.click(link);
    expect(link).toHaveAttribute("href", "https://www.google.com");
  });
});