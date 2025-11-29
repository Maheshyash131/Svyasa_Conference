// src/components/ThemeProvider.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return ctx;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "svyasaLight";

    const stored = window.localStorage.getItem("conference-theme");
    if (stored === "svyasaLight" || stored === "svyasaDark") return stored;

    return "svyasaLight"; // default theme
  });

  // APPLY THEME TO HTML CLASS
  useEffect(() => {
    const root = document.documentElement;

    // Remove ALL theme classes first
    root.classList.remove("svyasaLight", "svyasaDark");

    // Add selected theme class
    root.classList.add(theme);

    // Save in localStorage
    window.localStorage.setItem("conference-theme", theme);
  }, [theme]);

  // Toggle between both brand-based themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "svyasaLight" ? "svyasaDark" : "svyasaLight"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
