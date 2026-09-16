"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { DEFAULT_LOCALE, type Locale } from "./config";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const LocaleContext = createContext<Ctx | null>(null);

// Locale is session-only by design: the page stores nothing in the browser.
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "pt-PT" ? "en-US" : "pt-PT");
  }, [locale, setLocale]);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, toggle }),
    [locale, setLocale, toggle],
  );

  return (
    <LocaleContext.Provider value={value}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <I18nProvider>");
  return ctx;
}
