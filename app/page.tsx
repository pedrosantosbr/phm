"use client";

import { useEffect, FormEvent } from "react";

/* ──────────────────────────────────────────────────────────────────────────
   Praxia — landing page
   Sister brand to the Vellum specimen at /index.html.
   Same Clinical Editorial system, calibrated for the Portuguese-speaking market
   and the three products: MediGuard · CodiCare · MediCall.
   ────────────────────────────────────────────────────────────────────────── */

const HOSPITAIS = [
  "Hospital São Bartolomeu",
  "Centro Clínico Tejo Sul",
  "Vitalis Health Group",
  "Belmar Saúde",
  "Caldera Hospital Group",
  "Mercator Health",
];

type Validation = { name: string; valuation: string };

const PRODUCTS: {
  index: string;
  codename: string;
  name: string;
  tagline: string;
  body: string;
  bullets: string[];
  pill: string;
  validation: Validation[];
}[] = [
  {
    index: "01",
    codename: "Instrumento 01 / MediGuard",
    name: "MediGuard",
    tagline: "Cada dose, com o contexto certo.",
    body: "Atua na administração de medicamentos, analisando o histórico do paciente em tempo real para alertar a equipa de enfermagem sobre possíveis riscos de alergia, interação ou contraindicação — antes da aplicação, no momento da verificação à beira do leito.",
    bullets: [
      "Verificação de alergias e interações em <50ms à cabeceira do doente",
      "Integração nativa com BCMA, prescrição electrónica e farmácia hospitalar",
      "Alertas com gradação clínica — modo zero-fadiga, calibrado por serviço",
    ],
    pill: "Segurança em tempo real",
    validation: [
      { name: "Epic Systems", valuation: "$60–80B" },
      { name: "Oracle Health (Cerner)", valuation: "$250B+" },
      { name: "MedAware", valuation: "$500–700M" },
    ],
  },
  {
    index: "02",
    codename: "Instrumento 02 / CodiCare",
    name: "CodiCare",
    tagline: "Cada prontuário, codificado e auditado — automaticamente.",
    body: "Automatiza a análise de prontuários médicos com IA e OCR clínico, sugerindo e validando códigos CID com citação directa do excerto fonte. Reduz drasticamente o tempo e o custo dos processos de auditoria, faturamento e relatório regulatório.",
    bullets: [
      "Sugestão de CID-10 / CID-11 com citação do excerto fonte e nível de confiança",
      "OCR clínico treinado em prontuários manuscritos PT/BR e formulários hospitalares",
      "Auditoria automática contra protocolos do hospital e regras do pagador",
    ],
    pill: "Codificação · auditoria",
    validation: [
      { name: "3M Health Info Systems", valuation: "$400B" },
      { name: "Optum", valuation: "$400B" },
      { name: "Abridge", valuation: "$1–2B" },
      { name: "Ambience Healthcare", valuation: "$1–2B" },
      { name: "Fathom", valuation: "$400–800M" },
    ],
  },
  {
    index: "03",
    codename: "Instrumento 03 / MediCall",
    name: "MediCall",
    tagline: "Cada chamada, triada à entrada.",
    body: "Assistente virtual inteligente que atende chamadas de pacientes em urgência, recolhe informação clínica relevante e agenda atendimentos automaticamente — priorizando casos pela gravidade clínica e pela disponibilidade hospitalar, com pré-triagem incluída de raiz.",
    bullets: [
      "Pré-triagem por voz alinhada com o protocolo de Manchester",
      "Agendamento com prioridade clínica e disponibilidade em tempo real",
      "24/7 em Português, Inglês e Espanhol — voz natural, latência conversacional",
    ],
    pill: "Voz · triagem clínica",
    validation: [
      { name: "Suki AI", valuation: "$500–700M" },
      { name: "sully.ai", valuation: "$1B" },
      { name: "K Health", valuation: "$900M–1.5B" },
      { name: "Steer Health", valuation: "$300–600M" },
      { name: "Assort Health", valuation: "$200–500M" },
    ],
  },
];

