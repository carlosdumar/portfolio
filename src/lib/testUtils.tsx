import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "../components/ui/provider";
const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
