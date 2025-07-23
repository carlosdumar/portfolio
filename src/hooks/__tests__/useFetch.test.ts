import { act, renderHook } from "../../lib/testUtils";
import "@testing-library/jest-dom";
import useFetch from "../useFetch";

describe("useFetch hook", () => {
  it("should return data", async() => {
   
    const { result } = await act(async () => renderHook(() =>
      useFetch({ url: "https://dragonball-api.com/api/characters" })
    ));
   
    expect(result.current.data).toBeDefined();
  });
  it("should return error", async() => {
    const { result } = await act(async () => renderHook(() =>
      useFetch({ url: "https://dragonball-api.com/api/characters" })
    ));
    expect(result.current.error).toBeDefined();
  });  
});