export default function Page() {
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
    alert(
      "Pedido recebido. Um responsável clínico entrará em contacto nas próximas 24 horas.",
    );
  }

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          MASTHEAD — journal-style metadata
          ════════════════════════════════════════════════════════════════════ */}
      <div className="hairline border-b">
        <div className="container-page flex items-center justify-between py-2 label text-ink-mute">
          <span>Vol. I · Edição 01 · Abril 2026</span>
          <span className="hidden md:inline">
            Construída com clínicos, para clínicos.
          </span>
          <span className="flex items-center gap-2">
            <span className="num">99.97%</span> uptime
            <span className="inline-block w-px h-3 bg-line mx-1" />
            <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-clay" />
            Operacional
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          NAV
          ════════════════════════════════════════════════════════════════════ */}
      <header className="container-page py-7 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-2">
          <span className="display text-3xl">Praxia</span>
          <span className="label text-ink-mute hidden sm:inline">
            — Health
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 text-[15px] text-ink-soft">
          <a href="#produtos" className="ulink">
            Produtos
          </a>
          <a href="#mercado" className="ulink">
            Mercado
          </a>
          <a href="#vantagem" className="ulink">
            Vantagem
          </a>
          <a href="#colofao" className="ulink">
            Colofão
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:inline-block text-[15px] text-ink-soft ulink"
          >
            Iniciar sessão
          </a>
          <a href="#cta" className="btn-primary text-[14px] py-3 px-5">
            Pedir demo
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
        </div>
      </header>

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
              <span>O sistema operativo de IA para hospitais</span>
              <span className="bar" />
              <span className="hidden md:inline">
                Filed under: medicina · raciocínio máquina · fluxo
              </span>
            </div>

            <h1 className="display mt-8 text-[clamp(48px,7.5vw,108px)]">
              Inteligência clínica,
              <br />
              <span className="display-italic">à velocidade do hospital.</span>
            </h1>

            <p className="mt-8 text-[20px] leading-[1.55] text-ink-soft max-w-[58ch]">
              A Praxia liga medicação, voz e prontuários numa única camada de
              inteligência clínica — reduzindo erros, custos administrativos e
              tempos de espera. Sem substituir o critério de quem cuida.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#cta" className="btn-primary">
                Pedir demonstração
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
                Ler o pitch
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
                <span className="w-1.5 h-1.5 rounded-full bg-sage" /> Go-live em
                14 dias
              </span>
            </div>
          </div>

          {/* Right: hero specimen — MediGuard live alert */}
          <aside className="col-span-12 lg:col-span-5 lg:pl-8 reveal">
            <div className="relative">
              <div className="absolute -top-3 -left-3 label text-ink-mute hidden lg:block">
                Specimen 01 / MediGuard
              </div>

              <div className="border hairline-strong rounded-sm bg-bone-light/80 backdrop-blur-sm p-6 md:p-7 shadow-[0_30px_80px_-40px_rgba(20,24,31,0.35)]">
                {/* header */}
                <div className="flex items-center justify-between pb-4 border-b hairline">
                  <div className="flex items-center gap-2">
                    <span className="pulse-dot w-2 h-2 rounded-full bg-clay" />
                    <span className="label">MediGuard · Pré-administração</span>
                  </div>
                  <span className="num text-xs text-ink-mute">
                    00:38s · Enf.ª 4-B
                  </span>
                </div>

                {/* patient + drug */}
                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <div className="label text-ink-mute mb-1">
                      Doente · MRN 0–8814–73
                    </div>
                    <div className="display text-[24px]">Sra. R. — 67 anos</div>
                  </div>
                  <div className="text-right">
                    <div className="label text-ink-mute mb-1">Severidade</div>
                    <div className="num text-[26px] text-clay-deep tracking-tight">
                      Alta
                    </div>
                  </div>
                </div>

                {/* drug card */}
                <div className="mt-5 rounded-sm bg-bone-dark/50 p-4 border hairline">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="label text-ink-mute">Prescrição</div>
                      <div className="display text-[28px] mt-1">
                        Cefepime 2g IV
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
                        Alergia: <span className="font-medium">cefalosporinas</span>{" "}
                        · 2019
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="num text-clay">↳</span>
                      <span>
                        Interação: <span className="font-medium">varfarina</span>{" "}
                        · INR ↑
                      </span>
                    </div>
                  </div>
                </div>

                {/* recommendation */}
                <div className="mt-5 border-l-2 border-clay pl-4">
                  <div className="label text-clay-deep mb-1.5">
                    Recomendação · evidência: A
                  </div>
                  <p className="text-[15px] leading-snug text-ink-soft">
                    Reter dose. Considerar{" "}
                    <span className="font-medium text-ink">aztreonam</span> como
                    alternativa em doente com hipersensibilidade documentada a
                    β-lactâmicos.
                  </p>
                  <div className="mt-3 marginalia">
                    Fonte: IDSA 2024 · Protocolo local v3.2 · Histórico clínico
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-[12px] rounded-full bg-ink text-bone-light">
                      Reter dose
                    </button>
                    <button className="px-3 py-1.5 text-[12px] rounded-full border hairline-strong text-ink-soft">
                      Justificar e administrar
                    </button>
                  </div>
                  <span className="num text-[11px] text-ink-mute">
                    latência 38ms
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
                <span>
                  Specimen ao vivo — toda recomendação inclui citação,
                  latência medida e trilho de auditoria. Nada substitui o
                  critério clínico; tudo o afia.
                </span>
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
              <div className="label text-ink-mute mb-3">— Construído com</div>
              <p className="display text-[28px] md:text-[34px] leading-[1.05] text-ink">
                Hospitais que servem mais de
                <br />
                <span className="display-italic text-clay-deep">
                  14 milhões
                </span>{" "}
                de atendimentos anuais.
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
                Produtos · uma camada
              </div>
            </div>
            <div>
              <div className="num display text-[44px] text-ink leading-none">
                14<span className="text-clay text-[26px] align-top">d</span>
              </div>
              <div className="label text-ink-mute mt-2">
                Do contrato à primeira recomendação
              </div>
            </div>
            <div>
              <div className="num display text-[44px] text-ink leading-none">
                99.97<span className="text-clay text-[26px] align-top">%</span>
              </div>
              <div className="label text-ink-mute mt-2">
                Disponibilidade · 24m
              </div>
            </div>
            <div>
              <div className="num display text-[44px] text-ink leading-none">
                38<span className="text-clay text-[26px] align-top">ms</span>
              </div>
              <div className="label text-ink-mute mt-2">
                Latência mediana de decisão
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
              <span>O Problema</span>
              <span className="bar" />
            </div>

            <h2 className="display mt-8 text-[clamp(40px,5.5vw,72px)]">
              Hospitais com sistemas
              <br />
              fragmentados.
              <br />
              <span className="display-italic">As pessoas pagam a conta.</span>
            </h2>

            <p className="dropcap mt-10 text-[17px] leading-[1.7] text-ink-soft max-w-[42ch]">
              Cada hospital é uma constelação de sistemas que não se falam.
              Os profissionais são a cola — e estão a partir. Os doentes
              esperam. Os custos administrativos crescem. O risco evitável
              passa por baixo do radar.
            </p>

            <div className="marginalia mt-8 max-w-[40ch]">
              — Fonte: benchmark interno Praxia 2025, n=1.4M episódios
              clínicos, 22 instituições EU/BR.
            </div>
          </div>

          <ol className="col-span-12 lg:col-span-7 lg:pl-12 space-y-0 lg:border-l hairline">
            <li className="grid grid-cols-12 gap-6 py-10 border-b hairline">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                i.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  Erros de medicação por falta de contexto.
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  Alergias, interações e contraindicações estão registadas em
                  sítios diferentes. À cabeceira do doente, a enfermagem decide
                  com{" "}
                  <span className="text-ink font-medium">
                    fragmentos do quadro completo
                  </span>{" "}
                  — e cada falha tem consequências reais.
                </p>
                <div className="marginalia mt-4">
                  tag · medicação · BCMA · hipersensibilidade
                </div>
              </div>
            </li>

            <li className="grid grid-cols-12 gap-6 py-10 border-b hairline">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                ii.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  Codificação manual: cara, lenta, instável.
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  A codificação CID e a documentação clínica continuam a ser
                  feitas a olho — produzindo atrasos no faturamento, glosas
                  evitáveis e horas perdidas em auditoria que não devolve nada
                  ao doente.
                </p>
                <div className="marginalia mt-4">
                  tag · cid · auditoria · faturamento · glosas
                </div>
              </div>
            </li>

            <li className="grid grid-cols-12 gap-6 py-10 border-b hairline">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                iii.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  Triagem dependente de call centers em rotura.
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  As decisões de prioridade clínica são tomadas em ambientes
                  ruidosos, por pessoas sobrecarregadas, sem suporte em tempo
                  real. O resultado é{" "}
                  <span className="text-ink font-medium">
                    triagem inconsistente
                  </span>{" "}
                  e tempo de espera que castiga primeiro quem mais precisa.
                </p>
                <div className="marginalia mt-4">
                  tag · manchester · urgência · agendamento · voz
                </div>
              </div>
            </li>

            <li className="grid grid-cols-12 gap-6 py-10">
              <div className="col-span-2 num text-clay text-[18px] pt-2">
                iv.
              </div>
              <div className="col-span-10">
                <h3 className="display text-[28px] md:text-[34px]">
                  Profissionais à beira da exaustão.
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft max-w-[62ch]">
                  Médicos e enfermeiros passam até{" "}
                  <span className="text-ink font-medium">49% do tempo</span> em
                  documentação e revisão de prontuários. O sinal vive no
                  presente — o sistema só descreve o passado.
                </p>
                <div className="marginalia mt-4">
                  tag · burnout · documentação · cognitiva
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
                <span>A Plataforma</span>
                <span
                  className="bar"
                  style={{ background: "rgba(244,239,230,0.2)" }}
                />
              </div>

              <h2
                className="display mt-8 text-[clamp(40px,6vw,80px)]"
                style={{ color: "#FAF7F1" }}
              >
                Uma camada horizontal.
                <br />
                Três instrumentos.
                <br />
                <span className="display-italic" style={{ color: "#E8B5A6" }}>
                  Um único registo.
                </span>
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:pt-16">
              <p
                className="text-[18px] leading-[1.65]"
                style={{ color: "rgba(244,239,230,0.78)" }}
              >
                A Praxia integra-se ao seu EHR existente, escuta a voz, lê os
                prontuários, vigia a medicação — e devolve recomendações com
                citação, latência medida e trilho de auditoria.
              </p>
              <p
                className="mt-5 text-[18px] leading-[1.65]"
                style={{ color: "rgba(244,239,230,0.78)" }}
              >
                Nada substitui o critério clínico.
                <br />
                <span className="display-italic" style={{ color: "#E8B5A6" }}>
                  Tudo o afia.
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
                title: "Federada por design.",
                body: "Os dados nunca saem do seu perímetro. Os modelos correm dentro do seu VPC ou on-premise. PHI nunca é exposto.",
              },
              {
                num: "02",
                title: "Citada por padrão.",
                body: "Cada saída — alerta, código, decisão — traz citação à fonte: literatura primária, protocolo local, histórico clínico. Sem caixa preta.",
              },
              {
                num: "03",
                title: "Calibrada à sua realidade.",
                body: "Protocolos, formulário, regras do pagador e legislação local. PT, BR e EU. Calibração feita com a sua equipa clínica.",
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
          <span>Os Instrumentos — três produtos, um único registo.</span>
          <span className="bar" />
          <span className="hidden md:inline">
            Independentes · interligados · audit-ready
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <h2 className="display col-span-12 lg:col-span-9 text-[clamp(40px,6vw,84px)]">
            Construídos por clínicos,
            <br />
            <span className="display-italic">indexados pela evidência.</span>
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:pt-6 text-[15px] leading-[1.65] text-ink-soft">
            Cada instrumento é independente, interligável, e integra com o EHR
            via HL7 v2, FHIR R4 e SMART-on-FHIR. Comece por um. Acrescente os
            outros à medida que a equipa cresce de confiança.
          </p>
        </div>

        {/* Product 01 — MediGuard */}
        <article className="specimen mt-16 border hairline-strong rounded-sm p-8 md:p-10 bg-bone-light grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="label text-ink-mute">{PRODUCTS[0].codename}</span>
              <span className="pill">
                <span className="dot" />
                {PRODUCTS[0].pill}
              </span>
            </div>
            <h3 className="display mt-5 text-[clamp(36px,4vw,56px)]">
              {PRODUCTS[0].name}
            </h3>
            <p className="display-italic text-clay-deep text-[20px] mt-2">
              {PRODUCTS[0].tagline}
            </p>

            <p className="mt-6 text-[16px] leading-[1.65] text-ink-soft max-w-[58ch]">
              {PRODUCTS[0].body}
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-ink-soft">
              {PRODUCTS[0].bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="num text-clay mt-1">›</span> {b}
                </li>
              ))}
            </ul>

            <ValidationStrip items={PRODUCTS[0].validation} />
          </div>

          {/* MediGuard specimen visual */}
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-sm bg-bone-dark/60 border hairline p-5 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <span className="label text-ink-mute">
                  Verificação · à cabeceira
                </span>
                <span className="num text-[11px] text-ink-mute">+38ms</span>
              </div>

              <div className="my-5">
                <div className="display text-[32px] leading-none">
                  Cefepime <span className="display-italic">2g IV</span>
                </div>
                <div className="label text-ink-mute mt-1">
                  Sra. R. · 67a · MRN 0–8814–73
                </div>
              </div>

              {/* severity bar */}
              <div className="mt-2">
                <div className="flex items-center justify-between label text-ink-mute mb-1.5">
                  <span>Severidade</span>
                  <span className="text-clay-deep">Alta</span>
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
                    <div className="font-medium">Alergia · cefalosporinas</div>
                    <div className="text-ink-mute marginalia mt-1">
                      Documentada em 2019 · anafilaxia
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
                    <div className="font-medium">Interação · varfarina</div>
                    <div className="text-ink-mute marginalia mt-1">
                      Risco de elevação do INR
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-5 flex items-center justify-between border-t hairline">
                <span className="num text-[11px] text-ink-mute">
                  14 fontes verificadas
                </span>
                <span className="num text-[11px] text-clay-deep">
                  RETER DOSE
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
                  Prontuário · processado
                </span>
                <span className="num text-[11px] text-ink-mute">
                  alta · 12.04
                </span>
              </div>

              {/* document mock */}
              <div className="bg-bone-light border hairline rounded-sm p-4 text-[13px] leading-[1.55] text-ink-soft">
                <div className="text-ink-mute marginalia mb-2">
                  EVOLUÇÃO · 12.04.2026 · 14:22
                </div>
                <p>
                  Doente refere{" "}
                  <span
                    className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5"
                    title="extracted"
                  >
                    dor torácica
                  </span>{" "}
                  com início súbito, irradiação para o membro superior esquerdo,
                  associada a{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    dispneia em esforço
                  </span>
                  . Ausculta cardíaca rítmica, sem sopros. ECG mostra{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    elevação de ST
                  </span>{" "}
                  em parede inferior.
                </p>
              </div>

              {/* extracted codes */}
              <div className="mt-5 space-y-2.5">
                <CodeChip
                  code="I21.1"
                  label="Enfarte agudo do miocárdio · parede inferior"
                  confidence={0.96}
                />
                <CodeChip
                  code="R07.4"
                  label="Dor torácica não especificada"
                  confidence={0.88}
                />
                <CodeChip
                  code="R06.0"
                  label="Dispneia"
                  confidence={0.82}
                />
              </div>

              <div className="mt-5 pt-4 border-t hairline grid grid-cols-2 gap-2 text-[12px] text-ink-mute">
                <span>12 excertos analisados</span>
                <span className="text-right">3 códigos sugeridos</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 order-1 md:order-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="label text-ink-mute">{PRODUCTS[1].codename}</span>
              <span className="pill">
                <span className="dot" />
                {PRODUCTS[1].pill}
              </span>
            </div>
            <h3 className="display mt-5 text-[clamp(36px,4vw,56px)]">
              {PRODUCTS[1].name}
            </h3>
            <p className="display-italic text-clay-deep text-[20px] mt-2">
              {PRODUCTS[1].tagline}
            </p>

            <p className="mt-6 text-[16px] leading-[1.65] text-ink-soft max-w-[58ch]">
              {PRODUCTS[1].body}
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-ink-soft">
              {PRODUCTS[1].bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="num text-clay mt-1">›</span> {b}
                </li>
              ))}
            </ul>

            <ValidationStrip items={PRODUCTS[1].validation} />
          </div>
        </article>

        {/* Product 03 — MediCall */}
        <article className="specimen mt-8 border hairline-strong rounded-sm p-8 md:p-10 bg-bone-light grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="label text-ink-mute">{PRODUCTS[2].codename}</span>
              <span className="pill">
                <span className="dot" />
                {PRODUCTS[2].pill}
              </span>
            </div>
            <h3 className="display mt-5 text-[clamp(36px,4vw,56px)]">
              {PRODUCTS[2].name}
            </h3>
            <p className="display-italic text-clay-deep text-[20px] mt-2">
              {PRODUCTS[2].tagline}
            </p>

            <p className="mt-6 text-[16px] leading-[1.65] text-ink-soft max-w-[58ch]">
              {PRODUCTS[2].body}
            </p>

            <ul className="mt-7 space-y-3 text-[15px] text-ink-soft">
              {PRODUCTS[2].bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="num text-clay mt-1">›</span> {b}
                </li>
              ))}
            </ul>

            <ValidationStrip items={PRODUCTS[2].validation} />
          </div>

          {/* MediCall specimen */}
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-sm bg-bone-dark/60 border hairline p-5 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <span className="label text-ink-mute flex items-center gap-2">
                  <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-clay" />
                  MediCall · em curso
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
                  Transcrito · PT-PT
                </div>
                <p className="text-[14px] leading-[1.5] text-ink-soft">
                  &ldquo;Estou com{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    dor no peito
                  </span>{" "}
                  desde a manhã, tenho 67 anos e já senti{" "}
                  <span className="bg-clay-light/50 underline decoration-clay decoration-[1.5px] underline-offset-2 px-0.5">
                    falta de ar
                  </span>
                  …&rdquo;
                </p>
              </div>

              {/* priority bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between label text-ink-mute mb-2">
                  <span>Prioridade · Manchester</span>
                  <span className="text-clay-deep">LARANJA · MUITO URGENTE</span>
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
                  <div className="label text-ink-mute">Agendado</div>
                  <div className="display text-[20px]">
                    Hoje · <span className="display-italic">14:20</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="label text-ink-mute">Serviço</div>
                  <div className="num text-[13px] text-ink">
                    Urgência · Cardiologia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Note about uniqueness */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="label text-clay">— Nota</div>
          </div>
          <p className="col-span-12 md:col-span-9 text-[15px] leading-[1.65] text-ink-soft max-w-[64ch]">
            Cada uma destas categorias está validada por mais de mil milhões
            de dólares de capital de risco. Mas{" "}
            <span className="text-ink font-medium">
              cada hospital é único
            </span>{" "}
            — pela legislação, pelo fluxo, pela realidade do terreno. A Praxia
            foi construída precisamente para essa diferença.
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
            <span>O Mercado</span>
            <span className="bar" />
          </div>

          <div className="grid grid-cols-12 gap-8 mt-8">
            <h2 className="display col-span-12 lg:col-span-9 text-[clamp(40px,5.5vw,72px)]">
              Mais de{" "}
              <span className="display-italic text-clay-deep">
                4 biliões
              </span>{" "}
              de dólares em ineficiência hospitalar — à espera de uma camada
              que pense.
            </h2>
            <p className="col-span-12 lg:col-span-3 lg:pt-8 text-[15px] leading-[1.65] text-ink-soft">
              A IA clínica está a tornar-se infraestrutura. Quem chegar
              primeiro à camada certa fica.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border hairline">
            <div className="bg-bone-light p-8">
              <div className="num text-[12px] text-clay">— 01</div>
              <div className="num display text-[clamp(48px,6vw,72px)] mt-3 leading-none">
                $4B<span className="text-clay text-[28px] align-top">+</span>
              </div>
              <h3 className="display text-[20px] mt-4">
                Ineficiências hospitalares globais.
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                Custo anual desperdiçado em fragmentação de sistemas, fluxos
                manuais e erros evitáveis. Endereço directo da Praxia.
              </p>
            </div>

            <div className="bg-bone-light p-8">
              <div className="num text-[12px] text-clay">— 02</div>
              <div className="num display text-[clamp(48px,6vw,72px)] mt-3 leading-none">
                $5B<span className="text-clay text-[28px] align-top">+</span>
              </div>
              <h3 className="display text-[20px] mt-4">
                Avaliação só em documentação clínica.
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                Empresas como Abridge ultrapassam os 5 mil milhões em avaliação.
                E é apenas <span className="display-italic">um</span> dos três
                eixos onde a Praxia opera.
              </p>
            </div>

            <div className="bg-bone-light p-8">
              <div className="num text-[12px] text-clay">— 03</div>
              <div className="num display text-[clamp(48px,6vw,72px)] mt-3 leading-none">
                ∞
              </div>
              <h3 className="display text-[20px] mt-4">
                Infraestrutura essencial.
              </h3>
              <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                Em cinco anos, a IA clínica deixará de ser um diferenciador
                opcional para passar a ser tão obrigatória como o EHR. Quem
                não tiver, não opera.
              </p>
            </div>
          </div>

          <div className="marginalia mt-10 max-w-[64ch]">
            — Fontes: McKinsey Global Institute (Healthcare AI 2024), CB
            Insights, dados públicos das rondas de investimento dos competidores
            listados em IV. Reproduzidos para efeito de validação de categoria.
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          VI — DIFFERENTIATION / COMPETITION
          ════════════════════════════════════════════════════════════════════ */}
      <section id="vantagem" className="container-page py-28 lg:py-36">
        <div className="eyebrow label">
          <span className="sec-num text-[28px] leading-none">VI</span>
          <span>A Vantagem</span>
          <span className="bar" />
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <h2 className="display col-span-12 lg:col-span-8 text-[clamp(40px,5.5vw,72px)]">
            Não competimos numa categoria.
            <br />
            <span className="display-italic">
              Competimos em três — e ligamos as três.
            </span>
          </h2>
          <p className="col-span-12 lg:col-span-4 lg:pt-8 text-[15px] leading-[1.65] text-ink-soft">
            Cada categoria tem os seus titulares — gigantes ou unicórnios. Mas
            todos operam em silos. A vantagem da Praxia é a camada que os
            atravessa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-px bg-line border hairline">
          <div className="bg-bone p-8">
            <div className="label text-clay">— Categoria 01</div>
            <h3 className="display mt-3 text-[26px]">
              Documentação clínica
            </h3>
            <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
              Capturam a voz do médico e geram nota clínica.
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
            <div className="label text-clay">— Categoria 02</div>
            <h3 className="display mt-3 text-[26px]">IA de voz clínica</h3>
            <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
              Conversam, transcrevem, agendam. Fora do EHR ou em adapter.
            </p>
            <ul className="mt-5 space-y-2 text-[13px] text-ink-soft">
              <li className="flex justify-between border-b hairline pb-2">
                <span>Nuance (Microsoft)</span>
                <span className="num text-ink-mute">parte de MSFT</span>
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
            <div className="label text-clay">— Categoria 03</div>
            <h3 className="display mt-3 text-[26px]">Sistemas clínicos</h3>
            <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
              EHRs e plataformas hospitalares. Profundas, lentas a evoluir.
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
            Eles operam em silos.{" "}
            <span className="display-italic">
              A Praxia é a camada que os atravessa.
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
                <span>O Modelo</span>
                <span className="bar" />
              </div>

              <h2 className="display mt-8 text-[clamp(36px,4.5vw,60px)]">
                SaaS por hospital,
                <br />
                <span className="display-italic">utilização para a voz.</span>
              </h2>

              <ul className="mt-10 space-y-6">
                <li className="grid grid-cols-12 gap-4 border-b hairline pb-6">
                  <div className="col-span-2 num text-clay">01</div>
                  <div className="col-span-10">
                    <h3 className="display text-[22px]">SaaS clínico</h3>
                    <p className="text-[14px] leading-[1.65] text-ink-soft mt-2">
                      Por hospital, por cama ou por profissional de saúde.
                      Modelos de preço alinhados com a estrutura interna.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-12 gap-4 border-b hairline pb-6">
                  <div className="col-span-2 num text-clay">02</div>
                  <div className="col-span-10">
                    <h3 className="display text-[22px]">
                      Consumo · MediCall
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-ink-soft mt-2">
                      Preço por minuto de chamada e por triagem completada.
                      Escala com o volume, sem teto artificial.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 num text-clay">03</div>
                  <div className="col-span-10">
                    <h3 className="display text-[22px]">
                      Contratos enterprise
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-ink-soft mt-2">
                      Integração com EHRs (Epic, Oracle Health, Meditech,
                      Allscripts), SLAs definidos, BAA na assinatura.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visão */}
            <div className="col-span-12 lg:col-span-6 lg:pl-12">
              <div className="eyebrow label">
                <span className="sec-num text-[28px] leading-none">≈</span>
                <span>A Visão</span>
                <span className="bar" />
              </div>

              <h2 className="display mt-8 text-[clamp(36px,4.5vw,60px)]">
                Começamos com 3.
                <br />
                <span className="display-italic">
                  Construímos para 1.
                </span>
              </h2>

              <p className="mt-8 text-[16px] leading-[1.7] text-ink-soft max-w-[44ch]">
                Três produtos hoje. Uma camada amanhã. Um sistema operativo
                hospitalar nativo de IA — coordenando decisão clínica, operação
                e fluxo de pacientes em tempo real.
              </p>

              <div className="mt-10 grid grid-cols-12 gap-y-5">
                <div className="col-span-3 label text-clay">Hoje</div>
                <div className="col-span-9 text-[15px] leading-[1.6] text-ink-soft border-b hairline pb-5">
                  Segurança da medicação · codificação automática · triagem por
                  voz.
                </div>

                <div className="col-span-3 label text-clay">Próximo</div>
                <div className="col-span-9 text-[15px] leading-[1.6] text-ink-soft border-b hairline pb-5">
                  Pathways clínicos automatizados · monitorização remota ·
                  formulário inteligente · gestão do fluxo de pacientes.
                </div>

                <div className="col-span-3 label text-clay">Visão</div>
                <div className="col-span-9 text-[15px] leading-[1.6] text-ink">
                  Sistema operativo hospitalar nativo de IA — uma única camada
                  que coordena{" "}
                  <span className="display-italic text-clay-deep">
                    decisão, operação e fluxo
                  </span>{" "}
                  em tempo real.
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
            <span>Falar com a equipa</span>
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
                Vamos colocar
                <br />
                a Praxia
                <br />
                <span className="display-italic" style={{ color: "#E8B5A6" }}>
                  no seu hospital.
                </span>
              </h2>
              <p
                className="mt-8 text-[18px] leading-[1.6] max-w-[52ch]"
                style={{ color: "rgba(244,239,230,0.78)" }}
              >
                Uma demonstração de 30 minutos sobre os seus fluxos reais. Sem
                slideware. Conectamos a um sandbox dos seus dados, mostramos
                MediGuard, CodiCare e MediCall em acção, e deixamos um relatório
                escrito.
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
                Email clínico ou executivo
              </label>
              <input
                className="vinput"
                style={{
                  color: "#FAF7F1",
                  borderColor: "rgba(244,239,230,0.35)",
                }}
                type="email"
                required
                placeholder="dr.apelido@hospital.org"
              />

              <label
                className="label block mt-7 mb-2"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                Hospital · serviço
              </label>
              <input
                className="vinput"
                style={{
                  color: "#FAF7F1",
                  borderColor: "rgba(244,239,230,0.35)",
                }}
                type="text"
                required
                placeholder="Hospital São Bartolomeu, Cardiologia"
              />

              <label
                className="label block mt-7 mb-2"
                style={{ color: "rgba(244,239,230,0.6)" }}
              >
                EHR
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
                  Soarian / outros EU
                </option>
                <option style={{ color: "#14181F" }}>Outro</option>
              </select>

              <button
                type="submit"
                className="mt-10 btn-primary"
                style={{ background: "#E8B5A6", color: "#14181F" }}
              >
                Pedir demonstração
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
                Resposta em 24h · BAA na assinatura · sem PHI necessário para
                a demo
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
                Do contrato à primeira recomendação
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
                PHI sai do seu perímetro
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
                Override clínico — quem cuida tem sempre a última palavra
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════════════════════ */}
      <footer className="bg-bone">
        <div className="container-page py-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="display text-[44px] leading-none">Praxia</div>
              <p className="mt-5 text-[15px] leading-[1.65] text-ink-soft max-w-[44ch]">
                A Praxia é o sistema operativo de IA para hospitais. Construído
                por clínicos, engenheiros e investigadores de raciocínio
                máquina que acreditam que a saúde merece software escrito com o
                mesmo cuidado que pede às suas pessoas.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
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

            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="label text-ink-mute mb-5">Produtos</div>
              <ul className="space-y-3 text-[15px]">
                <li>
                  <a className="ulink" href="#produtos">
                    MediGuard
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#produtos">
                    CodiCare
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#produtos">
                    MediCall
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Integrações
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Segurança
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="label text-ink-mute mb-5">Recursos</div>
              <ul className="space-y-3 text-[15px]">
                <li>
                  <a className="ulink" href="#">
                    Metodologia
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Validações clínicas
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    White papers
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Imprensa
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Centro de confiança
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="label text-ink-mute mb-5">Empresa</div>
              <ul className="space-y-3 text-[15px]">
                <li>
                  <a className="ulink" href="#">
                    Sobre
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Conselho clínico
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Carreiras — estamos a contratar
                  </a>
                </li>
                <li>
                  <a className="ulink" href="#">
                    Contacto
                  </a>
                </li>
              </ul>
              <div className="mt-7 marginalia">
                Lisboa · Porto · São Paulo
                <br />
                Av. da Liberdade 110, 2.º
              </div>
            </div>
          </div>

          <div className="rule-strong my-12" />

          <div className="flex flex-wrap items-center justify-between gap-6 label text-ink-mute">
            <span>
              © 2026 Praxia Health, S.A. — Construída com cuidado, para quem
              cuida.
            </span>
            <span className="flex items-center gap-5">
              <a className="ulink" href="#">
                Privacidade
              </a>
              <a className="ulink" href="#">
                Termos
              </a>
              <a className="ulink" href="#">
                Aviso de tratamento de dados
              </a>
              <a className="ulink" href="#colofao">
                Colofão
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* ════════════════════════════════════════════════════════════════════
          COLOPHON
          ════════════════════════════════════════════════════════════════════ */}
      <section
        id="colofao"
        className="bg-bone-dark/40 border-t hairline-strong"
      >
        <div className="container-page py-24">
          <div className="eyebrow label">
            <span className="sec-num text-[28px] leading-none">¶</span>
            <span>Colofão — sobre esta edição</span>
            <span className="bar" />
            <span className="hidden md:inline">Edição 01 · Abril 2026</span>
          </div>

          <h2 className="display mt-8 text-[clamp(36px,5vw,64px)] max-w-[24ch]">
            Um specimen do sistema{" "}
            <span className="display-italic">Praxia.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-ink-soft max-w-[60ch]">
            Esta página partilha o sistema visual da{" "}
            <a className="ulink" href="/index.html">
              edição-irmã Vellum
            </a>
            . Mesma autoridade clínica, mesma calorosidade humana — calibrada
            para a realidade hospitalar de PT, BR e UE.
          </p>

          {/* Names */}
          <div className="mt-16">
            <div className="label text-ink-mute mb-6">— Nomes considerados</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border hairline">
              <div className="bg-bone p-8">
                <div className="num text-[12px] text-clay">01 / escolhido</div>
                <h3 className="display text-[44px] mt-2">Praxia</h3>
                <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                  Do grego <em>praxis</em>: prática, acção. A IA da Praxia não
                  observa — actua. Curto, abstracto, fácil de pronunciar em
                  PT/EN/ES.
                </p>
              </div>
              <div className="bg-bone p-8">
                <div className="num text-[12px] text-clay">02 / alternativa</div>
                <h3 className="display text-[44px] mt-2">Auralis</h3>
                <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                  Aura + alis (sufixo latino-médico). Sugere presença clínica
                  silenciosa, sensorial. Mais poético, menos pragmático.
                </p>
              </div>
              <div className="bg-bone p-8">
                <div className="num text-[12px] text-clay">03 / alternativa</div>
                <h3 className="display text-[44px] mt-2">Veridia</h3>
                <p className="text-[14px] leading-[1.65] text-ink-soft mt-3">
                  Verity + clinical. Posiciona-se na verdade verificável da
                  evidência. Mais corporativo, menos memorável.
                </p>
              </div>
            </div>
          </div>

          {/* Palette */}
          <div className="mt-16">
            <div className="label text-ink-mute mb-6">— Paleta</div>
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

          {/* Type */}
          <div className="mt-16">
            <div className="label text-ink-mute mb-6">— Tipografia</div>
            <div className="grid grid-cols-12 gap-px bg-line border hairline">
              <div className="col-span-12 md:col-span-7 bg-bone p-10">
                <span className="num text-[12px] text-clay">
                  Display · Fraunces (variável, opsz)
                </span>
                <div className="display text-[88px] leading-none mt-4">Aa</div>
                <div className="display-italic text-[88px] leading-none mt-2 text-clay-deep">
                  Aa
                </div>
                <p className="text-[13px] leading-[1.65] text-ink-soft mt-6 max-w-[44ch]">
                  Fraunces é uma serif variável com eixos de tamanho óptico e de
                  suavidade — pesada para títulos, itálica para acentos, leve
                  para anotações. Carrega a autoridade de um jornal médico sem o
                  seu frio.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 bg-bone p-10">
                <span className="num text-[12px] text-clay">
                  Corpo · Manrope &nbsp;·&nbsp; Mono · JetBrains Mono
                </span>
                <div
                  className="text-[44px] mt-4 font-body"
                  style={{ fontWeight: 300 }}
                >
                  Aa
                </div>
                <div className="num text-[28px] mt-1">Aa 0123 ↑↓</div>
                <p className="text-[13px] leading-[1.65] text-ink-soft mt-6 max-w-[36ch]">
                  Manrope traz humanismo às proporções geométricas — perfeito
                  para PT acentuado. JetBrains Mono carrega metadata clínica:
                  latências, MRNs, códigos CID.
                </p>
              </div>
            </div>
          </div>

          {/* Image direction */}
          <div className="mt-16">
            <div className="label text-ink-mute mb-6">
              — Direcção de imagem (briefing AI por secção)
            </div>
            <div className="border hairline">
              {[
                {
                  s: "§ Hero",
                  p: "Fotografia editorial de um corredor hospitalar silencioso ao amanhecer. Luz volumétrica suave a entrar pelas janelas. Estação de enfermagem ao fundo com brilho subtil de monitor. Sem pessoas em primeiro plano. Paleta: bone quente, ink charcoal, clay suave. Mamiya 7, 80mm, profundidade reduzida. Editorial arquival. 4K.",
                },
                {
                  s: "§ Trust",
                  p: "Still life em mesa de nogueira: um livro clínico encadernado a couro entreaberto, candeeiro de mesa em latão a criar piscina de luz quente, crachás dispersos, caneta-tinteiro, bata branca. Cream + ink. NEJM-style. 45°, 50mm. 4K.",
                },
                {
                  s: "§ Problem",
                  p: "Macro de uma pilha de prontuários em papel, um deles aberto com notas manuscritas e valores de laboratório. Luz suave de janela à esquerda, sombras longas, dessaturação subtil para tons de osso e tinta. Comunica peso sem alarme. Fotojornalismo, 100mm macro. 4K.",
                },
                {
                  s: "§ MediGuard",
                  p: "Composição abstracta minimalista: uma única linha fina vermelho-clay a atravessar um campo bone vasto, com um pico dramático único — como um EKG de anomalia. Espaço negativo generoso. Editorial fine-art. Sugere um sinal de consequência num campo de quietude. 4K.",
                },
                {
                  s: "§ CodiCare",
                  p: "Fotografia top-down: prontuário em papel com palavras-chave a ressaltar (sublinhado fino clay), ao lado uma régua brass e fichas pequenas com códigos impressos. Editorial product photography, sage e clay. 4K.",
                },
                {
                  s: "§ MediCall",
                  p: "Close-up de uma forma de onda áudio rendered em tinta sobre linho — como uma gravação preservada. Espaço negativo amplo, uma linha clay a marcar o ponto de prioridade. Estética de impressão de museu. 4K.",
                },
                {
                  s: "§ Modelo / Visão",
                  p: "Diagrama arquitectónico: workflow hospitalar desenhado como linhas de blueprint sobre papel cream quente, ferramentas de divisão em latão pousadas ao lado. Top-down editorial. Sem clutter. 4K.",
                },
                {
                  s: "§ Final CTA",
                  p: "Fotografia editorial larga: átrio hospitalar com janelas altas em arco, uma figura solitária de bata branca a caminhar com confiança em direcção à luz. Iluminação de amanhecer, paredes cream, acentos terracotta no chão. Contemplativo, aspiracional, sem sci-fi. 4K.",
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
            <span>
              Composto em Fraunces (display, opsz 9–144) e Manrope (corpo, peso
              variável). Mono em JetBrains Mono. Grelha editorial 12 colunas,
              hairlines a 1px / 12% ink.
            </span>
            <span className="md:text-right">
              Impresso em ecrã. Construído com cuidado · 2026.
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
  return (
    <div className="mt-10 pt-6 border-t hairline">
      <div className="label text-ink-mute mb-4">— Categoria validada por</div>
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
