import { render, screen } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import About from "../About";

describe("About component", () => {
  it("should render", () => {
    render(<About />);
    const workExperience = screen.getAllByText("Work Experience");
    expect(screen.getByText("About Me")).toBeInTheDocument();
    
    expect(workExperience.length).toBe(1);
  });
});
