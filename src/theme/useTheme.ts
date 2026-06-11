import { useEffect, useState } from "react";
import type { Theme } from "../types/ui";

const THEME_STORAGE_KEY = "ai-accessibility-theme";

function getStoredTheme(): Theme {
  const storedValue = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedValue === "dark" || storedValue === "light") {
    return storedValue;
  }

  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(previousTheme => (previousTheme === "dark" ? "light" : "dark"));
  };

  return { theme, setTheme, toggleTheme };
}
