import "@testing-library/jest-dom";

describe.skip("Projects component", () => {
  jest.mock("../../../hooks/useGitHubUser.ts", () => {
    return {
      useGitHubUser: () => ({
        user: [],
        isLoading: false,
        isError: false,
        error: null,
      }),
    };
  });
  jest.mock("octokit", () => {
    return {
      Octokit: jest.fn().mockImplementation(() => ({
        request: jest.fn().mockResolvedValue({
          data: [],
        }),
      })),
    };
  });
  it.skip("should render", () => {
    expect(true).toBe(true);
  });
});
