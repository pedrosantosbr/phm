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
    body: "PHMCare AI connects medication, voice and records into a single layer of clinical intelligence — cutting errors, administrative cost and waiting time. Without replacing the judgment of those who care.",
    ctaPrimary: "Request a demonstration",
    ctaGhost: "Read the pitch",
    complianceGolive: "Go-live in 14 days",
    specimen: {
      label: "Specimen 01 / MediGuard",
      header: "MediGuard · Pre-administration",
      meta: "00:38s · Nurse 4-B",
      patientLabel: "Patient · MRN 0–8814–73",
      patientName: "Mrs. R. — 67 years",
      severity: "Severity",
      severityHigh: "High",
      prescription: "Prescription",
      prescriptionDrug: "Cefepime 2g IV",
      allergyLabel: "Allergy",
      allergyDrug: "cephalosporins",
      allergyYear: "· 2019",
      interactionLabel: "Interaction",
      interactionDrug: "warfarin",
      interactionConsequence: "· INR ↑",
      recommendation: "Recommendation · evidence: A",
      recPart1: "Hold dose. Consider",
      recDrug: "aztreonam",
      recPart2:
        "as an alternative in a patient with documented β-lactam hypersensitivity.",
      source: "Source: IDSA 2024 · Local protocol v3.2 · Clinical history",
      btnRetain: "Hold dose",
      btnJustify: "Justify and administer",
      latency: "latency 38ms",
      annotation:
        "Live specimen — every recommendation carries a citation, measured latency and an audit trail. Nothing replaces clinical judgment; everything sharpens it.",
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
      meds: {
        title: "Medication errors from missing context.",
        bodyPart1:
          "Allergies, interactions and contraindications live in different systems. At the bedside, nursing decides with",
        bodyEmphasis: "fragments of the full picture",
        bodyPart2: "— and every miss has real consequences.",
        tag: "tag · medication · BCMA · hypersensitivity",
      },
      coding: {
        title: "Manual coding: expensive, slow, unstable.",
        body: "ICD coding and clinical documentation are still done by eye — producing billing delays, avoidable denials and hours lost to audit work that never returns to the patient.",
        tag: "tag · icd · audit · billing · denials",
      },
      triage: {
        title: "Triage hostage to broken call centers.",
        bodyPart1:
          "Clinical priority is decided in noisy rooms, by overworked people, without real-time support. The result is",
        bodyEmphasis: "inconsistent triage",
        bodyPart2:
          "and wait times that punish first the ones who need it most.",
        tag: "tag · manchester · ed · scheduling · voice",
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
      "PHMCare AI plugs into your existing EHR, listens to the voice, reads the records, watches the medication — and returns recommendations with citation, measured latency and an audit trail.",
    body2Line1: "Nothing replaces clinical judgment.",
    body2Line2: "Everything sharpens it.",
    pillars: {
      federated: {
        title: "Federated by design.",
        body: "Data never leaves your perimeter. Models run inside your VPC or on-premise. PHI is never exposed.",
      },
      cited: {
        title: "Cited by default.",
        body: "Every output — alert, code, decision — carries a citation to source: primary literature, local protocol, clinical history. No black box.",
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
    noteLabel: "— Note",
    notePart1:
      "Each of these categories is validated by more than a billion dollars of venture capital. But",
    noteEmphasis: "every hospital is unique",
    notePart2:
      "— by legislation, by workflow, by reality on the ground. PHMCare AI was built precisely for that difference.",
    items: {
      mediguard: {
        codename: "Instrument 01 / MediGuard",
        name: "MediGuard",
        tagline: "Every dose, with the right context.",
        body: "Operates at the moment of administration, scanning the patient's history in real time to alert nursing to allergy, interaction or contraindication risk — before the dose, at bedside verification.",
        bullet1:
          "Allergy and interaction checks in <50ms at the patient's bedside",
        bullet2:
          "Native integration with BCMA, e-prescribing and hospital pharmacy",
        bullet3:
          "Clinically graded alerts — zero-fatigue mode, calibrated per service",
        pill: "Real-time safety",
        specimen: {
          header: "Verification · bedside",
          patient: "Mrs. R. · 67y · MRN 0–8814–73",
          severity: "Severity",
          severityHigh: "High",
          allergyTitle: "Allergy · cephalosporins",
          allergyMeta: "Documented in 2019 · anaphylaxis",
          interactionTitle: "Interaction · warfarin",
          interactionMeta: "Risk of INR elevation",
          sources: "14 verified sources",
          retain: "HOLD DOSE",
        },
      },
      codicare: {
        codename: "Instrument 02 / CodiCare",
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
      medicall: {
        codename: "Instrument 03 / MediCall",
        name: "MediCall",
        tagline: "Every call, triaged at the door.",
        body: "Intelligent virtual assistant that answers urgent patient calls, collects relevant clinical information and schedules visits automatically — prioritizing cases by clinical severity and hospital availability, with pre-triage built in from the start.",
        bullet1: "Voice pre-triage aligned with the Manchester protocol",
        bullet2:
          "Scheduling by clinical priority and real-time availability",
        bullet3:
          "24/7 in Portuguese, English and Spanish — natural voice, conversational latency",
        pill: "Voice · clinical triage",
        specimen: {
          header: "MediCall · in progress",
          transcriptLabel: "Transcript · PT-PT",
          transcriptPart1: "I've had",
          transcriptHighlight1: "chest pain",
          transcriptPart2: "since this morning, I'm 67 and I felt",
          transcriptHighlight2: "shortness of breath",
          transcriptPart3: "…",
          priorityLabel: "Priority · Manchester",
          priorityValue: "ORANGE · VERY URGENT",
          scheduledLabel: "Scheduled",
          scheduledWhen: "Today · ",
          scheduledTime: "14:20",
          serviceLabel: "Service",
          serviceValue: "ED · Cardiology",
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
        title: "Valuation in clinical documentation alone.",
        bodyPart1:
          "Companies like Abridge cross five billion in valuation. And that is only",
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
        title: "Clinical documentation",
        body: "Capture the physician's voice and generate the clinical note.",
      },
      voice: {
        label: "— Category 02",
        title: "Clinical voice AI",
        body: "Converse, transcribe, schedule. Outside the EHR or via adapter.",
      },
      systems: {
        label: "— Category 03",
        title: "Clinical systems",
        body: "EHRs and hospital platforms. Deep, slow to evolve.",
      },
    },
    msftSuffix: "part of MSFT",
    punchlinePre: "They operate in silos.",
    punchlineEmphasis: "PHMCare AI is the layer that crosses them.",
  },

  model: {
    eyebrow: "The Model",
    titleLine1: "SaaS per hospital,",
    titleLine2: "usage for the voice.",
    items: {
      saas: {
        title: "Clinical SaaS",
        body: "Per hospital, per bed or per healthcare professional. Pricing aligned with internal structure.",
      },
      consumption: {
        title: "Usage · MediCall",
        body: "Priced per call-minute and per completed triage. Scales with volume, no artificial ceiling.",
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
      "Medication safety · automatic coding · voice triage.",
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
    body: "A 30-minute demo on your real workflows. No slideware. We connect to a sandbox of your data, show MediGuard, CodiCare and MediCall in action, and leave a written report.",
    emailLabel: "Clinical or executive email",
    emailPlaceholder: "dr.lastname@hospital.org",
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
    body: "The AI operating system for hospitals. <em>MediGuard</em>, <em>CodiCare</em> and <em>MediCall</em> in a single layer of clinical intelligence — written with the same care it asks of the people who care.",
    bodyPart1: "The AI operating system for hospitals.",
    bodyProducts: "MediGuard, CodiCare and MediCall",
    bodyPart2:
      "in a single layer of clinical intelligence — written with the same care it asks of the people who care.",
    newsletter: {
      label: "— Newsletter · The Clinical Lancet",
      body: "A monthly issue on machine reasoning applied to hospitals. No noise, no hype — only what changed.",
      placeholder: "your-email@hospital.com",
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
      mediguard:
        "Abstract minimalist composition: a single thin clay-red line crossing a vast bone field, with one dramatic spike — like an EKG of an anomaly. Generous negative space. Editorial fine-art. Suggests a sign of consequence in a field of stillness. 4K.",
      codicare:
        "Top-down photograph: paper chart with highlighted keywords (thin clay underline), beside a brass ruler and small index cards with printed codes. Editorial product photography, sage and clay. 4K.",
      medicall:
        "Close-up of an audio waveform rendered in ink on linen — like a preserved recording. Ample negative space, one clay line marking the priority point. Museum-print aesthetic. 4K.",
      model:
        "Architectural diagram: hospital workflow drawn as blueprint lines on warm cream paper, brass dividing tools resting beside. Editorial top-down. No clutter. 4K.",
      cta: "Wide editorial photograph: hospital atrium with tall arched windows, a single white-coated figure walking with confidence toward the light. Dawn lighting, cream walls, terracotta accents on the floor. Contemplative, aspirational, no sci-fi. 4K.",
    },
    imageSection: {
      hero: "§ Hero",
      trust: "§ Trust",
      problem: "§ Problem",
      mediguard: "§ MediGuard",
      codicare: "§ CodiCare",
      medicall: "§ MediCall",
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
      "We're hiring across clinical engineering, calibration and hospital operations. Direct intro letters: pedro@anvel.pt.",
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
