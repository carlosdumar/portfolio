import { render, screen, fireEvent, } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header component", () => {
  it("should render", () => {
    render(<Header />);
    const buttonMenu = screen.getByRole("button", { name: "Open Menu" });
    expect(buttonMenu).toBeInTheDocument();   
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
    const navLinks = screen.getAllByRole("link");
    expect(navLinks.length).toBe(3);
  });
  it("should render close menu button", () => {
    const { rerender } = render(<Header />);
    const buttonMenu = screen.getByRole("button", { name: "Open Menu" });
    fireEvent.click(buttonMenu);
    rerender(<Header />); 
    const buttonClose = screen.getByRole("button", { name: "Close Menu" });
    expect(buttonClose).toBeInTheDocument();
  });
});