"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../i18n/LanguageSwitcher";
import { Arrow } from "./Arrow";

export function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "/#como-funciona", label: t("nav.how") },
    { href: "/#painel", label: t("nav.dashboard") },
    { href: "/#seguranca", label: t("nav.security") },
  ];

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t("nav.skip")}
      </a>
      <header id="top" className="container-page site-header">
        <Link href="/" className="brand" aria-label={t("nav.brandAria")}>
          <span className="name">{t("nav.brand")}</span>
          <span className="label product">{t("nav.product")}</span>
        </Link>

        <nav
          id="nav-principal"
          aria-label={t("nav.aria")}
          className={`nav-links${open ? " open" : ""}`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="ulink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="actions">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-principal"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{t("nav.menu")}</span>
            <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M2 5h14M2 9h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Link href="/#contacto" className="btn-primary sm">
            {t("nav.cta")}
            <Arrow />
          </Link>
        </div>
      </header>
    </>
  );
}
