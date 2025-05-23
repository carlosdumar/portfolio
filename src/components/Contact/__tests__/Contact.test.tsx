import { render, screen } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact component", () => {
  it("should render", () => {
    render(<Contact />);
    expect(screen.getByText("For any questions please mail us:")).toBeInTheDocument();
  });
});