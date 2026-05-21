"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../i18n/LanguageSwitcher";

export function Nav() {
  const { t } = useTranslation();
  return (
    <header className="container-page py-7 flex items-center justify-between">
      <Link href="/" className="flex items-baseline gap-2">
        <span className="display text-3xl">PHMCare AI</span>
        <span className="label text-ink-mute hidden sm:inline">
          {t("nav.brandSuffix")}
        </span>
      </Link>
      <nav className="hidden lg:flex items-center gap-9 text-[15px] text-ink-soft">
        <Link href="/#produtos" className="ulink">
          {t("nav.products")}
        </Link>
        <Link href="/#mercado" className="ulink">
          {t("nav.market")}
        </Link>
        <Link href="/#vantagem" className="ulink">
          {t("nav.advantage")}
        </Link>
        <Link href="/team" className="ulink">
          {t("nav.team")}
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <a href="#" className="hidden text-[15px] text-ink-soft ulink">
          {t("nav.login")}
        </a>
        <Link href="/#cta" className="btn-primary text-[14px] py-3 px-5">
          {t("nav.cta")}
          <svg
            className="arrow"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
