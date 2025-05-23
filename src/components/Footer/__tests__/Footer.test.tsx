import { render, screen } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer component", () => {
  it("should render", () => {
    render(<Footer />);
    expect(screen.getByText("+573015363012")).toBeInTheDocument();
  });
});