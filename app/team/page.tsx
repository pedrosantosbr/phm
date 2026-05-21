"use client";

import { useTranslation } from "react-i18next";

/* ──────────────────────────────────────────────────────────────────────────
   PHMCare AI — team page
   3-column editorial grid showcasing the people behind the system.
   Photos are placeholders for now (placehold.co); swap for real assets.
   ────────────────────────────────────────────────────────────────────────── */

const PHOTO = (i: number) => `/team/m${i}.jpg`;
const FALLBACK = (i: number) =>
  `https://placehold.co/600x800/E8E0CE/14181F/png?text=Member+0${i}`;

export default function TeamPage() {
  const { t } = useTranslation();

  const members = [
    {
      id: "01",
      slot: 1,
      img: PHOTO(1),
      name: t("team.members.m1.name"),
      role: t("team.members.m1.role"),
      body: t("team.members.m1.body"),
    },
    {
      id: "02",
      slot: 2,
      img: PHOTO(2),
      name: t("team.members.m2.name"),
      role: t("team.members.m2.role"),
      body: t("team.members.m2.body"),
    },
    {
      id: "03",
      slot: 3,
      img: PHOTO(3),
      name: t("team.members.m3.name"),
      role: t("team.members.m3.role"),
      body: t("team.members.m3.body"),
    },
  ];

  return (
    <section className="container-page pt-10 pb-28 lg:pb-36 relative">
      <div className="accent-rule mb-10" />

      {/* Eyebrow */}
      <div className="eyebrow label">
        <span className="sec-num text-[28px] leading-none">¶</span>
        <span>{t("team.eyebrow")}</span>
        <span className="bar" />
        <span className="hidden md:inline">{t("team.eyebrowMeta")}</span>
      </div>

      {/* Title + intro */}
      <div className="grid grid-cols-12 gap-8 mt-8">
        <h1 className="display col-span-12 lg:col-span-8 text-[clamp(48px,7.5vw,108px)] leading-[0.96]">
          {t("team.titleLine1")}
          <br />
          <span className="display-italic">{t("team.titleLine2")}</span>
        </h1>
        <p className="col-span-12 lg:col-span-4 lg:pt-8 text-[16px] leading-[1.7] text-ink-soft">
          {t("team.body")}
        </p>
      </div>

      {/* 3-column grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border hairline">
        {members.map((m) => (
          <article
            key={m.id}
            className="specimen bg-bone-light p-8 md:p-9 flex flex-col"
          >
            <div className="flex items-center justify-between">
              <span className="num text-[12px] text-clay">— {m.id}</span>
              <span className="label text-ink-mute">Specimen</span>
            </div>

            <div className="mt-5 aspect-[4/5] overflow-hidden border hairline-strong rounded-sm bg-bone-dark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.img}
                alt={m.name}
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.dataset.fallback) {
                    el.dataset.fallback = "1";
                    el.src = FALLBACK(m.slot);
                  }
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="display mt-7 text-[clamp(28px,3vw,40px)] leading-[1.02]">
              {m.name}
            </h3>
            <div className="label text-clay mt-2">{m.role}</div>

            <p className="mt-5 text-[14.5px] leading-[1.65] text-ink-soft text-justify hyphens-auto">
              {m.body}
            </p>

            <div className="mt-auto pt-7 marginalia border-t hairline">
              {t("team.specimenFooter")}
            </div>
          </article>
        ))}
      </div>

      {/* Footnote */}
      <div className="mt-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="label text-clay">{t("team.footnoteLabel")}</div>
        </div>
        <p className="col-span-12 md:col-span-9 text-[15px] leading-[1.65] text-ink-soft max-w-[64ch]">
          {t("team.footnoteBody")}
        </p>
      </div>
    </section>
  );
}
