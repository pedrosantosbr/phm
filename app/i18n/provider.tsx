"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { DEFAULT_LOCALE, LOCALES, STORAGE_KEY, type Locale } from "./config";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const LocaleContext = createContext<Ctx | null>(null);

const HTML_LANG: Record<Locale, string> = {
  "pt-PT": "pt-PT",
  "en-US": "en-US",
};

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored) && stored !== locale) {
      setLocaleState(stored);
      i18n.changeLanguage(stored);
      document.documentElement.lang = HTML_LANG[stored];
      return;
    }
    document.documentElement.lang = HTML_LANG[locale];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    i18n.changeLanguage(next);
    document.documentElement.lang = HTML_LANG[next];
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage disabled — non-fatal */
    }
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
