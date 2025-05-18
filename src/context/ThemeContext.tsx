"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderType {
  children: React.ReactElement;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const getInitialTheme = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
          return savedTheme;
        }

        return window.matchMedia("prefers-color-schema: dark").matches
          ? "dark"
          : "light";
      }
      return "light";
    };
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
