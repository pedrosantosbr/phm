"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Arrow, FlowMark } from "./components/Arrow";

/* ──────────────────────────────────────────────────────────────────────────
   PHM Care — Codex · landing page
   Six sections + CTA + footer. Copy lives in i18n/locales/pt-PT.ts and comes
   from landing-page-phm-care-copy.md — change it there, not here.
   ────────────────────────────────────────────────────────────────────────── */

const INV_INPUT = { color: "#FAF7F1", borderColor: "rgba(244,239,230,0.35)" } as const;
const OPT = { color: "#14181F" } as const;
const ROLE_KEYS = ["board", "clinical", "coding", "it", "other"] as const;

function Eyebrow({ text, fill }: { text: string; fill?: string }) {
  return (
    <div className="eyebrow label">
      <FlowMark fill={fill} />
      <span>{text}</span>
      <span className="bar" />
    </div>
  );
}

function SectionTitle({
  id,
  line1,
  line2,
  className = "",
}: {
  id: string;
  line1: string;
  line2: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`display mt-7 ${className}`}
      style={{ fontSize: "clamp(36px,5.2vw,68px)" }}
    >
      {line1} <em>{line2}</em>
    </h2>
  );
}

export default function Page() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");

  // Scroll reveal + anchor scrolling that also moves keyboard focus
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | null = null;
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
      );
      reveals.forEach((el) => io?.observe(el));
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href*='#']");
      if (!a) return;
      const hash = a.hash;
      if (!hash || hash.length < 2) return;
      if (a.pathname !== window.location.pathname) return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      io?.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  // No backend yet: open the visitor's mail client with the request filled in.
  function handleDemo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("");
    if (!form.checkValidity()) {
      setStatus(t("cta.form.invalid"));
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }
    const v = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement).value.trim();
    const other = form.elements.namedItem("funcaoOutra") as HTMLInputElement | null;
    const funcao = other ? `${v("funcao")} — ${other.value.trim()}` : v("funcao");
    const subject = `${t("cta.form.subject")} — ${v("hospital")}`;
    const body = [
      `${t("cta.form.email")}: ${v("email")}`,
      `${t("cta.form.hospital")}: ${v("hospital")}`,
      `${t("cta.form.role")}: ${funcao}`,
      "",
      t("cta.form.bodyIntro"),
    ].join("\n");
    window.location.href = `mailto:pedro@phmcare.ai?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus(t("cta.form.sent"));
  }

  const steps = ["s1", "s2", "s3", "s4"] as const;

  return (
    <main id="conteudo" tabIndex={-1}>
      {/* ══════════════════════════════════════════════════════════════════
          HERÓI — o produto
          ══════════════════════════════════════════════════════════════════ */}
      <section id="inicio" className="container-page hero" aria-labelledby="h-hero">
        <div className="accent-rule" />

        <div className="grid-12 mt-10">
          <div className="lg-7 stagger">
            <Eyebrow text={t("hero.eyebrow")} />

            <h1 id="h-hero" className="display">
              {t("hero.titleLine1")}
              <br />
              <em>{t("hero.titleLine2")}</em>
            </h1>

            <p className="lede">{t("hero.body")}</p>

            <div className="ctas">
              <a href="#contacto" className="btn-primary">
                {t("hero.ctaPrimary")}
                <Arrow />
              </a>
              <a href="#como-funciona" className="btn-ghost">
                {t("hero.ctaGhost")}
                <Arrow down />
              </a>
            </div>

            <p className="microcopy marginalia">{t("hero.microcopy")}</p>
          </div>

          {/* Visual do herói: fluxo em quatro estados, sem dados */}
          <figure className="lg-5 reveal" aria-label={t("hero.flow.aria")}>
            <div className="flow-card">
              <div className="head">
                <span className="label">{t("hero.flow.header")}</span>
                <span className="label tag">{t("hero.flow.tag")}</span>
              </div>

              <div className="states">
                <div className="state">
                  <div className="label st-label">{t("hero.flow.s1Label")}</div>
                  <div className="st-title">{t("hero.flow.s1Title")}</div>
                  <div className="bars" aria-hidden="true">
                    <div className="bar" style={{ width: "92%" }} />
                    <div className="bar" style={{ width: "78%" }} />
                    <div className="bar" style={{ width: "86%" }} />
                  </div>
                  <div className="chips" aria-hidden="true">
                    <span className="chip">{t("hero.flow.s1Chip1")}</span>
                    <span className="chip">{t("hero.flow.s1Chip2")}</span>
                    <span className="chip">{t("hero.flow.s1Chip3")}</span>
                  </div>
                </div>

                <div className="state">
                  <div className="label st-label">{t("hero.flow.s2Label")}</div>
                  <div className="st-title">{t("hero.flow.s2Title")}</div>
                  <div className="chips" aria-hidden="true">
                    <span className="chip">
                      {t("hero.flow.s2Chip1")} <span className="sw" />
                    </span>
                    <span className="chip">
                      {t("hero.flow.s2Chip2")} <span className="sw" />
                      <span className="sw" />
                    </span>
                    <span className="chip">
                      {t("hero.flow.s2Chip3")} <span className="sw" />
                    </span>
                  </div>
                  <div className="quote-line" aria-hidden="true">
                    <div className="bar clay" style={{ width: "88%" }} />
                    <div className="bar clay" style={{ width: "64%" }} />
                  </div>
                  <div className="marginalia mt-2">{t("hero.flow.s2Note")}</div>
                </div>

                <div className="human" role="note">
                  <span className="label">{t("hero.flow.humanLabel")}</span>
                  <span className="who">{t("hero.flow.humanWho")}</span>
                </div>

                <div className="state after-human">
                  <div className="label st-label">{t("hero.flow.s3Label")}</div>
                  <div className="st-title">{t("hero.flow.s3Title")}</div>
                  <div className="chips" aria-hidden="true">
                    <span className="chip">
                      {t("hero.flow.s3Chip1")} <span className="sw" />
                    </span>
                    <span className="chip">
                      {t("hero.flow.s3Chip2")} <span className="sw" />
                    </span>
                  </div>
                  <div className="bars" aria-hidden="true">
                    <div className="bar ink" style={{ width: "56%" }} />
                  </div>
                </div>

                <div className="state">
                  <div className="label st-label">{t("hero.flow.s4Label")}</div>
                  <div className="st-title">{t("hero.flow.s4Title")}</div>
                  <div className="value-row" aria-hidden="true">
                    <span className="euro">€</span>
                    <div className="bar ink" style={{ width: "44%", height: 9 }} />
                  </div>
                  <div className="marginalia mt-2">{t("hero.flow.s4Note")}</div>
                </div>
              </div>
            </div>

            <figcaption className="flow-note marginalia">
              <svg width="40" height="14" viewBox="0 0 40 14" aria-hidden="true">
                <path
                  d="M0 7 H30 M30 7 L26 3 M30 7 L26 11"
                  stroke="rgba(20,24,31,0.4)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
              <span>{t("hero.flow.caption")}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          I — COMO FUNCIONA (coração da página)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="on-ink" aria-labelledby="h-como">
        <div className="container-page section">
          <div className="grid-12">
            <div className="lg-7">
              <Eyebrow text={t("how.eyebrow")} fill="var(--ink)" />
              <h2
                id="h-como"
                className="display mt-7"
                style={{ fontSize: "clamp(36px,5.6vw,76px)" }}
              >
                {t("how.titleLine1")} <em>{t("how.titleLine2")}</em>
              </h2>
            </div>
            <div className="lg-5 self-end">
              <p className="lede">{t("how.body")}</p>
            </div>
          </div>

          <ol className="steps">
            {steps.map((s) => {
              const human = s === "s3";
              return (
                <li key={s} className={`step reveal${human ? " human-step" : ""}`}>
                  {human && (
                    <span className="badge">
                      <span className="dot" />
                      {t("how.humanBadge")}
                    </span>
                  )}
                  <div className="num" aria-hidden="true">
                    {t(`how.steps.${s}.num`)}
                  </div>
                  <h3>
                    <span className="label mute">{t(`how.steps.${s}.label`)}</span>
                    {t(`how.steps.${s}.title`)}
                  </h3>
                  <p>{t(`how.steps.${s}.body`)}</p>
                  {s === "s4" && (
                    <span className="tag-dev">
                      <span className="dot" />
                      {t("how.simhTag")}
                    </span>
                  )}
                  <div className="removes">
                    <span className="label">{human ? t("how.because") : t("how.removes")}</span>
                    <p>{human ? t("how.steps.s3.because") : t(`how.steps.${s}.removes`)}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="steps-close grid-12">
            <div className="lg-8 lg-start-2 reveal">
              <div className="rule mb-7" />
              <p>{t("how.close")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          II — PORQUE AGORA (contexto)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="porque-agora" className="container-page section" aria-labelledby="h-agora">
        <div className="grid-12">
          <div className="lg-5 lg-sticky">
            <Eyebrow text={t("why.eyebrow")} />
            <SectionTitle id="h-agora" line1={t("why.titleLine1")} line2={t("why.titleLine2")} />
            <p className="body-copy mt-7 max-w-[44ch] text-[17px]">{t("why.body")}</p>
          </div>

          <div className="lg-7">
            <ul className="reasons">
              {(["r1", "r2", "r3"] as const).map((r) => (
                <li key={r} className="reason reveal">
                  <div className={`figure${r === "r3" ? " word" : ""}`}>
                    {t(`why.${r}.figure`)} <small>{t(`why.${r}.figureUnit`)}</small>
                  </div>
                  <h3>{t(`why.${r}.title`)}</h3>
                  <p className="body-copy">{t(`why.${r}.body`)}</p>
                  <span className="source">{t(`why.${r}.source`)}</span>
                </li>
              ))}
            </ul>

            <div className="reasons-close reveal">
              <div className="figure">{t("why.close.figure")}</div>
              <p>{t("why.close.body")}</p>
              <span className="source">{t("why.close.source")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          III — O PAINEL
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="painel"
        className="container-page section border-t hairline"
        aria-labelledby="h-painel"
      >
        <div className="grid-12">
          <div className="lg-7">
            <Eyebrow text={t("dashboard.eyebrow")} />
            <SectionTitle
              id="h-painel"
              line1={t("dashboard.titleLine1")}
              line2={t("dashboard.titleLine2")}
            />
          </div>
          <div className="lg-5 self-end">
            <p className="lede">{t("dashboard.body")}</p>
          </div>
        </div>

        <ul className="cards">
          <li className="card reveal">
            <span className="k label">{t("dashboard.c1.k")}</span>
            <h3>{t("dashboard.c1.title")}</h3>
            <p className="body-copy">{t("dashboard.c1.body")}</p>
          </li>
          <li className="card reveal">
            <span className="k label">{t("dashboard.c2.k")}</span>
            <h3>{t("dashboard.c2.title")}</h3>
            <p className="body-copy">
              {t("dashboard.c2.bodyPart1")}
              <em>{t("dashboard.c2.bodyEm")}</em>
              {t("dashboard.c2.bodyPart2")}
            </p>
          </li>
          <li className="card reveal">
            <span className="k label">{t("dashboard.c3.k")}</span>
            <h3>{t("dashboard.c3.title")}</h3>
            <p className="body-copy">{t("dashboard.c3.body")}</p>
          </li>
          <li className="card reveal">
            <span className="k label">{t("dashboard.c4.k")}</span>
            <h3>{t("dashboard.c4.title")}</h3>
            <p className="body-copy">
              {t("dashboard.c4.bodyPart1")}
              <em>{t("dashboard.c4.bodyEm")}</em>
              {t("dashboard.c4.bodyPart2")}
            </p>
          </li>
        </ul>

        <p className="section-close reveal">{t("dashboard.close")}</p>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          IV — SEGURANÇA
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="seguranca"
        className="container-page section border-t hairline"
        aria-labelledby="h-seg"
      >
        <div className="grid-12">
          <div className="lg-5 lg-sticky">
            <Eyebrow text={t("security.eyebrow")} />
            <SectionTitle
              id="h-seg"
              line1={t("security.titleLine1")}
              line2={t("security.titleLine2")}
            />
            <p className="body-copy mt-7 max-w-[44ch] text-[17px]">{t("security.body")}</p>
          </div>

          <div className="lg-7">
            <ul className="cards flush">
              {(["p1", "p2", "p3", "p4"] as const).map((p) => (
                <li key={p} className="card reveal">
                  <h3>{t(`security.${p}.title`)}</h3>
                  <p className="body-copy">{t(`security.${p}.body`)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="contacto"
        className="bg-ink text-bone-light relative overflow-hidden"
        aria-labelledby="h-cta"
      >
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <pattern id="dgrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#FAF7F1" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#dgrid)" />
          </svg>
        </div>

        <div className="container-page py-28 lg:py-36 relative">
          <div className="eyebrow label" style={{ color: "rgba(244,239,230,0.6)" }}>
            <span className="sec-num text-[28px] leading-none" style={{ color: "#E8B5A6" }}>
              {t("cta.secNum")}
            </span>
            <span>{t("cta.eyebrow")}</span>
            <span className="bar" style={{ background: "rgba(244,239,230,0.2)" }} />
          </div>

          <div className="grid grid-cols-12 gap-8 mt-8">
            <div className="col-span-12 lg:col-span-7">
              <h2
                id="h-cta"
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
                {t("cta.body1")}
              </p>
              <p
                className="mt-5 text-[18px] leading-[1.6] max-w-[52ch]"
                style={{ color: "rgba(244,239,230,0.78)" }}
              >
                {t("cta.body2")}
              </p>
            </div>

            <form
              className="col-span-12 lg:col-span-5 lg:pl-8 lg:border-l"
              style={{ borderColor: "rgba(244,239,230,0.18)" }}
              onSubmit={handleDemo}
              noValidate
            >
              <label
                className="label block mb-2"
                htmlFor="f-email"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                {t("cta.form.email")}
              </label>
              <input
                className="vinput"
                id="f-email"
                name="email"
                style={INV_INPUT}
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                placeholder={t("cta.form.emailPlaceholder")}
              />

              <label
                className="label block mt-7 mb-2"
                htmlFor="f-hospital"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                {t("cta.form.hospital")}
              </label>
              <input
                className="vinput"
                id="f-hospital"
                name="hospital"
                style={INV_INPUT}
                type="text"
                autoComplete="organization"
                required
                placeholder={t("cta.form.hospitalPlaceholder")}
              />

              <label
                className="label block mt-7 mb-2"
                htmlFor="f-funcao"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                {t("cta.form.role")}
              </label>
              <select
                className="vinput appearance-none"
                id="f-funcao"
                name="funcao"
                style={{ ...INV_INPUT, backgroundColor: "transparent" }}
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" style={OPT}>
                  {t("cta.form.rolePlaceholder")}
                </option>
                {ROLE_KEYS.map((r) => (
                  <option key={r} value={t(`cta.form.roles.${r}`)} style={OPT}>
                    {t(`cta.form.roles.${r}`)}
                  </option>
                ))}
              </select>

              {role === t("cta.form.roles.other") && (
                <>
                  <label
                    className="label block mt-7 mb-2"
                    htmlFor="f-funcao-outra"
                    style={{ color: "rgba(244,239,230,0.6)" }}
                  >
                    {t("cta.form.roleOther")}
                  </label>
                  <input
                    className="vinput"
                    id="f-funcao-outra"
                    name="funcaoOutra"
                    style={INV_INPUT}
                    type="text"
                    required
                    autoFocus
                    placeholder={t("cta.form.roleOtherPlaceholder")}
                  />
                </>
              )}

              <button
                type="submit"
                className="mt-10 btn-primary"
                style={{ background: "#E8B5A6", color: "#14181F" }}
              >
                {t("cta.form.submit")}
                <Arrow />
              </button>

              <p className="text-[14px] mt-4 min-h-[1.5em]" role="status" aria-live="polite" style={{ color: "rgba(244,239,230,0.78)" }}>
                {status}
              </p>
              <p className="label mt-2" style={{ color: "rgba(244,239,230,0.5)" }}>
                {t("cta.form.microcopy")}
              </p>
            </form>
          </div>

          <div
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t"
            style={{ borderColor: "rgba(244,239,230,0.18)" }}
          >
            {(["s1", "s2", "s3"] as const).map((k) => (
              <div key={k}>
                <div className="num display text-[44px] leading-none" style={{ color: "#FAF7F1" }}>
                  {t(`cta.stats.${k}Num`)}
                </div>
                <div className="label mt-2" style={{ color: "rgba(244,239,230,0.55)" }}>
                  {t(`cta.stats.${k}Label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
