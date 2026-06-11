import { useEffect, useState } from "react";
import type { Language } from "../types/ui";

const LANGUAGE_STORAGE_KEY = "ai-accessibility-language";

function getStoredLanguage(): Language {
  const storedValue = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedValue === "en" || storedValue === "pt" || storedValue === "es") {
    return storedValue;
  }

  return "en";
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => getStoredLanguage());

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  return { language, setLanguage };
}
