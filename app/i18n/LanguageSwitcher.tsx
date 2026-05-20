"use client";

import { useTranslation } from "react-i18next";
import { useLocale } from "./provider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t("language.switchAria")}
      className={`inline-flex items-center gap-px border hairline-strong rounded-full bg-bone-light/60 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <button
        type="button"
        onClick={() => setLocale("pt-PT")}
        aria-pressed={locale === "pt-PT"}
        className={`label px-3 py-1.5 transition-colors ${
          locale === "pt-PT"
            ? "bg-ink text-bone-light"
            : "text-ink-mute hover:text-ink"
        }`}
      >
        {t("language.pt")}
      </button>
      <span aria-hidden className="w-px self-stretch bg-line" />
      <button
        type="button"
        onClick={() => setLocale("en-US")}
        aria-pressed={locale === "en-US"}
        className={`label px-3 py-1.5 transition-colors ${
          locale === "en-US"
            ? "bg-ink text-bone-light"
            : "text-ink-mute hover:text-ink"
        }`}
      >
        {t("language.en")}
      </button>
    </div>
  );
}
