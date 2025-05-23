import { render, screen, fireEvent } from "../../../lib/testUtils";
import "@testing-library/jest-dom";
import SwitchTheme from "../SwitchTheme";

describe("SwitchTheme component", () => {
  it("should render", () => {
    render(<SwitchTheme />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
});