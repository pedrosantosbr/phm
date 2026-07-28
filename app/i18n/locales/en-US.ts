import type { PtPT } from "./pt-PT";

const enUS: PtPT = {
  masthead: {
    edition: "Vol. I · Issue 01 · April 2026",
    tagline: "Built with clinicians, for clinicians.",
    uptimeStatus: "Operational",
  },

  nav: {
    brandSuffix: "— Health",
    products: "Products",
    market: "Market",
    advantage: "Advantage",
    team: "Team",
    login: "Sign in",
    cta: "Request demo",
  },

  language: {
    label: "Language",
    pt: "PT",
    en: "EN",
    switchAria: "Change language",
  },

  hero: {
    eyebrow: "The AI operating system for hospitals",
    eyebrowMeta: "Filed under: medicine · machine reasoning · workflow",
    titleLine1: "Clinical intelligence,",
    titleLine2: "at the speed of the hospital.",
    body: "PHMCare AI connects clinical coding, rostering and bed management into a single layer of hospital intelligence — cutting administrative cost, billing delays and waiting time. Without replacing the judgment of those who care.",
    ctaPrimary: "Request a demonstration",
    ctaGhost: "Read the pitch",
    complianceGolive: "Go-live in 14 days",
    specimen: {
      label: "Specimen 01 / CodiCare",
      header: "CodiCare · Clinical coding",
      meta: "discharge · 04.12",
      recordHeader: "PROGRESS NOTE · 04.12.2026 · 14:22",
      recordPart1: "Patient reports",
      recordHighlight1: "chest pain",
      recordPart2:
        "with sudden onset, radiating to the left arm, associated with",
      recordHighlight2: "exertional dyspnea",
      recordPart3: ". The ECG shows",
      recordHighlight3: "ST elevation",
      recordPart4: "in the inferior wall.",
      code1Label: "Acute myocardial infarction · inferior wall",
      code2Label: "Chest pain, unspecified",
      code3Label: "Dyspnea",
      recommendation: "Audit · complete",
      recText: "Three grounded codes — each linked to the source excerpt.",
      recEmphasis: "Nothing invented, everything traceable.",
      source: "Source: ICD-10 Vol. 2 · Local protocol v3.2 · Payer rules",
      btnAccept: "Accept codes",
      btnReview: "Review excerpts",
      latency: "latency 38ms",
      annotation:
        "Live specimen — every code carries an excerpt citation, a confidence level and an audit trail. The AI proposes; the coder decides.",
    },
  },

  trust: {
    label: "— Built with",
    headlinePre: "Hospitals serving more than",
    headlineEmphasis: "14 million",
    headlinePost: "encounters a year.",
    stats: {
      productsLabel: "Products · one layer",
      goliveLabel: "From contract to first recommendation",
      uptimeLabel: "Availability · 24m",
      latencyLabel: "Median decision latency",
    },
  },

  problem: {
    eyebrow: "The Problem",
    titleLine1: "Hospitals with",
    titleLine2: "fragmented systems.",
    titleLine3: "People pay the bill.",
    body: "Every hospital is a constellation of systems that don't talk. The professionals are the glue — and they are breaking. Patients wait. Administrative costs climb. Avoidable risk slips beneath the radar.",
    source:
      "— Source: PHMCare AI internal benchmark 2025, n=1.4M clinical episodes, 22 institutions EU/BR.",
    items: {
      coding: {
        title: "Manual coding: expensive, slow, unstable.",
        body: "ICD coding and clinical documentation are still done by eye — producing billing delays, avoidable denials and hours lost to audit work that never returns to the patient.",
        tag: "tag · icd · audit · billing · denials",
      },
      rostering: {
        title: "Rosters built by hand, shift by shift.",
        bodyPart1:
          "Monthly rosters are assembled in spreadsheets, by hand, by people who are already overloaded. The result is",
        bodyEmphasis: "uneven coverage",
        bodyPart2:
          "— nights and weekends piled on the same few, and hours lost rebuilding everything when someone calls in sick.",
        tag: "tag · rostering · shifts · skills · coverage",
      },
      beds: {
        title: "Blocked beds and patients waiting.",
        bodyPart1:
          "Occupancy lives on whiteboards and phone calls. With no real-time status for each bed, patients wait on gurneys while clean beds stay",
        bodyEmphasis: "invisible to whoever decides",
        bodyPart2:
          "— and inter-ward transfers drag on for hours.",
        tag: "tag · beds · occupancy · transfers · flow",
      },
      burnout: {
        title: "Professionals on the edge of exhaustion.",
        bodyPart1: "Physicians and nurses spend up to",
        bodyEmphasis: "49% of their time",
        bodyPart2:
          "on documentation and chart review. The signal lives in the present — the system only describes the past.",
        tag: "tag · burnout · documentation · cognitive",
      },
    },
  },

  platform: {
    eyebrow: "The Platform",
    titleLine1: "One horizontal layer.",
    titleLine2: "Three instruments.",
    titleLine3: "A single record.",
    body1:
      "PHMCare AI plugs into your existing EHR, reads the records, builds the rosters and tracks every bed — and returns recommendations with citation, measured latency and an audit trail.",
    body2Line1: "Nothing replaces clinical judgment.",
    body2Line2: "Everything sharpens it.",
    pillars: {
      federated: {
        title: "Federated by design.",
        body: "Data never leaves your perimeter. Models run inside your VPC or on-premise. PHI is never exposed.",
      },
      cited: {
        title: "Cited by default.",
        body: "Every output — code, roster, decision — carries a citation to source: official catalog, local protocol, service rules. No black box.",
      },
      calibrated: {
        title: "Calibrated to your reality.",
        body: "Protocols, formulary, payer rules and local law. PT, BR and EU. Calibration done with your clinical team.",
      },
    },
  },

  products: {
    eyebrow: "The Instruments — three products, one record.",
    eyebrowMeta: "Independent · interlinked · audit-ready",
    titleLine1: "Built by clinicians,",
    titleLine2: "indexed by evidence.",
    body: "Each instrument is independent, interoperable, and integrates with the EHR via HL7 v2, FHIR R4 and SMART-on-FHIR. Start with one. Add the others as the team grows in confidence.",
    validationLabel: "— Category validated by",
    flagshipLabel: "Flagship product",
    noteLabel: "— Note",
    notePart1:
      "Each of these categories is validated by more than a billion dollars of venture capital. But",
    noteEmphasis: "every hospital is unique",
    notePart2:
      "— by legislation, by workflow, by reality on the ground. PHMCare AI was built precisely for that difference.",
    items: {
      codicare: {
        codename: "Instrument 01 / CodiCare",
        name: "CodiCare",
        tagline: "Every chart, coded and audited — automatically.",
        body: "Automates chart review with clinical AI and OCR, proposing and validating ICD codes with direct citation to the source excerpt. Drastically reduces the time and cost of audit, billing and regulatory reporting.",
        bullet1:
          "ICD-10 / ICD-11 suggestions with source-excerpt citation and confidence",
        bullet2:
          "Clinical OCR trained on handwritten PT/BR charts and hospital forms",
        bullet3:
          "Automatic audit against hospital protocols and payer rules",
        pill: "Coding · audit",
        specimen: {
          header: "Chart · processed",
          meta: "discharge · 04.12",
          recordHeader: "PROGRESS NOTE · 04.12.2026 · 14:22",
          recordPart1: "Patient reports",
          recordHighlight1: "chest pain",
          recordPart2:
            "with sudden onset, radiating to the left arm, associated with",
          recordHighlight2: "exertional dyspnea",
          recordPart3:
            ". Heart sounds rhythmic, no murmurs. ECG shows",
          recordHighlight3: "ST elevation",
          recordPart4: "in inferior wall.",
          code1Label: "Acute myocardial infarction · inferior wall",
          code2Label: "Chest pain, unspecified",
          code3Label: "Dyspnea",
          excerpts: "12 excerpts analyzed",
          suggested: "3 codes suggested",
        },
      },
      escala: {
        codename: "Instrument 02 / Escala",
        name: "Escala",
        tagline: "Every shift, fairly covered.",
        body: "Generates deterministic monthly rosters from each service's working-hours rules — respecting skills, specialties and work limits. Balances nights and weekends fairly, and rebuilds the whole roster in seconds when someone calls in sick.",
        bullet1:
          "Monthly roster generated from contracted hours and the service's shift catalog",
        bullet2:
          "Automatic balancing of nights, weekends and skills across each professional",
        bullet3:
          "Deterministic rebuild in seconds — no spreadsheets, no favoritism",
        pill: "Rostering · workforce",
        specimen: {
          header: "Roster · April 2026",
          meta: "Cardiology · 6 professionals",
          gridLegend: "M morning · A afternoon · N night · — off",
          rowsLabel: "Team",
          coverageLabel: "Coverage",
          coverageValue: "100% · no gaps",
          balanceLabel: "Nights per professional",
          balanceValue: "balanced · Δ 1",
          footerLeft: "30 days generated",
          footerRight: "0 conflicts",
        },
      },
      bedflow: {
        codename: "Instrument 03 / BedFlow",
        name: "BedFlow",
        tagline: "Every bed, with the right status.",
        body: "Keeps the hospital's bed inventory and its occupancy lifecycle in real time — available, occupied, cleaning or blocked — with a per-ward occupancy summary. The foundation for allocating beds to inter-ward transfer requests, before the patient waits on a gurney.",
        bullet1:
          "Per-ward bed inventory with auditable status transitions",
        bullet2:
          "Real-time per-service occupancy summary — available · occupied · cleaning · blocked",
        bullet3:
          "Bed allocation for inter-ward transfer requests — active roadmap",
        pill: "Flow · beds",
        specimen: {
          header: "Occupancy · real time",
          meta: "3 wards · 48 beds",
          ward1Label: "Cardiology · Ward A",
          ward1Value: "18 / 20",
          ward2Label: "Internal Medicine · Ward B",
          ward2Value: "12 / 16",
          ward3Label: "Surgery · Ward C",
          ward3Value: "9 / 12",
          statusFree: "Available",
          statusOccupied: "Occupied",
          statusCleaning: "Cleaning",
          statusBlocked: "Blocked",
          requestLabel: "Transfer request",
          requestValue: "Ward B → Ward A · bed allocated",
          footerLeft: "48 beds monitored",
          footerRight: "5 free now",
        },
      },
    },
  },

  market: {
    eyebrow: "The Market",
    titlePre: "More than",
    titleEmphasis: "$4 trillion",
    titlePost:
      "in hospital inefficiency — waiting for a layer that thinks.",
    body: "Clinical AI is becoming infrastructure. Whoever reaches the right layer first stays.",
    cards: {
      ineff: {
        title: "Global hospital inefficiencies.",
        body: "Annual cost wasted on system fragmentation, manual workflows and avoidable errors. PHMCare AI's direct address.",
      },
      valuation: {
        title: "Valuation in clinical operations alone.",
        bodyPart1:
          "Incumbents in coding, rostering and bed management cross a billion in valuation. And that is only",
        bodyEmphasis: "one",
        bodyPart2: "of the three axes where PHMCare AI operates.",
      },
      infra: {
        title: "Essential infrastructure.",
        body: "In five years, clinical AI will stop being an optional differentiator and become as mandatory as the EHR. Hospitals without it won't operate.",
      },
    },
    sources:
      "— Sources: McKinsey Global Institute (Healthcare AI 2024), CB Insights, public funding data on the competitors listed in IV. Reproduced for category validation.",
  },

  advantage: {
    eyebrow: "The Advantage",
    titleLine1: "We don't compete in one category.",
    titleLine2: "We compete in three — and link the three.",
    body: "Each category has its incumbents — giants or unicorns. But they all operate in silos. PHMCare AI's advantage is the layer that crosses them.",
    categories: {
      docs: {
        label: "— Category 01",
        title: "Clinical coding",
        body: "Turn the chart into ICD codes and a billable episode.",
      },
      voice: {
        label: "— Category 02",
        title: "Rostering & workforce",
        body: "Build shifts and manage the team. Rigid, outside the clinical flow.",
      },
      systems: {
        label: "— Category 03",
        title: "Hospital flow & capacity",
        body: "Manage beds and transfers. Expensive, hard to integrate.",
      },
    },
    msftSuffix: "part of MSFT",
    punchlinePre: "They operate in silos.",
    punchlineEmphasis: "PHMCare AI is the layer that crosses them.",
  },

  model: {
    eyebrow: "The Model",
    titleLine1: "SaaS per hospital,",
    titleLine2: "usage for operations.",
    items: {
      saas: {
        title: "Clinical SaaS",
        body: "Per hospital, per bed or per healthcare professional. Pricing aligned with internal structure.",
      },
      consumption: {
        title: "Usage · operations",
        body: "Priced per coded chart, per generated roster and per monitored bed-day. Scales with volume, no artificial ceiling.",
      },
      enterprise: {
        title: "Enterprise contracts",
        body: "Integration with EHRs (Epic, Oracle Health, Meditech, Allscripts), defined SLAs, BAA at signing.",
      },
    },
  },

  vision: {
    eyebrow: "The Vision",
    titleLine1: "We start with 3.",
    titleLine2: "We build for 1.",
    body: "Three products today. One layer tomorrow. An AI-native hospital operating system — coordinating clinical decision, operations and patient flow in real time.",
    todayLabel: "Today",
    todayBody:
      "Clinical coding · intelligent rostering · bed management.",
    nextLabel: "Next",
    nextBody:
      "Automated clinical pathways · remote monitoring · intelligent formulary · patient flow management.",
    visionLabel: "Vision",
    visionPart1:
      "AI-native hospital operating system — a single layer coordinating",
    visionEmphasis: "decision, operations and flow",
    visionPart2: "in real time.",
  },

  cta: {
    eyebrow: "Talk to the team",
    titleLine1: "Let's put",
    titleLine2: "PHMCare AI",
    titleLine3: "in your hospital.",
    body: "A 30-minute demo on your real workflows. No slideware. We connect to a sandbox of your data, show CodiCare, Escala and BedFlow in action, and leave a written report.",
    emailLabel: "Clinical or executive email",
    emailPlaceholder: "pedro@phmcare.ai",
    hospitalLabel: "Hospital · service",
    hospitalPlaceholder: "St. Bartholomew's, Cardiology",
    ehrLabel: "EHR",
    ehrOther: "Other",
    ehrOtherEU: "Soarian / other EU",
    submit: "Request a demonstration",
    disclaimer:
      "Reply in 24h · BAA at signing · no PHI required for the demo",
    stats: {
      goliveLabel: "From contract to first recommendation",
      phiLabel: "PHI leaves your perimeter",
      overrideLabel:
        "Clinical override — those who care always have the final word",
    },
    alertSubmitted:
      "Request received. A clinical lead will be in touch within 24 hours.",
  },

  footer: {
    eyebrow: "End of issue",
    cities: "Ponte de Lima · Portugal",
    body: "The AI operating system for hospitals. <em>CodiCare</em>, <em>Escala</em> and <em>BedFlow</em> in a single layer of clinical intelligence — written with the same care it asks of the people who care.",
    bodyPart1: "The AI operating system for hospitals.",
    bodyProducts: "CodiCare, Escala and BedFlow",
    bodyPart2:
      "in a single layer of clinical intelligence — written with the same care it asks of the people who care.",
    newsletter: {
      label: "— Newsletter · The Clinical Lancet",
      body: "A monthly issue on machine reasoning applied to hospitals. No noise, no hype — only what changed.",
      placeholder: "pedro@phmcare.ai",
      meta: "1 issue · month · always cancellable",
      submit: "Subscribe",
    },
    columns: {
      products: "— Products",
      productsLinks: {
        integrations: "Integrations",
        security: "Clinical security",
      },
      resources: "— Resources",
      resourcesLinks: {
        methodology: "Methodology",
        validations: "Clinical validations",
        whitepapers: "White papers",
        press: "Press",
        trust: "Trust center",
      },
      company: "— Company",
      companyLinks: {
        about: "About",
        clinicalCouncil: "Clinical council",
        careers: "Careers",
        hiring: "● hiring",
        press: "Press",
        contact: "Contact",
      },
      hq: "— Headquarters",
      hqEntity: "Anvel Lda",
      hqStreet: "Rua do Carrão n.º 3704 Lj D",
      hqCity: "4990-620 Ponte de Lima, Portugal",
      hqPhone: "+351 938 373 944",
    },
    legal: {
      copyright: "© 2026",
      entity: "Anvel Lda",
      tagline: "— Built with care, for those who care.",
      privacy: "Privacy",
      terms: "Terms",
      dataNotice: "Data processing notice",
      top: "↑ Top",
      topAria: "Back to top",
    },
    rodapeAria: "Footer",
  },

  colophon: {
    eyebrow: "Colophon — about this issue",
    edition: "Issue 01 · April 2026",
    titlePart1: "A specimen of the system",
    titleEmphasis: "PHMCare AI.",
    bodyPart1: "This page shares the visual system of the",
    bodySisterLink: "sister edition Vellum",
    bodyPart2:
      ". Same clinical authority, same human warmth — calibrated for the hospital reality of PT, BR and EU.",
    paletteLabel: "— Palette",
    imageLabel: "— Image direction (AI briefing per section)",
    images: {
      hero: "Editorial photograph of a silent hospital corridor at dawn. Soft volumetric light coming through the windows. Nursing station in the back with subtle monitor glow. No people in the foreground. Palette: warm bone, ink charcoal, soft clay. Mamiya 7, 80mm, shallow depth. Editorial archival. 4K.",
      trust:
        "Still life on a walnut table: a leather-bound clinical book ajar, a brass desk lamp pooling warm light, scattered badges, a fountain pen, a white coat. Cream + ink. NEJM-style. 45°, 50mm. 4K.",
      problem:
        "Macro of a stack of paper charts, one of them open with handwritten notes and lab values. Soft window light from the left, long shadows, subtle desaturation toward bone and ink tones. Communicates weight without alarm. Photojournalism, 100mm macro. 4K.",
      codicare:
        "Top-down photograph: paper chart with highlighted keywords (thin clay underline), beside a brass ruler and small index cards with printed codes. Editorial product photography, sage and clay. 4K.",
      escala:
        "Top-down photograph: a monthly grid drawn by hand on cream paper, clay-ink shift marks laid out in a steady rhythm, a brass compass resting beside it. Suggests order and balance. Editorial archival. 4K.",
      bedflow:
        "Minimalist composition: a hospital ward floor plan in blueprint lines on warm bone, small rectangles filled in sage and clay marking occupied and free beds. Generous negative space. Editorial fine-art. 4K.",
      model:
        "Architectural diagram: hospital workflow drawn as blueprint lines on warm cream paper, brass dividing tools resting beside. Editorial top-down. No clutter. 4K.",
      cta: "Wide editorial photograph: hospital atrium with tall arched windows, a single white-coated figure walking with confidence toward the light. Dawn lighting, cream walls, terracotta accents on the floor. Contemplative, aspirational, no sci-fi. 4K.",
    },
    imageSection: {
      hero: "§ Hero",
      trust: "§ Trust",
      problem: "§ Problem",
      codicare: "§ CodiCare",
      escala: "§ Escala",
      bedflow: "§ BedFlow",
      model: "§ Model / Vision",
      cta: "§ Final CTA",
    },
    composedLine1:
      "Set in Fraunces (display, opsz 9–144) and Manrope (body, variable weight). Mono in JetBrains Mono. Editorial 12-column grid, hairlines at 1px / 12% ink.",
    composedLine2: "Printed on screen. Built with care · 2026.",
  },

  hospitals: {
    h1: "St. Bartholomew's Hospital",
    h2: "Tejo Sul Clinical Center",
    h3: "Vitalis Health Group",
    h4: "Belmar Health",
    h5: "Caldera Hospital Group",
    h6: "Mercator Health",
  },

  team: {
    eyebrow: "The Team",
    eyebrowMeta: "Clinicians · engineers · researchers",
    titleLine1: "The people behind",
    titleLine2: "the system.",
    body: "A small, deliberate group. We build PHMCare AI from real hospitals, with clinicians who prescribe and engineers who write production code. No distance between the floor and the repo.",
    specimenFooter: "Ponte de Lima · open to a conversation",
    footnoteLabel: "— Note",
    footnoteBody:
      "We're hiring across clinical engineering, calibration and hospital operations. Direct intro letters: pedro@phmcare.ai.",
    members: {
      m1: {
        name: "Pedro Santos",
        role: "Senior Software + AI Engineer",
        body: "Leads the product stack and the inference infrastructure. Owns the federated architecture that keeps PHI inside the hospital perimeter.",
      },
      m2: {
        name: "Mariana Matos",
        role: "Jurist",
        body: "Bachelor's degrees in Law and History, Master's in Corporate and Business Law, and PhD candidate. Holds a specialization in Hospital Administration from the Escola Nacional de Saúde Pública at Universidade Nova de Lisboa.",
      },
      m3: {
        name: "Fillipi Nascimento",
        role: "Senior SRE Engineer",
        body: "Owns reliability, observability and on-premise operations. Keeps the 99.97% uptime that partner hospitals read on the masthead.",
      },
    },
  },
};

export default enUS;
