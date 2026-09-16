import type { PtPT } from "./pt-PT";

/* ──────────────────────────────────────────────────────────────────────────
   en-US — intentionally empty for now.
   The landing copy is authored in pt-PT (landing-page-phm-care-copy.md) and
   has not been translated yet. i18next falls back to pt-PT for every key,
   so the switcher works but shows Portuguese until this file is filled in.
   ────────────────────────────────────────────────────────────────────────── */

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const enUS: DeepPartial<PtPT> = {
  language: {
    label: "Language",
    pt: "PT",
    en: "EN",
    switchAria: "Switch language",
  },
};

export default enUS;
