import { render, screen } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import TechStack from "../TechStack";

describe("TechStack component", () => {
  it("should render", () => {
    render(<TechStack />);
    expect(screen.getByText("My Tech Stack")).toBeInTheDocument();
    expect(screen.getByText("Technologies Ive been working with recently")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(11);
  });
});