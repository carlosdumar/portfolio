import { renderHook } from "../../lib/testUtils";
import "@testing-library/jest-dom";
import useScroll from "../useScroll";

describe("useScroll hook", () => {
  it("should return scroll position", () => {
    const {
      result: { current },
    } = renderHook(() => useScroll());
    const newSection = document.createElement("div");
    newSection.id = "test-section";
    Object.defineProperty(newSection, "offsetTop", { value: 100 });
    document.body.appendChild(newSection);

    current.scrollToSection("test-section");

    expect(newSection.offsetTop).toBe(100);
  });
});
