"use client";

import { useTranslation } from "react-i18next";

export function Masthead() {
  const { t } = useTranslation();
  return (
    <div className="hairline border-b">
      <div className="container-page flex items-center justify-between py-2 label text-ink-mute">
        <span>{t("masthead.edition")}</span>
        <span className="hidden md:inline">{t("masthead.tagline")}</span>
        <span className="flex items-center gap-2">
          <span className="num">99.97%</span> uptime
          <span className="inline-block w-px h-3 bg-line mx-1" />
          <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-clay" />
          {t("masthead.uptimeStatus")}
        </span>
      </div>
    </div>
  );
}
