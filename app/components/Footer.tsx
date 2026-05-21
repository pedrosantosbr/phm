"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-bone-dark/60 border-t hairline-strong relative overflow-hidden">
      <div className="container-page pt-20 pb-10">
        {/* Eyebrow */}
        <div className="eyebrow label">
          <span className="sec-num text-[28px] leading-none">¶</span>
          <span>{t("footer.eyebrow")}</span>
          <span className="bar" />
          <span className="hidden md:inline num text-[11px]">
            {t("footer.cities")}
          </span>
        </div>

        {/* Brand lockup + newsletter */}
        <div className="mt-10 grid grid-cols-12 gap-10 pb-14 border-b hairline">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display text-[clamp(72px,11vw,168px)] leading-[0.88] tracking-[-0.04em]">
              PHMCare<span className="display-italic text-clay">.</span>
              <br />
              <span className="text-ink-soft">AI</span>
            </h2>
            <p className="mt-7 text-[15px] leading-[1.7] text-ink-soft max-w-[54ch]">
              {t("footer.bodyPart1")}{" "}
              <em>{t("footer.bodyProducts")}</em> {t("footer.bodyPart2")}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="pill">
                <span className="dot sage" />
                SOC 2 Type II
              </span>
              <span className="pill">
                <span className="dot sage" />
                HIPAA
              </span>
              <span className="pill">
                <span className="dot sage" />
                RGPD
              </span>
              <span className="pill">
                <span className="dot sage" />
                LGPD
              </span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pl-10 lg:border-l hairline">
            <div className="label text-ink-mute mb-5">
              {t("footer.newsletter.label")}
            </div>
            <p className="text-[14px] leading-[1.65] text-ink-soft max-w-[42ch]">
              {t("footer.newsletter.body")}
            </p>
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="vinput"
                aria-label="Email"
              />
              <div className="flex items-center justify-between gap-4">
                <span className="marginalia">
                  {t("footer.newsletter.meta")}
                </span>
                <button type="submit" className="btn-ghost">
                  {t("footer.newsletter.submit")} <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Nav columns */}
        <nav
          aria-label={t("footer.rodapeAria")}
          className="grid grid-cols-12 gap-8 pt-14"
        >
          <div className="col-span-6 md:col-span-3">
            <div className="label text-ink-mute mb-5">
              {t("footer.columns.products")}
            </div>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link className="ulink" href="/#produtos">
                  MediGuard
                </Link>
              </li>
              <li>
                <Link className="ulink" href="/#produtos">
                  CodiCare
                </Link>
              </li>
              <li>
                <Link className="ulink" href="/#produtos">
                  MediCall
                </Link>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.productsLinks.integrations")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.productsLinks.security")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="label text-ink-mute mb-5">
              {t("footer.columns.resources")}
            </div>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.resourcesLinks.methodology")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.resourcesLinks.validations")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.resourcesLinks.whitepapers")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.resourcesLinks.press")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.resourcesLinks.trust")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="label text-ink-mute mb-5">
              {t("footer.columns.company")}
            </div>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.companyLinks.about")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.companyLinks.clinicalCouncil")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.companyLinks.careers")}{" "}
                  <span className="num text-[11px] text-clay align-middle">
                    {t("footer.columns.companyLinks.hiring")}
                  </span>
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.companyLinks.press")}
                </a>
              </li>
              <li>
                <a className="ulink" href="#">
                  {t("footer.columns.companyLinks.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="label text-ink-mute mb-5">
              {t("footer.columns.hq")}
            </div>
            <address className="not-italic text-[14px] leading-[1.7] text-ink-soft">
              {t("footer.columns.hqEntity")}
              <br />
              {t("footer.columns.hqStreet")}
              <br />
              {t("footer.columns.hqCity")}
            </address>
            <div className="mt-5 marginalia">
              {t("footer.columns.hqPhone")}
              <br />
              <a className="ulink" href="mailto:pedro@anvel.pt">
                pedro@anvel.pt
              </a>
            </div>
          </div>
        </nav>

        {/* Accent rule */}
        <div className="accent-rule mt-16" />

        {/* Bottom band */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 label text-ink-mute">
          <span className="flex items-center gap-3">
            <span className="num text-clay">{t("footer.legal.copyright")}</span>
            <span>{t("footer.legal.entity")}</span>
            <span className="hidden md:inline">
              {t("footer.legal.tagline")}
            </span>
          </span>
          <span className="flex flex-wrap items-center gap-5">
            <a className="ulink" href="#">
              {t("footer.legal.privacy")}
            </a>
            <a className="ulink" href="#">
              {t("footer.legal.terms")}
            </a>
            <a className="ulink" href="#">
              {t("footer.legal.dataNotice")}
            </a>
            <a
              className="ulink"
              href="#top"
              aria-label={t("footer.legal.topAria")}
            >
              {t("footer.legal.top")}
            </a>
          </span>
        </div>

        {/* Wordmark watermark */}
        <div
          aria-hidden
          className="pointer-events-none select-none mt-10 -mb-6 overflow-hidden"
        >
          <div className="display whitespace-nowrap leading-[0.85] tracking-[-0.05em] text-[clamp(160px,26vw,420px)] text-ink/[0.05]">
            PHMCare<span className="display-italic">.</span>AI
          </div>
        </div>
      </div>
    </footer>
  );
}
