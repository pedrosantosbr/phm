import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptPT from "./locales/pt-PT";
import enUS from "./locales/en-US";

export const LOCALES = ["pt-PT", "en-US"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt-PT";
export const STORAGE_KEY = "phmcare.locale";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      "pt-PT": { translation: ptPT },
      "en-US": { translation: enUS },
    },
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    interpolation: { escapeValue: false },
    returnNull: false,
  });
}

export default i18n;
