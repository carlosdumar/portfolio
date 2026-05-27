import { render, screen } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer component", () => {
  it("should render show the email", () => {
    render(<Footer />);
    expect(screen.getByText("carlosdumar4@gmail.com")).toBeInTheDocument();
  });
});