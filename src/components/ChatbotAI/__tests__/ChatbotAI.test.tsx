import { fireEvent, render, screen } from  "../../../lib/testUtils"
import "@testing-library/jest-dom";
import ChatbotAI from "../ChatbotAI";

describe("ChatbotAI component", () => {
  it("should render correctly", () => {
    const { container } = render(<ChatbotAI />);

    expect(container).toMatchSnapshot();
  });
  it("should open the chatbot", () => {
    render(<ChatbotAI />);
    const chatbotButton = screen.getByRole("button");
    fireEvent.click(chatbotButton);
    expect(screen.getByText("Portfolio Assistant")).toBeInTheDocument();
  });

  it("should close the chatbot", () => {
    render(<ChatbotAI />);
    const chatbotButton = screen.getByRole("button", { name: "Open chatbot button" });
    fireEvent.click(chatbotButton);
    const closeButton = screen.getByRole("button", { name: "Close chatbot button" });
    fireEvent.click(closeButton);
    expect(screen.queryByText("Portfolio Assistant")).not.toBeInTheDocument();
  });
});
