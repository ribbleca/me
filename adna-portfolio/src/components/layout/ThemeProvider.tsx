"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true, // eslint-disable-line @typescript-eslint/no-unused-vars
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (!disableTransitionOnChange) {
      root.style.setProperty('--transition-duration', '0.15s');
    }

    // Determine which theme to apply
    const themeToApply = theme === "system" ? systemTheme : theme;

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(themeToApply);
    } else {
      root.setAttribute(attribute, themeToApply);
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);

    if (!disableTransitionOnChange) {
      setTimeout(() => {
        root.style.removeProperty('--transition-duration');
      }, 150);
    }
  }, [theme, systemTheme, mounted, attribute, disableTransitionOnChange]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const contextValue = {
    theme: mounted ? theme : "light" as const,
    setTheme: handleSetTheme,
    systemTheme: mounted ? systemTheme : "light" as const,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}