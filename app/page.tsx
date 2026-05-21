"use client";

import { useEffect, FormEvent } from "react";
import { useTranslation } from "react-i18next";

/* ──────────────────────────────────────────────────────────────────────────
   PHMCare AI — landing page
   Sister brand to the Vellum specimen at /index.html.
   Same Clinical Editorial system, calibrated for the Portuguese-speaking market
   and the three products: MediGuard · CodiCare · MediCall.
   ────────────────────────────────────────────────────────────────────────── */

type Validation = { name: string; valuation: string };

export default function Page() {
  const { t } = useTranslation();

  // Scroll reveal + smooth anchor scrolling
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function handleDemo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(t("cta.alertSubmitted"));
  }

  const HOSPITAIS = [
    t("hospitals.h1"),
    t("hospitals.h2"),
    t("hospitals.h3"),
    t("hospitals.h4"),
    t("hospitals.h5"),
    t("hospitals.h6"),
  ];

  const MEDIGUARD_VALIDATION: Validation[] = [
    { name: "Epic Systems", valuation: "$60–80B" },
    { name: "Oracle Health (Cerner)", valuation: "$250B+" },
    { name: "MedAware", valuation: "$500–700M" },
  ];
  const CODICARE_VALIDATION: Validation[] = [
    { name: "3M Health Info Systems", valuation: "$400B" },
    { name: "Optum", valuation: "$400B" },
    { name: "Abridge", valuation: "$1–2B" },
    { name: "Ambience Healthcare", valuation: "$1–2B" },
    { name: "Fathom", valuation: "$400–800M" },
  ];
  const MEDICALL_VALIDATION: Validation[] = [
    { name: "Suki AI", valuation: "$500–700M" },
    { name: "sully.ai", valuation: "$1B" },
    { name: "K Health", valuation: "$900M–1.5B" },
    { name: "Steer Health", valuation: "$300–600M" },
    { name: "Assort Health", valuation: "$200–500M" },
  ];

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          I — HERO
          ════════════════════════════════════════════════════════════════════ */}
      <section className="container-page pt-10 pb-24 lg:pb-32 relative">
        <div className="accent-rule mb-10" />

        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          {/* Left: copy */}
          <div className="col-span-12 lg:col-span-7 stagger">
            <div className="eyebrow label">
              <span className="sec-num text-[28px] leading-none">I</span>
              <span>{t("hero.eyebrow")}</span>
              <span className="bar" />
              <span className="hidden md:inline">{t("hero.eyebrowMeta")}</span>
            </div>

            <h1 className="display mt-8 text-[clamp(48px,7.5vw,108px)]">
              {t("hero.titleLine1")}
              <br />
              <span className="display-italic">{t("hero.titleLine2")}</span>
            </h1>

            <p className="mt-8 text-[20px] leading-[1.55] text-ink-soft max-w-[58ch]">
              {t("hero.body")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#cta" className="btn-primary">
                {t("hero.ctaPrimary")}
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
              </a>
              <a href="#produtos" className="btn-ghost">
                {t("hero.ctaGhost")}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M1 12L12 1M5 1h7v7"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 label text-ink-mute">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" /> SOC 2 II
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" /> HIPAA
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" /> RGPD
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" /> LGPD
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage" />{" "}
                {t("hero.complianceGolive")}
              </span>
            </div>
          </div>

          {/* Right: hero specimen — MediGuard live alert */}
          <aside className="col-span-12 lg:col-span-5 lg:pl-8 reveal">
            <div className="relative">
              <div className="absolute -top-3 -left-3 label text-ink-mute hidden lg:block">
                {t("hero.specimen.label")}
              </div>

              <div className="border hairline-strong rounded-sm bg-bone-light/80 backdrop-blur-sm p-6 md:p-7 shadow-[0_30px_80px_-40px_rgba(20,24,31,0.35)]">
                {/* header */}
                <div className="flex items-center justify-between pb-4 border-b hairline">
                  <div className="flex items-center gap-2">
                    <span className="pulse-dot w-2 h-2 rounded-full bg-clay" />
                    <span className="label">{t("hero.specimen.header")}</span>
                  </div>
                  <span className="num text-xs text-ink-mute">
                    {t("hero.specimen.meta")}
                  </span>
                </div>

                {/* patient + drug */}
                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <div className="label text-ink-mute mb-1">
                      {t("hero.specimen.patientLabel")}
                    </div>
                    <div className="display text-[24px]">
                      {t("hero.specimen.patientName")}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="label text-ink-mute mb-1">
                      {t("hero.specimen.severity")}
                    </div>
                    <div className="num text-[26px] text-clay-deep tracking-tight">
                      {t("hero.specimen.severityHigh")}
                    </div>
                  </div>
                </div>

                {/* drug card */}
                <div className="mt-5 rounded-sm bg-bone-dark/50 p-4 border hairline">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="label text-ink-mute">
                        {t("hero.specimen.prescription")}
                      </div>
                      <div className="display text-[28px] mt-1">
                        {t("hero.specimen.prescriptionDrug")}
                      </div>
                    </div>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                      <circle
                        cx="19"
                        cy="19"
                        r="17"
                        stroke="#C2553D"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M13 19h12M19 13v12"
                        stroke="#C2553D"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
                    <div className="flex items-center gap-2">
                      <span className="num text-clay">↳</span>
                      <span>
                        {t("hero.specimen.allergyLabel")}:{" "}
                        <span className="font-medium">
                          {t("hero.specimen.allergyDrug")}
                        </span>{" "}
                        {t("hero.specimen.allergyYear")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="num text-clay">↳</span>
                      <span>
                        {t("hero.specimen.interactionLabel")}:{" "}
                        <span className="font-medium">
                          {t("hero.specimen.interactionDrug")}
                        </span>{" "}
                        {t("hero.specimen.interactionConsequence")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* recommendation */}
                <div className="mt-5 border-l-2 border-clay pl-4">
                  <div className="label text-clay-deep mb-1.5">
                    {t("hero.specimen.recommendation")}
                  </div>
                  <p className="text-[15px] leading-snug text-ink-soft">
                    {t("hero.specimen.recPart1")}{" "}
                    <span className="font-medium text-ink">
                      {t("hero.specimen.recDrug")}
                    </span>{" "}
                    {t("hero.specimen.recPart2")}
                  </p>
                  <div className="mt-3 marginalia">
                    {t("hero.specimen.source")}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-[12px] rounded-full bg-ink text-bone-light">
                      {t("hero.specimen.btnRetain")}
                    </button>
                    <button className="px-3 py-1.5 text-[12px] rounded-full border hairline-strong text-ink-soft">
                      {t("hero.specimen.btnJustify")}
                    </button>
                  </div>
                  <span className="num text-[11px] text-ink-mute">
                    {t("hero.specimen.latency")}
                  </span>
                </div>
              </div>

              {/* annotation */}
              <div className="hidden lg:flex items-start gap-3 mt-5 marginalia">
                <svg width="40" height="14" viewBox="0 0 40 14">
                  <path
                    d="M0 7 H30 M30 7 L26 3 M30 7 L26 11"
                    stroke="rgba(20,24,31,0.4)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                <span>{t("hero.specimen.annotation")}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* decorative ECG rule */}
        <div className="mt-24 opacity-60">
          <svg
            viewBox="0 0 1200 24"
            className="w-full h-6"
            preserveAspectRatio="none"
          >
            <path
              d="M0 12 L500 12 L520 12 L530 4 L540 20 L550 12 L1200 12"
              className="ecg-stroke"
            />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TRUST / SOCIAL PROOF
          ════════════════════════════════════════════════════════════════════ */}
      <section className="border-y hairline bg-bone-light/60">
        <div className="container-page py-14">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-5">
              <div className="label text-ink-mute mb-3">{t("trust.label")}</div>
              <p className="display text-[28px] md:text-[34px] leading-[1.05] text-ink">
                {t("trust.headlinePre")}
                <br />
                <span className="display-italic text-clay-deep">
                  {t("trust.headlineEmphasis")}
                </span>{" "}
                {t("trust.headlinePost")}
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 md:pl-10 md:border-l hairline">
              {HOSPITAIS.map((h) => (
                <div key={h} className="logo-mark text-[22px]">
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t hairline pt-8">
            <div>
              <div className="num display text-[44px] text-ink leading-none">
                3
              </div>
              <div className="label text-ink-mute mt-2">
                {t("trust.stats.productsLabel")}
              </div>
            </div>
            <div>
              <div className="num display text-[44px] text-ink leading-none">
                14<span className="text-clay text-[26px] align-top">d</span>
              </div>
              <div className="label text-ink-mute mt-2">
                {t("trust.stats.goliveLabel")}
              </div>
            </div>
            <div>
              <div className="num display text-[44px] text-ink leading-none">
                99.97<span className="text-clay text-[26px] align-top">%</span>
              </div>
              <div className="label text-ink-mute mt-2">
                {t("trust.stats.uptimeLabel")}
              </div>
            </div>
            <div>
              <div className="num display text-[44px] text-ink leading-none">
                38<span className="text-clay text-[26px] align-top">ms</span>
              </div>
              <div className="label text-ink-mute mt-2">
                {t("trust.stats.latencyLabel")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          II — PROBLEM
          ════════════════════════════════════════════════════════════════════ */}
      <section className="container-page py-28 lg:py-36">
        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24 self-start">
            <div className="eyebrow label">
              <span className="sec-num text-[28px] leading-none">II</span>
              <span>{t("problem.eyebrow")}</span>
              <span className="bar" />
            </div>

            <h2 className="display mt-8 text-[clamp(40px,5.5vw,72px)]">
              {t("problem.titleLine1")}
              <br />
              {t("problem.titleLine2")}
              <br />
              <span className="display-italic">{t("problem.titleLine3")}</span>
            </h2>

            <p className="dropcap mt-10 text-[17px] leading-[1.7] text-ink-soft max-w-[42ch]">
              {t("problem.body")}
            </p>

            <div className="marginalia mt-8 max-w-[40ch]">
              {t("problem.source")}
            </div>
          </div>

          <ol className="col-span-12 lg:col-span-7 lg:pl-12 space-y-0 lg:border-l hairline">
            <li className="grid grid-cols-12 gap-6 py-10 border-b hairline">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                i.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  {t("problem.items.meds.title")}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  {t("problem.items.meds.bodyPart1")}{" "}
                  <span className="text-ink font-medium">
                    {t("problem.items.meds.bodyEmphasis")}
                  </span>{" "}
                  {t("problem.items.meds.bodyPart2")}
                </p>
                <div className="marginalia mt-4">
                  {t("problem.items.meds.tag")}
                </div>
              </div>
            </li>

            <li className="grid grid-cols-12 gap-6 py-10 border-b hairline">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                ii.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  {t("problem.items.coding.title")}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  {t("problem.items.coding.body")}
                </p>
                <div className="marginalia mt-4">
                  {t("problem.items.coding.tag")}
                </div>
              </div>
            </li>

            <li className="grid grid-cols-12 gap-6 py-10 border-b hairline">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                iii.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  {t("problem.items.triage.title")}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  {t("problem.items.triage.bodyPart1")}{" "}
                  <span className="text-ink font-medium">
                    {t("problem.items.triage.bodyEmphasis")}
                  </span>{" "}
                  {t("problem.items.triage.bodyPart2")}
                </p>
                <div className="marginalia mt-4">
                  {t("problem.items.triage.tag")}
                </div>
              </div>
            </li>

            <li className="grid grid-cols-12 gap-6 py-10">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                iv.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  {t("problem.items.burnout.title")}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  {t("problem.items.burnout.bodyPart1")}{" "}
                  <span className="text-ink font-medium">
                    {t("problem.items.burnout.bodyEmphasis")}
                  </span>{" "}
                  {t("problem.items.burnout.bodyPart2")}
                </p>
                <div className="marginalia mt-4">
                  {t("problem.items.burnout.tag")}
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          III — SOLUTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-ink text-bone-light relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 opacity-30 pointer-events-none">
          <svg
            viewBox="0 0 1200 40"
            className="w-full h-10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 20 L500 20 L520 20 L530 8 L540 32 L550 20 L1200 20"
              stroke="#E8B5A6"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        <div className="container-page py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div
                className="eyebrow label"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                <span
                  className="sec-num text-[28px] leading-none"
                  style={{ color: "#E8B5A6" }}
                >
                  III
                </span>
                <span>{t("platform.eyebrow")}</span>
                <span
                  className="bar"
                  style={{ background: "rgba(244,239,230,0.2)" }}
                />
              </div>

              <h2
                className="display mt-8 text-[clamp(40px,6vw,80px)]"
                style={{ color: "#FAF7F1" }}
              >
                {t("platform.titleLine1")}
                <br />
                {t("platform.titleLine2")}
                <br />
                <span className="display-italic" style={{ color: "#E8B5A6" }}>
                  {t("platform.titleLine3")}
                </span>
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:pt-16">
              <p
                className="text-[18px] leading-[1.65]"
                style={{ color: "rgba(244,239,230,0.78)" }}
              >
                {t("platform.body1")}
              </p>
              <p
                className="mt-5 text-[18px] leading-[1.65]"
                style={{ color: "rgba(244,239,230,0.78)" }}
              >
                {t("platform.body2Line1")}
                <br />
                <span className="display-italic" style={{ color: "#E8B5A6" }}>
                  {t("platform.body2Line2")}
                </span>
              </p>
            </div>
          </div>

          {/* triad */}
          <div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x"
            style={{ borderColor: "rgba(244,239,230,0.18)" }}
          >
            {[
              {
                num: "01",
                title: t("platform.pillars.federated.title"),
                body: t("platform.pillars.federated.body"),
              },
              {
                num: "02",
                title: t("platform.pillars.cited.title"),
                body: t("platform.pillars.cited.body"),
              },
              {
                num: "03",
                title: t("platform.pillars.calibrated.title"),
                body: t("platform.pillars.calibrated.body"),
              },
            ].map((c, i) => (
              <div
                key={c.num}
                className={
                  i === 0 ? "md:pr-10" : i === 2 ? "md:pl-10" : "md:px-10"
                }
                style={{ borderColor: "rgba(244,239,230,0.18)" }}
              >
                <div className="num text-[12px]" style={{ color: "#E8B5A6" }}>
                  — {c.num}
                </div>
                <h3 className="display mt-3 text-[28px]">{c.title}</h3>
                <p
                  className="mt-3 text-[15px] leading-[1.65]"
                  style={{ color: "rgba(244,239,230,0.7)" }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          IV — PRODUCTS
          ════════════════════════════════════════════════════════════════════ */}
      <section id="produtos" className="container-page py-28 lg:py-36">
        <div className="eyebrow label">
          <span className="sec-num text-[28px] leading-none">IV</span>
          <span>{t("products.eyebrow")}</span>
          <span className="bar" />
          <span className="hidden md:inline">{t("products.eyebrowMeta")}</span>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <h2 className="display col-span-12 lg:col-span-9 text-[clamp(40px,6vw,84px)]">
            {t("products.titleLine1")}
            <br />
            <span className="display-italic">{t("products.titleLine2")}</span>
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:pt-6 text-[15px] leading-[1.65] text-ink-soft">
            {t("products.body")}
          </p>
        </div>

        {/* Product 01 — MediGuard */}
        <article className="specimen mt-16 border hairline-strong rounded-sm p-8 md:p-10 bg-bone-light grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="label text-ink-mute">
                {t("products.items.mediguard.codename")}
              </span>
              <span className="pill">
                <span className="dot" />
                {t("products.items.mediguard.pill")}
              </span>
            </div>
            <h3 className="display mt-5 text-[clamp(36px,4vw,56px)]">
              {t("products.items.mediguard.name")}
            </h3>
            <p className="display-italic text-clay-deep text-[20px] mt-2">
              {t("products.items.mediguard.tagline")}
            </p>

            <p className="mt-6 text-[16px] leading-[1.65] text-ink-soft max-w-[58ch]">
              {t("products.items.mediguard.body")}
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-ink-soft">
              {[
                t("products.items.mediguard.bullet1"),
                t("products.items.mediguard.bullet2"),
                t("products.items.mediguard.bullet3"),
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="num text-clay mt-1">›</span> {b}
                </li>
              ))}
            </ul>

            <ValidationStrip items={MEDIGUARD_VALIDATION} />
          </div>

          {/* MediGuard specimen visual */}
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-sm bg-bone-dark/60 border hairline p-5 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <span className="label text-ink-mute">
                  {t("products.items.mediguard.specimen.header")}
                </span>
                <span className="num text-[11px] text-ink-mute">+38ms</span>
              </div>

              <div className="my-5">
                <div className="display text-[32px] leading-none">
                  Cefepime <span className="display-italic">2g IV</span>
                </div>
                <div className="label text-ink-mute mt-1">
                  {t("products.items.mediguard.specimen.patient")}
                </div>
              </div>

              {/* severity bar */}
              <div className="mt-2">
                <div className="flex items-center justify-between label text-ink-mute mb-1.5">
                  <span>
                    {t("products.items.mediguard.specimen.severity")}
                  </span>
                  <span className="text-clay-deep">
                    {t("products.items.mediguard.specimen.severityHigh")}
                  </span>
                </div>
                <div className="h-1.5 bg-bone rounded-full overflow-hidden">
                  <div
                    className="h-full bg-clay"
                    style={{ width: "92%" }}
                  />
                </div>
              </div>

              {/* alert rows */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-start gap-3 p-3 bg-clay-light/30 border-l-2 border-clay rounded-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="mt-0.5 shrink-0"
                  >
                    <path
                      d="M8 1L15 14H1L8 1z"
                      fill="none"
                      stroke="#9E3E29"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M8 6v3M8 11v.5"
                      stroke="#9E3E29"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="text-[12.5px] leading-snug">
                    <div className="font-medium">
                      {t("products.items.mediguard.specimen.allergyTitle")}
                    </div>
                    <div className="text-ink-mute marginalia mt-1">
                      {t("products.items.mediguard.specimen.allergyMeta")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 border hairline rounded-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="mt-0.5 shrink-0"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      fill="none"
                      stroke="#6B7E6E"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M5 8h6"
                      stroke="#6B7E6E"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="text-[12.5px] leading-snug">
                    <div className="font-medium">
                      {t("products.items.mediguard.specimen.interactionTitle")}
                    </div>
                    <div className="text-ink-mute marginalia mt-1">
                      {t("products.items.mediguard.specimen.interactionMeta")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-5 flex items-center justify-between border-t hairline">
                <span className="num text-[11px] text-ink-mute">
                  {t("products.items.mediguard.specimen.sources")}
                </span>
                <span className="num text-[11px] text-clay-deep">
                  {t("products.items.mediguard.specimen.retain")}
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Product 02 — CodiCare */}
        <article className="specimen mt-8 border hairline-strong rounded-sm p-8 md:p-10 bg-bone-light grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            {/* CodiCare specimen */}
            <div className="rounded-sm bg-bone-dark/40 border hairline p-5 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="label text-ink-mute">
                  {t("products.items.codicare.specimen.header")}
                </span>
                <span className="num text-[11px] text-ink-mute">
                  {t("products.items.codicare.specimen.meta")}
                </span>
              </div>

              {/* document mock */}
              <div className="bg-bone-light border hairline rounded-sm p-4 text-[13px] leading-[1.55] text-ink-soft">
                <div className="text-ink-mute marginalia mb-2">
                  {t("products.items.codicare.specimen.recordHeader")}
                </div>
                <p>
                  {t("products.items.codicare.specimen.recordPart1")}{" "}
                  <span
                    className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5"
                    title="extracted"
                  >
                    {t("products.items.codicare.specimen.recordHighlight1")}
                  </span>{" "}
                  {t("products.items.codicare.specimen.recordPart2")}{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    {t("products.items.codicare.specimen.recordHighlight2")}
                  </span>
                  {t("products.items.codicare.specimen.recordPart3")}{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    {t("products.items.codicare.specimen.recordHighlight3")}
                  </span>{" "}
                  {t("products.items.codicare.specimen.recordPart4")}
                </p>
              </div>

              {/* extracted codes */}
              <div className="mt-5 space-y-2.5">
                <CodeChip
                  code="I21.1"
                  label={t("products.items.codicare.specimen.code1Label")}
                  confidence={0.96}
                />
                <CodeChip
                  code="R07.4"
                  label={t("products.items.codicare.specimen.code2Label")}
                  confidence={0.88}
                />
                <CodeChip
                  code="R06.0"
                  label={t("products.items.codicare.specimen.code3Label")}
                  confidence={0.82}
                />
              </div>

              <div className="mt-5 pt-4 border-t hairline grid grid-cols-2 gap-2 text-[12px] text-ink-mute">
                <span>
                  {t("products.items.codicare.specimen.excerpts")}
                </span>
                <span className="text-right">
                  {t("products.items.codicare.specimen.suggested")}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 order-1 md:order-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="label text-ink-mute">
                {t("products.items.codicare.codename")}
              </span>
              <span className="pill">
                <span className="dot" />
                {t("products.items.codicare.pill")}
              </span>
            </div>
            <h3 className="display mt-5 text-[clamp(36px,4vw,56px)]">
              {t("products.items.codicare.name")}
            </h3>
            <p className="display-italic text-clay-deep text-[20px] mt-2">
              {t("products.items.codicare.tagline")}
            </p>

            <p className="mt-6 text-[16px] leading-[1.65] text-ink-soft max-w-[58ch]">
              {t("products.items.codicare.body")}
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-ink-soft">
              {[
                t("products.items.codicare.bullet1"),
                t("products.items.codicare.bullet2"),
                t("products.items.codicare.bullet3"),
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="num text-clay mt-1">›</span> {b}
                </li>
              ))}
            </ul>

            <ValidationStrip items={CODICARE_VALIDATION} />
          </div>
        </article>

        {/* Product 03 — MediCall */}
        <article className="specimen mt-8 border hairline-strong rounded-sm p-8 md:p-10 bg-bone-light grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="label text-ink-mute">
                {t("products.items.medicall.codename")}
              </span>
              <span className="pill">
                <span className="dot" />
                {t("products.items.medicall.pill")}
              </span>
            </div>
            <h3 className="display mt-5 text-[clamp(36px,4vw,56px)]">
              {t("products.items.medicall.name")}
            </h3>
            <p className="display-italic text-clay-deep text-[20px] mt-2">
              {t("products.items.medicall.tagline")}
            </p>

            <p className="mt-6 text-[16px] leading-[1.65] text-ink-soft max-w-[58ch]">
              {t("products.items.medicall.body")}
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-ink-soft">
              {[
                t("products.items.medicall.bullet1"),
                t("products.items.medicall.bullet2"),
                t("products.items.medicall.bullet3"),
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="num text-clay mt-1">›</span> {b}
                </li>
              ))}
            </ul>

            <ValidationStrip items={MEDICALL_VALIDATION} />
          </div>

          {/* MediCall specimen */}
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-sm bg-bone-dark/60 border hairline p-5 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <span className="label text-ink-mute flex items-center gap-2">
                  <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-clay" />
                  {t("products.items.medicall.specimen.header")}
                </span>
                <span className="num text-[11px] text-ink-mute">02:14</span>
              </div>

              {/* waveform */}
              <div className="mt-4 flex items-end gap-1 h-12">
                {[
                  0.3, 0.7, 0.5, 0.9, 0.6, 0.4, 0.85, 0.5, 0.3, 0.7, 0.95, 0.6,
                  0.4, 0.7, 0.5, 0.8, 0.4, 0.6, 0.9, 0.5, 0.3, 0.7, 0.5, 0.85,
                  0.4, 0.6, 0.7, 0.4,
                ].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 bg-ink rounded-full wave-bar"
                    style={{
                      height: `${h * 100}%`,
                      animationDelay: `${i * 0.06}s`,
                      transformOrigin: "center",
                    }}
                  />
                ))}
              </div>

              {/* transcript bubble */}
              <div className="mt-5 border-l-2 border-ink pl-4 py-1">
                <div className="label text-ink-mute mb-1.5">
                  {t("products.items.medicall.specimen.transcriptLabel")}
                </div>
                <p className="text-[14px] leading-[1.5] text-ink-soft">
                  &ldquo;{t("products.items.medicall.specimen.transcriptPart1")}{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    {t("products.items.medicall.specimen.transcriptHighlight1")}
                  </span>{" "}
                  {t("products.items.medicall.specimen.transcriptPart2")}{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    {t("products.items.medicall.specimen.transcriptHighlight2")}
                  </span>
                  {t("products.items.medicall.specimen.transcriptPart3")}&rdquo;
                </p>
              </div>

              {/* priority bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between label text-ink-mute mb-2">
                  <span>
                    {t("products.items.medicall.specimen.priorityLabel")}
                  </span>
                  <span className="text-clay-deep">
                    {t("products.items.medicall.specimen.priorityValue")}
                  </span>
                </div>
                <div className="flex gap-1 h-2">
                  <div className="flex-1 bg-sage rounded-full opacity-30" />
                  <div className="flex-1 bg-sage rounded-full opacity-30" />
                  <div className="flex-1 bg-clay-light rounded-full" />
                  <div className="flex-1 bg-clay rounded-full" />
                  <div className="flex-1 bg-bone rounded-full opacity-40" />
                </div>
              </div>

              {/* scheduled slot */}
              <div className="mt-auto pt-5 border-t hairline flex items-center justify-between">
                <div>
                  <div className="label text-ink-mute">
                    {t("products.items.medicall.specimen.scheduledLabel")}
                  </div>
                  <div className="display text-[20px]">
                    {t("products.items.medicall.specimen.scheduledWhen")}
                    <span className="display-italic">
                      {t("products.items.medicall.specimen.scheduledTime")}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="label text-ink-mute">
                    {t("products.items.medicall.specimen.serviceLabel")}
                  </div>
                  <div className="num text-[13px] text-ink">
                    {t("products.items.medicall.specimen.serviceValue")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Note about uniqueness */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="label text-clay">{t("products.noteLabel")}</div>
          </div>
          <p className="col-span-12 md:col-span-9 text-[15px] leading-[1.65] text-ink-soft max-w-[64ch]">
            {t("products.notePart1")}{" "}
            <span className="text-ink font-medium">
              {t("products.noteEmphasis")}
            </span>{" "}
            {t("products.notePart2")}
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          V — MARKET
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="mercado"
        className="bg-bone-light border-y hairline"
      >
        <div className="container-page py-28 lg:py-36">
          <div className="eyebrow label">
            <span className="sec-num text-[28px] leading-none">V</span>
            <span>{t("market.eyebrow")}</span>
            <span className="bar" />
          </div>

          <div className="grid grid-cols-12 gap-8 mt-8">
            <h2 className="display col-span-12 lg:col-span-9 text-[clamp(40px,5.5vw,72px)]">
              {t("market.titlePre")}{" "}
              <span className="display-italic text-clay-deep">
                {t("market.titleEmphasis")}
              </span>{" "}
              {t("market.titlePost")}
            </h2>
            <p className="col-span-12 lg:col-span-3 lg:pt-8 text-[15px] leading-[1.65] text-ink-soft">
              {t("market.body")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border hairline">
            <div className="bg-bone-light p-8">
              <div className="num text-[12px] text-clay">— 01</div>
              <div className="num display text-[clamp(48px,6vw,72px)] mt-3 leading-none">
                $4B<span className="text-clay text-[28px] align-top">+</span>
              </div>
              <h3 className="display text-[20px] mt-4">
                {t("market.cards.ineff.title")}
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                {t("market.cards.ineff.body")}
              </p>
            </div>

            <div className="bg-bone-light p-8">
              <div className="num text-[12px] text-clay">— 02</div>
              <div className="num display text-[clamp(48px,6vw,72px)] mt-3 leading-none">
                $5B<span className="text-clay text-[28px] align-top">+</span>
              </div>
              <h3 className="display text-[20px] mt-4">
                {t("market.cards.valuation.title")}
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                {t("market.cards.valuation.bodyPart1")}{" "}
                <span className="display-italic">
                  {t("market.cards.valuation.bodyEmphasis")}
                </span>{" "}
                {t("market.cards.valuation.bodyPart2")}
              </p>
            </div>

            <div className="bg-bone-light p-8">
              <div className="num text-[12px] text-clay">— 03</div>
              <div className="num display text-[clamp(48px,6vw,72px)] mt-3 leading-none">
                ∞
              </div>
              <h3 className="display text-[20px] mt-4">
                {t("market.cards.infra.title")}
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                {t("market.cards.infra.body")}
              </p>
            </div>
          </div>

          <div className="marginalia mt-10 max-w-[64ch]">
            {t("market.sources")}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          VI — DIFFERENTIATION / COMPETITION
          ════════════════════════════════════════════════════════════════════ */}
      <section id="vantagem" className="container-page py-28 lg:py-36">
        <div className="eyebrow label">
          <span className="sec-num text-[28px] leading-none">VI</span>
          <span>{t("advantage.eyebrow")}</span>
          <span className="bar" />
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <h2 className="display col-span-12 lg:col-span-8 text-[clamp(40px,5.5vw,72px)]">
            {t("advantage.titleLine1")}
            <br />
            <span className="display-italic">
              {t("advantage.titleLine2")}
            </span>
          </h2>
          <p className="col-span-12 lg:col-span-4 lg:pt-8 text-[15px] leading-[1.65] text-ink-soft">
            {t("advantage.body")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-px bg-line border hairline">
          <div className="bg-bone p-8">
            <div className="label text-clay">
              {t("advantage.categories.docs.label")}
            </div>
            <h3 className="display mt-3 text-[26px]">
              {t("advantage.categories.docs.title")}
            </h3>
            <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
              {t("advantage.categories.docs.body")}
            </p>
            <ul className="mt-5 space-y-2 text-[13px] text-ink-soft">
              <li className="flex justify-between border-b hairline pb-2">
                <span>Abridge</span>
                <span className="num text-ink-mute">$1–2B</span>
              </li>
              <li className="flex justify-between border-b hairline pb-2">
                <span>Ambience Healthcare</span>
                <span className="num text-ink-mute">$1–2B</span>
              </li>
              <li className="flex justify-between">
                <span>Suki AI</span>
                <span className="num text-ink-mute">$500–700M</span>
              </li>
            </ul>
          </div>

          <div className="bg-bone p-8">
            <div className="label text-clay">
              {t("advantage.categories.voice.label")}
            </div>
            <h3 className="display mt-3 text-[26px]">
              {t("advantage.categories.voice.title")}
            </h3>
            <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
              {t("advantage.categories.voice.body")}
            </p>
            <ul className="mt-5 space-y-2 text-[13px] text-ink-soft">
              <li className="flex justify-between border-b hairline pb-2">
                <span>Nuance (Microsoft)</span>
                <span className="num text-ink-mute">
                  {t("advantage.msftSuffix")}
                </span>
              </li>
              <li className="flex justify-between border-b hairline pb-2">
                <span>K Health</span>
                <span className="num text-ink-mute">$900M–1.5B</span>
              </li>
              <li className="flex justify-between">
                <span>sully.ai</span>
                <span className="num text-ink-mute">$1B</span>
              </li>
            </ul>
          </div>

          <div className="bg-bone p-8">
            <div className="label text-clay">
              {t("advantage.categories.systems.label")}
            </div>
            <h3 className="display mt-3 text-[26px]">
              {t("advantage.categories.systems.title")}
            </h3>
            <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
              {t("advantage.categories.systems.body")}
            </p>
            <ul className="mt-5 space-y-2 text-[13px] text-ink-soft">
              <li className="flex justify-between border-b hairline pb-2">
                <span>Epic Systems</span>
                <span className="num text-ink-mute">$60–80B</span>
              </li>
              <li className="flex justify-between border-b hairline pb-2">
                <span>Oracle Health (Cerner)</span>
                <span className="num text-ink-mute">$250B+</span>
              </li>
              <li className="flex justify-between">
                <span>3M HIS / Solventum</span>
                <span className="num text-ink-mute">$400B</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Punchline */}
        <div className="mt-14 grid grid-cols-12 gap-6 items-center border-t hairline-strong pt-10">
          <div className="col-span-12 md:col-span-1 num text-clay text-[20px]">
            ↳
          </div>
          <h3 className="display col-span-12 md:col-span-11 text-[clamp(28px,3.5vw,44px)]">
            {t("advantage.punchlinePre")}{" "}
            <span className="display-italic">
              {t("advantage.punchlineEmphasis")}
            </span>
          </h3>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          VII — MODEL & VISION
          ════════════════════════════════════════════════════════════════════ */}
      <section id="modelo" className="bg-bone-light border-y hairline">
        <div className="container-page py-28 lg:py-36">
          <div className="grid grid-cols-12 gap-8">
            {/* Modelo */}
            <div className="col-span-12 lg:col-span-6 lg:pr-12 lg:border-r hairline">
              <div className="eyebrow label">
                <span className="sec-num text-[28px] leading-none">VII</span>
                <span>{t("model.eyebrow")}</span>
                <span className="bar" />
              </div>

              <h2 className="display mt-8 text-[clamp(36px,4.5vw,60px)]">
                {t("model.titleLine1")}
                <br />
                <span className="display-italic">
                  {t("model.titleLine2")}
                </span>
              </h2>

              <ul className="mt-10 space-y-6">
                <li className="grid grid-cols-12 gap-4 border-b hairline pb-6">
                  <div className="col-span-2 num text-clay">01</div>
                  <div className="col-span-10">
                    <h3 className="display text-[22px]">
                      {t("model.items.saas.title")}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-ink-soft mt-2">
                      {t("model.items.saas.body")}
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-12 gap-4 border-b hairline pb-6">
                  <div className="col-span-2 num text-clay">02</div>
                  <div className="col-span-10">
                    <h3 className="display text-[22px]">
                      {t("model.items.consumption.title")}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-ink-soft mt-2">
                      {t("model.items.consumption.body")}
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 num text-clay">03</div>
                  <div className="col-span-10">
                    <h3 className="display text-[22px]">
                      {t("model.items.enterprise.title")}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-ink-soft mt-2">
                      {t("model.items.enterprise.body")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visão */}
            <div className="col-span-12 lg:col-span-6 lg:pl-12">
              <div className="eyebrow label">
                <span className="sec-num text-[28px] leading-none">≈</span>
                <span>{t("vision.eyebrow")}</span>
                <span className="bar" />
              </div>

              <h2 className="display mt-8 text-[clamp(36px,4.5vw,60px)]">
                {t("vision.titleLine1")}
                <br />
                <span className="display-italic">
                  {t("vision.titleLine2")}
                </span>
              </h2>

              <p className="mt-8 text-[16px] leading-[1.7] text-ink-soft max-w-[44ch]">
                {t("vision.body")}
              </p>

              <div className="mt-10 grid grid-cols-12 gap-y-5">
                <div className="col-span-3 label text-clay">
                  {t("vision.todayLabel")}
                </div>
                <div className="col-span-9 text-[15px] leading-[1.6] text-ink-soft border-b hairline pb-5">
                  {t("vision.todayBody")}
                </div>

                <div className="col-span-3 label text-clay">
                  {t("vision.nextLabel")}
                </div>
                <div className="col-span-9 text-[15px] leading-[1.6] text-ink-soft border-b hairline pb-5">
                  {t("vision.nextBody")}
                </div>

                <div className="col-span-3 label text-clay">
                  {t("vision.visionLabel")}
                </div>
                <div className="col-span-9 text-[15px] leading-[1.6] text-ink">
                  {t("vision.visionPart1")}{" "}
                  <span className="display-italic text-clay-deep">
                    {t("vision.visionEmphasis")}
                  </span>{" "}
                  {t("vision.visionPart2")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          VIII — FINAL CTA
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="cta"
        className="bg-ink text-bone-light relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <pattern
                id="dgrid"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 24 0 L 0 0 0 24"
                  fill="none"
                  stroke="#FAF7F1"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#dgrid)" />
          </svg>
        </div>

        <div className="container-page py-28 lg:py-36 relative">
          <div
            className="eyebrow label"
            style={{ color: "rgba(244,239,230,0.6)" }}
          >
            <span
              className="sec-num text-[28px] leading-none"
              style={{ color: "#E8B5A6" }}
            >
              VIII
            </span>
            <span>{t("cta.eyebrow")}</span>
            <span
              className="bar"
              style={{ background: "rgba(244,239,230,0.2)" }}
            />
          </div>

          <div className="grid grid-cols-12 gap-8 mt-8">
            <div className="col-span-12 lg:col-span-7">
              <h2
                className="display text-[clamp(48px,8vw,108px)]"
                style={{ color: "#FAF7F1" }}
              >
                {t("cta.titleLine1")}
                <br />
                {t("cta.titleLine2")}
                <br />
                <span className="display-italic" style={{ color: "#E8B5A6" }}>
                  {t("cta.titleLine3")}
                </span>
              </h2>
              <p
                className="mt-8 text-[18px] leading-[1.6] max-w-[52ch]"
                style={{ color: "rgba(244,239,230,0.78)" }}
              >
                {t("cta.body")}
              </p>
            </div>

            <form
              onSubmit={handleDemo}
              className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l"
              style={{ borderColor: "rgba(244,239,230,0.18)" }}
            >
              <label
                className="label block mb-2"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                {t("cta.emailLabel")}
              </label>
              <input
                className="vinput"
                style={{
                  color: "#FAF7F1",
                  borderColor: "rgba(244,239,230,0.35)",
                }}
                type="email"
                required
                placeholder={t("cta.emailPlaceholder")}
              />

              <label
                className="label block mt-7 mb-2"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                {t("cta.hospitalLabel")}
              </label>
              <input
                className="vinput"
                style={{
                  color: "#FAF7F1",
                  borderColor: "rgba(244,239,230,0.35)",
                }}
                type="text"
                required
                placeholder={t("cta.hospitalPlaceholder")}
              />

              <label
                className="label block mt-7 mb-2"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                {t("cta.ehrLabel")}
              </label>
              <select
                className="vinput appearance-none"
                style={{
                  color: "#FAF7F1",
                  borderColor: "rgba(244,239,230,0.35)",
                  backgroundColor: "transparent",
                }}
                defaultValue="Epic"
              >
                <option style={{ color: "#14181F" }}>Epic</option>
                <option style={{ color: "#14181F" }}>
                  Oracle Health (Cerner)
                </option>
                <option style={{ color: "#14181F" }}>Meditech</option>
                <option style={{ color: "#14181F" }}>
                  Allscripts / Veradigm
                </option>
                <option style={{ color: "#14181F" }}>
                  {t("cta.ehrOtherEU")}
                </option>
                <option style={{ color: "#14181F" }}>
                  {t("cta.ehrOther")}
                </option>
              </select>

              <button
                type="submit"
                className="mt-10 btn-primary"
                style={{ background: "#E8B5A6", color: "#14181F" }}
              >
                {t("cta.submit")}
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
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p
                className="label mt-5"
                style={{ color: "rgba(244,239,230,0.5)" }}
              >
                {t("cta.disclaimer")}
              </p>
            </form>
          </div>

          <div
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t"
            style={{ borderColor: "rgba(244,239,230,0.18)" }}
          >
            <div>
              <div
                className="num display text-[44px] leading-none"
                style={{ color: "#FAF7F1" }}
              >
                14d
              </div>
              <div
                className="label mt-2"
                style={{ color: "rgba(244,239,230,0.55)" }}
              >
                {t("cta.stats.goliveLabel")}
              </div>
            </div>
            <div>
              <div
                className="num display text-[44px] leading-none"
                style={{ color: "#FAF7F1" }}
              >
                0
              </div>
              <div
                className="label mt-2"
                style={{ color: "rgba(244,239,230,0.55)" }}
              >
                {t("cta.stats.phiLabel")}
              </div>
            </div>
            <div>
              <div
                className="num display text-[44px] leading-none"
                style={{ color: "#FAF7F1" }}
              >
                ∞
              </div>
              <div
                className="label mt-2"
                style={{ color: "rgba(244,239,230,0.55)" }}
              >
                {t("cta.stats.overrideLabel")}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════════════════════════════════
          COLOPHON
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="colofao"
        className="hidden bg-bone-dark/40 border-t hairline-strong"
      >
        <div className="container-page py-24">
          <div className="eyebrow label">
            <span className="sec-num text-[28px] leading-none">¶</span>
            <span>{t("colophon.eyebrow")}</span>
            <span className="bar" />
            <span className="hidden md:inline">{t("colophon.edition")}</span>
          </div>

          <h2 className="display mt-8 text-[clamp(36px,5vw,64px)] max-w-[24ch]">
            {t("colophon.titlePart1")}{" "}
            <span className="display-italic">
              {t("colophon.titleEmphasis")}
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-ink-soft max-w-[60ch]">
            {t("colophon.bodyPart1")}{" "}
            <a className="ulink" href="/index.html">
              {t("colophon.bodySisterLink")}
            </a>
            {t("colophon.bodyPart2")}
          </p>

          {/* Palette */}
          <div className="mt-16">
            <div className="label text-ink-mute mb-6">
              {t("colophon.paletteLabel")}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-line border hairline">
              {[
                ["#F4EFE6", "Bone"],
                ["#FAF7F1", "Bone-light"],
                ["#14181F", "Ink"],
                ["#C2553D", "Clay"],
                ["#6B7E6E", "Sage"],
                ["#E5DCC9", "Mist"],
              ].map(([hex, name]) => (
                <div key={hex} className="p-6 bg-bone">
                  <div
                    className="aspect-square rounded-sm border hairline"
                    style={{ background: hex }}
                  />
                  <div className="num text-[11px] mt-3 text-ink">{hex}</div>
                  <div className="label text-ink-mute">{name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image direction */}
          <div className="mt-16">
            <div className="label text-ink-mute mb-6">
              {t("colophon.imageLabel")}
            </div>
            <div className="border hairline">
              {[
                {
                  s: t("colophon.imageSection.hero"),
                  p: t("colophon.images.hero"),
                },
                {
                  s: t("colophon.imageSection.trust"),
                  p: t("colophon.images.trust"),
                },
                {
                  s: t("colophon.imageSection.problem"),
                  p: t("colophon.images.problem"),
                },
                {
                  s: t("colophon.imageSection.mediguard"),
                  p: t("colophon.images.mediguard"),
                },
                {
                  s: t("colophon.imageSection.codicare"),
                  p: t("colophon.images.codicare"),
                },
                {
                  s: t("colophon.imageSection.medicall"),
                  p: t("colophon.images.medicall"),
                },
                {
                  s: t("colophon.imageSection.model"),
                  p: t("colophon.images.model"),
                },
                {
                  s: t("colophon.imageSection.cta"),
                  p: t("colophon.images.cta"),
                },
              ].map((row, i, arr) => (
                <div
                  key={row.s}
                  className={`grid grid-cols-12 gap-6 p-7 ${i < arr.length - 1 ? "border-b hairline" : ""}`}
                >
                  <div className="col-span-12 md:col-span-3 num text-clay text-[12px]">
                    {row.s}
                  </div>
                  <p className="col-span-12 md:col-span-9 text-[14px] leading-[1.7] text-ink-soft">
                    &ldquo;{row.p}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 marginalia">
            <span>{t("colophon.composedLine1")}</span>
            <span className="md:text-right">
              {t("colophon.composedLine2")}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Local components
   ────────────────────────────────────────────────────────────────────────── */

function ValidationStrip({ items }: { items: Validation[] }) {
  const { t } = useTranslation();
  return (
    <div className="mt-10 pt-6 border-t hairline">
      <div className="label text-ink-mute mb-4">
        {t("products.validationLabel")}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <div
            key={it.name}
            className="flex flex-col gap-0.5 px-3.5 py-2.5 border hairline-strong rounded-sm bg-bone"
          >
            <span className="text-[13px] text-ink leading-tight">
              {it.name}
            </span>
            <span className="num text-[10px] text-ink-mute">
              {it.valuation}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeChip({
  code,
  label,
  confidence,
}: {
  code: string;
  label: string;
  confidence: number;
}) {
  const pct = Math.round(confidence * 100);
  return (
    <div className="flex items-center gap-3 p-2.5 bg-bone-light border hairline rounded-sm">
      <span className="num text-[12px] font-medium text-ink bg-clay-light/40 px-2 py-1 rounded-sm shrink-0">
        {code}
      </span>
      <span className="text-[12.5px] text-ink-soft leading-tight flex-1">
        {label}
      </span>
      <span className="num text-[11px] text-ink-mute shrink-0">{pct}%</span>
    </div>
  );
}
