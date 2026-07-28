const ptPT = {
  masthead: {
    edition: "Vol. I · Edição 01 · Abril 2026",
    tagline: "Construída com clínicos, para clínicos.",
    uptimeStatus: "Operacional",
  },

  nav: {
    brandSuffix: "— Health",
    products: "Produtos",
    market: "Mercado",
    advantage: "Vantagem",
    team: "Equipa",
    login: "Iniciar sessão",
    cta: "Pedir demo",
  },

  language: {
    label: "Idioma",
    pt: "PT",
    en: "EN",
    switchAria: "Mudar idioma",
  },

  hero: {
    eyebrow: "O sistema operativo de IA para hospitais",
    eyebrowMeta: "Filed under: medicina · raciocínio máquina · fluxo",
    titleLine1: "Inteligência clínica,",
    titleLine2: "à velocidade do hospital.",
    body: "A PHMCare AI liga codificação clínica, escalas e gestão de camas numa única camada de inteligência hospitalar — reduzindo custos administrativos, atrasos de faturamento e tempos de espera. Sem substituir o critério de quem cuida.",
    ctaPrimary: "Pedir demonstração",
    ctaGhost: "Ler o pitch",
    complianceGolive: "Go-live em 14 dias",
    specimen: {
      label: "Specimen 01 / CodiCare",
      header: "CodiCare · Codificação clínica",
      meta: "alta · 12.04",
      recordHeader: "EVOLUÇÃO · 12.04.2026 · 14:22",
      recordPart1: "Doente refere",
      recordHighlight1: "dor torácica",
      recordPart2:
        "de início súbito, com irradiação para o membro superior esquerdo, associada a",
      recordHighlight2: "dispneia em esforço",
      recordPart3: ". O ECG mostra",
      recordHighlight3: "elevação de ST",
      recordPart4: "em parede inferior.",
      code1Label: "Enfarte agudo do miocárdio · parede inferior",
      code2Label: "Dor torácica não especificada",
      code3Label: "Dispneia",
      recommendation: "Auditoria · concluída",
      recText: "Três códigos fundamentados — cada um ligado ao excerto de origem.",
      recEmphasis: "Nada inventado, tudo rastreável.",
      source: "Fonte: CID-10 Vol. 2 · Protocolo local v3.2 · Regras do pagador",
      btnAccept: "Aceitar códigos",
      btnReview: "Rever excertos",
      latency: "latência 38ms",
      annotation:
        "Specimen ao vivo — cada código traz citação do excerto, nível de confiança e trilho de auditoria. A IA propõe; o codificador decide.",
    },
  },

  trust: {
    label: "— Construído com",
    headlinePre: "Hospitais que servem mais de",
    headlineEmphasis: "14 milhões",
    headlinePost: "de atendimentos anuais.",
    stats: {
      productsLabel: "Produtos · uma camada",
      goliveLabel: "Do contrato à primeira recomendação",
      uptimeLabel: "Disponibilidade · 24m",
      latencyLabel: "Latência mediana de decisão",
    },
  },

  problem: {
    eyebrow: "O Problema",
    titleLine1: "Hospitais com sistemas",
    titleLine2: "fragmentados.",
    titleLine3: "As pessoas pagam a conta.",
    body: "Cada hospital é uma constelação de sistemas que não se falam. Os profissionais são a cola — e estão a partir. Os doentes esperam. Os custos administrativos crescem. O risco evitável passa por baixo do radar.",
    source:
      "— Fonte: benchmark interno PHMCare AI 2025, n=1.4M episódios clínicos, 22 instituições EU/BR.",
    items: {
      coding: {
        title: "Codificação manual: cara, lenta, instável.",
        body: "A codificação CID e a documentação clínica continuam a ser feitas a olho — produzindo atrasos no faturamento, glosas evitáveis e horas perdidas em auditoria que não devolve nada ao doente.",
        tag: "tag · cid · auditoria · faturamento · glosas",
      },
      rostering: {
        title: "Escalas montadas à mão, turno a turno.",
        bodyPart1:
          "As escalas mensais são montadas em folhas de cálculo, à mão, por quem já está sobrecarregado. O resultado é",
        bodyEmphasis: "cobertura desigual",
        bodyPart2:
          "— noites e fins de semana concentrados nos mesmos, e horas perdidas a refazer tudo quando alguém falta.",
        tag: "tag · escalas · turnos · competências · cobertura",
      },
      beds: {
        title: "Camas bloqueadas e doentes à espera.",
        bodyPart1:
          "A ocupação vive em quadros brancos e telefonemas. Sem estado em tempo real de cada cama, os doentes esperam em macas enquanto camas limpas ficam",
        bodyEmphasis: "invisíveis para quem decide",
        bodyPart2:
          "— e as transferências entre serviços arrastam-se por horas.",
        tag: "tag · camas · ocupação · transferências · fluxo",
      },
      burnout: {
        title: "Profissionais à beira da exaustão.",
        bodyPart1: "Médicos e enfermeiros passam até",
        bodyEmphasis: "49% do tempo",
        bodyPart2:
          "em documentação e revisão de prontuários. O sinal vive no presente — o sistema só descreve o passado.",
        tag: "tag · burnout · documentação · cognitiva",
      },
    },
  },

  platform: {
    eyebrow: "A Plataforma",
    titleLine1: "Uma camada horizontal.",
    titleLine2: "Três instrumentos.",
    titleLine3: "Um único registo.",
    body1:
      "A PHMCare AI integra-se ao seu EHR existente, lê os prontuários, monta as escalas e acompanha cada cama — e devolve recomendações com citação, latência medida e trilho de auditoria.",
    body2Line1: "Nada substitui o critério clínico.",
    body2Line2: "Tudo o afia.",
    pillars: {
      federated: {
        title: "Federada por design.",
        body: "Os dados nunca saem do seu perímetro. Os modelos correm dentro do seu VPC ou on-premise. PHI nunca é exposto.",
      },
      cited: {
        title: "Citada por padrão.",
        body: "Cada saída — código, escala, decisão — traz citação à fonte: catálogo oficial, protocolo local, regras do serviço. Sem caixa preta.",
      },
      calibrated: {
        title: "Calibrada à sua realidade.",
        body: "Protocolos, formulário, regras do pagador e legislação local. PT, BR e EU. Calibração feita com a sua equipa clínica.",
      },
    },
  },

  products: {
    eyebrow: "Os Instrumentos — três produtos, um único registo.",
    eyebrowMeta: "Independentes · interligados · audit-ready",
    titleLine1: "Construídos por clínicos,",
    titleLine2: "indexados pela evidência.",
    body: "Cada instrumento é independente, interligável, e integra com o EHR via HL7 v2, FHIR R4 e SMART-on-FHIR. Comece por um. Acrescente os outros à medida que a equipa cresce de confiança.",
    validationLabel: "— Categoria validada por",
    flagshipLabel: "Produto principal",
    noteLabel: "— Nota",
    notePart1: "Cada uma destas categorias está validada por mais de mil milhões de dólares de capital de risco. Mas",
    noteEmphasis: "cada hospital é único",
    notePart2:
      "— pela legislação, pelo fluxo, pela realidade do terreno. A PHMCare AI foi construída precisamente para essa diferença.",
    items: {
      codicare: {
        codename: "Instrumento 01 / CodiCare",
        name: "CodiCare",
        tagline: "Cada prontuário, codificado e auditado — automaticamente.",
        body: "Automatiza a análise de prontuários médicos com IA e OCR clínico, sugerindo e validando códigos CID com citação directa do excerto fonte. Reduz drasticamente o tempo e o custo dos processos de auditoria, faturamento e relatório regulatório.",
        bullet1:
          "Sugestão de CID-10 / CID-11 com citação do excerto fonte e nível de confiança",
        bullet2:
          "OCR clínico treinado em prontuários manuscritos PT/BR e formulários hospitalares",
        bullet3:
          "Auditoria automática contra protocolos do hospital e regras do pagador",
        pill: "Codificação · auditoria",
        specimen: {
          header: "Prontuário · processado",
          meta: "alta · 12.04",
          recordHeader: "EVOLUÇÃO · 12.04.2026 · 14:22",
          recordPart1: "Doente refere",
          recordHighlight1: "dor torácica",
          recordPart2:
            "com início súbito, irradiação para o membro superior esquerdo, associada a",
          recordHighlight2: "dispneia em esforço",
          recordPart3: ". Ausculta cardíaca rítmica, sem sopros. ECG mostra",
          recordHighlight3: "elevação de ST",
          recordPart4: "em parede inferior.",
          code1Label: "Enfarte agudo do miocárdio · parede inferior",
          code2Label: "Dor torácica não especificada",
          code3Label: "Dispneia",
          excerpts: "12 excertos analisados",
          suggested: "3 códigos sugeridos",
        },
      },
      escala: {
        codename: "Instrumento 02 / Escala",
        name: "Escala",
        tagline: "Cada turno, coberto com justiça.",
        body: "Gera escalas mensais determinísticas a partir das regras de horário de cada serviço — respeitando competências, especialidades e limites de trabalho. Distribui noites e fins de semana de forma equilibrada e reconstrói toda a escala em segundos quando alguém falta.",
        bullet1:
          "Escala mensal gerada a partir das horas contratadas e do catálogo de turnos do serviço",
        bullet2:
          "Equilíbrio automático de noites, fins de semana e competências por profissional",
        bullet3:
          "Reconstrução determinística em segundos — sem folhas de cálculo, sem favoritismos",
        pill: "Escalas · força de trabalho",
        specimen: {
          header: "Escala · Abril 2026",
          meta: "Cardiologia · 6 profissionais",
          gridLegend: "M manhã · T tarde · N noite · — folga",
          rowsLabel: "Equipa",
          coverageLabel: "Cobertura",
          coverageValue: "100% · sem lacunas",
          balanceLabel: "Noites por profissional",
          balanceValue: "equilibrado · Δ 1",
          footerLeft: "30 dias gerados",
          footerRight: "0 conflitos",
        },
      },
      bedflow: {
        codename: "Instrumento 03 / BedFlow",
        name: "BedFlow",
        tagline: "Cada cama, com o estado certo.",
        body: "Mantém o inventário de camas do hospital e o seu ciclo de ocupação em tempo real — livre, ocupada, em limpeza ou bloqueada — com resumo de ocupação por ala. A base para alocar camas a pedidos de transferência entre serviços, antes que o doente espere numa maca.",
        bullet1:
          "Inventário de camas por ala com transições de estado auditáveis",
        bullet2:
          "Resumo de ocupação por serviço em tempo real — livre · ocupada · limpeza · bloqueada",
        bullet3:
          "Alocação de camas a pedidos de transferência entre serviços — roadmap ativo",
        pill: "Fluxo · camas",
        specimen: {
          header: "Ocupação · em tempo real",
          meta: "3 alas · 48 camas",
          ward1Label: "Cardiologia · Ala A",
          ward1Value: "18 / 20",
          ward2Label: "Medicina Interna · Ala B",
          ward2Value: "12 / 16",
          ward3Label: "Cirurgia · Ala C",
          ward3Value: "9 / 12",
          statusFree: "Livre",
          statusOccupied: "Ocupada",
          statusCleaning: "Limpeza",
          statusBlocked: "Bloqueada",
          requestLabel: "Pedido de transferência",
          requestValue: "Ala B → Ala A · cama alocada",
          footerLeft: "48 camas monitorizadas",
          footerRight: "5 livres agora",
        },
      },
    },
  },

  market: {
    eyebrow: "O Mercado",
    titlePre: "Mais de",
    titleEmphasis: "4 biliões",
    titlePost:
      "de dólares em ineficiência hospitalar — à espera de uma camada que pense.",
    body: "A IA clínica está a tornar-se infraestrutura. Quem chegar primeiro à camada certa fica.",
    cards: {
      ineff: {
        title: "Ineficiências hospitalares globais.",
        body: "Custo anual desperdiçado em fragmentação de sistemas, fluxos manuais e erros evitáveis. Endereço directo da PHMCare AI.",
      },
      valuation: {
        title: "Avaliação só em operações clínicas.",
        bodyPart1:
          "Titulares em codificação, escalas e gestão de camas ultrapassam os mil milhões em avaliação. E é apenas",
        bodyEmphasis: "um",
        bodyPart2: "dos três eixos onde a PHMCare AI opera.",
      },
      infra: {
        title: "Infraestrutura essencial.",
        body: "Em cinco anos, a IA clínica deixará de ser um diferenciador opcional para passar a ser tão obrigatória como o EHR. Quem não tiver, não opera.",
      },
    },
    sources:
      "— Fontes: McKinsey Global Institute (Healthcare AI 2024), CB Insights, dados públicos das rondas de investimento dos competidores listados em IV. Reproduzidos para efeito de validação de categoria.",
  },

  advantage: {
    eyebrow: "A Vantagem",
    titleLine1: "Não competimos numa categoria.",
    titleLine2: "Competimos em três — e ligamos as três.",
    body: "Cada categoria tem os seus titulares — gigantes ou unicórnios. Mas todos operam em silos. A vantagem da PHMCare AI é a camada que os atravessa.",
    categories: {
      docs: {
        label: "— Categoria 01",
        title: "Codificação clínica",
        body: "Transformam prontuário em código CID e episódio faturável.",
      },
      voice: {
        label: "— Categoria 02",
        title: "Escalas & força de trabalho",
        body: "Montam turnos e gerem a equipa. Rígidos, fora do fluxo clínico.",
      },
      systems: {
        label: "— Categoria 03",
        title: "Fluxo & capacidade hospitalar",
        body: "Gerem camas e transferências. Caros, difíceis de integrar.",
      },
    },
    msftSuffix: "parte de MSFT",
    punchlinePre: "Eles operam em silos.",
    punchlineEmphasis: "A PHMCare AI é a camada que os atravessa.",
  },

  model: {
    eyebrow: "O Modelo",
    titleLine1: "SaaS por hospital,",
    titleLine2: "utilização para a operação.",
    items: {
      saas: {
        title: "SaaS clínico",
        body: "Por hospital, por cama ou por profissional de saúde. Modelos de preço alinhados com a estrutura interna.",
      },
      consumption: {
        title: "Consumo · operação",
        body: "Preço por prontuário codificado, por escala gerada e por cama-dia monitorizada. Escala com o volume, sem teto artificial.",
      },
      enterprise: {
        title: "Contratos enterprise",
        body: "Integração com EHRs (Epic, Oracle Health, Meditech, Allscripts), SLAs definidos, BAA na assinatura.",
      },
    },
  },

  vision: {
    eyebrow: "A Visão",
    titleLine1: "Começamos com 3.",
    titleLine2: "Construímos para 1.",
    body: "Três produtos hoje. Uma camada amanhã. Um sistema operativo hospitalar nativo de IA — coordenando decisão clínica, operação e fluxo de pacientes em tempo real.",
    todayLabel: "Hoje",
    todayBody:
      "Codificação clínica · escalas inteligentes · gestão de camas.",
    nextLabel: "Próximo",
    nextBody:
      "Pathways clínicos automatizados · monitorização remota · formulário inteligente · gestão do fluxo de pacientes.",
    visionLabel: "Visão",
    visionPart1:
      "Sistema operativo hospitalar nativo de IA — uma única camada que coordena",
    visionEmphasis: "decisão, operação e fluxo",
    visionPart2: "em tempo real.",
  },

  cta: {
    eyebrow: "Falar com a equipa",
    titleLine1: "Vamos colocar",
    titleLine2: "a PHMCare AI",
    titleLine3: "no seu hospital.",
    body: "Uma demonstração de 30 minutos sobre os seus fluxos reais. Sem slideware. Conectamos a um sandbox dos seus dados, mostramos CodiCare, Escala e BedFlow em acção, e deixamos um relatório escrito.",
    emailLabel: "Email clínico ou executivo",
    emailPlaceholder: "pedro@phmcare.ai",
    hospitalLabel: "Hospital · serviço",
    hospitalPlaceholder: "Hospital São Bartolomeu, Cardiologia",
    ehrLabel: "EHR",
    ehrOther: "Outro",
    ehrOtherEU: "Soarian / outros EU",
    submit: "Pedir demonstração",
    disclaimer:
      "Resposta em 24h · BAA na assinatura · sem PHI necessário para a demo",
    stats: {
      goliveLabel: "Do contrato à primeira recomendação",
      phiLabel: "PHI sai do seu perímetro",
      overrideLabel:
        "Override clínico — quem cuida tem sempre a última palavra",
    },
    alertSubmitted:
      "Pedido recebido. Um responsável clínico entrará em contacto nas próximas 24 horas.",
  },

  footer: {
    eyebrow: "Fim de edição",
    cities: "Ponte de Lima · Portugal",
    body: "O sistema operativo de IA para hospitais. <em>CodiCare</em>, <em>Escala</em> e <em>BedFlow</em> numa única camada de inteligência clínica — escrita com o mesmo cuidado que pede às pessoas que cuidam.",
    bodyPart1: "O sistema operativo de IA para hospitais.",
    bodyProducts: "CodiCare, Escala e BedFlow",
    bodyPart2:
      "numa única camada de inteligência clínica — escrita com o mesmo cuidado que pede às pessoas que cuidam.",
    newsletter: {
      label: "— Boletim · A Lança Clínica",
      body: "Uma edição mensal sobre raciocínio máquina aplicado a hospitais. Sem ruído, sem hype — apenas o que mudou.",
      placeholder: "pedro@phmcare.ai",
      meta: "1 edição · mês · cancelável sempre",
      submit: "Subscrever",
    },
    columns: {
      products: "— Produtos",
      productsLinks: {
        integrations: "Integrações",
        security: "Segurança clínica",
      },
      resources: "— Recursos",
      resourcesLinks: {
        methodology: "Metodologia",
        validations: "Validações clínicas",
        whitepapers: "White papers",
        press: "Imprensa",
        trust: "Centro de confiança",
      },
      company: "— Empresa",
      companyLinks: {
        about: "Sobre",
        clinicalCouncil: "Conselho clínico",
        careers: "Carreiras",
        hiring: "● a contratar",
        press: "Imprensa",
        contact: "Contacto",
      },
      hq: "— Sede",
      hqEntity: "Anvel Lda",
      hqStreet: "Rua do Carrão n.º 3704 Lj D",
      hqCity: "4990-620 Ponte de Lima, Portugal",
      hqPhone: "+351 938 373 944",
    },
    legal: {
      copyright: "© 2026",
      entity: "Anvel Lda",
      tagline: "— Construída com cuidado, para quem cuida.",
      privacy: "Privacidade",
      terms: "Termos",
      dataNotice: "Aviso de tratamento de dados",
      top: "↑ Topo",
      topAria: "Voltar ao topo",
    },
    rodapeAria: "Rodapé",
  },

  colophon: {
    eyebrow: "Colofão — sobre esta edição",
    edition: "Edição 01 · Abril 2026",
    titlePart1: "Um specimen do sistema",
    titleEmphasis: "PHMCare AI.",
    bodyPart1: "Esta página partilha o sistema visual da",
    bodySisterLink: "edição-irmã Vellum",
    bodyPart2:
      ". Mesma autoridade clínica, mesma calorosidade humana — calibrada para a realidade hospitalar de PT, BR e UE.",
    paletteLabel: "— Paleta",
    imageLabel: "— Direcção de imagem (briefing AI por secção)",
    images: {
      hero: "Fotografia editorial de um corredor hospitalar silencioso ao amanhecer. Luz volumétrica suave a entrar pelas janelas. Estação de enfermagem ao fundo com brilho subtil de monitor. Sem pessoas em primeiro plano. Paleta: bone quente, ink charcoal, clay suave. Mamiya 7, 80mm, profundidade reduzida. Editorial arquival. 4K.",
      trust:
        "Still life em mesa de nogueira: um livro clínico encadernado a couro entreaberto, candeeiro de mesa em latão a criar piscina de luz quente, crachás dispersos, caneta-tinteiro, bata branca. Cream + ink. NEJM-style. 45°, 50mm. 4K.",
      problem:
        "Macro de uma pilha de prontuários em papel, um deles aberto com notas manuscritas e valores de laboratório. Luz suave de janela à esquerda, sombras longas, dessaturação subtil para tons de osso e tinta. Comunica peso sem alarme. Fotojornalismo, 100mm macro. 4K.",
      codicare:
        "Fotografia top-down: prontuário em papel com palavras-chave a ressaltar (sublinhado fino clay), ao lado uma régua brass e fichas pequenas com códigos impressos. Editorial product photography, sage e clay. 4K.",
      escala:
        "Fotografia top-down: uma grelha mensal desenhada à mão em papel cream, marcas de turno em tinta clay dispostas em ritmo regular, um compasso de latão pousado ao lado. Sugere ordem e equilíbrio. Editorial arquival. 4K.",
      bedflow:
        "Composição minimalista: uma planta de ala hospitalar em linhas de blueprint sobre bone quente, pequenos rectângulos preenchidos em sage e clay a marcar camas ocupadas e livres. Espaço negativo generoso. Editorial fine-art. 4K.",
      model:
        "Diagrama arquitectónico: workflow hospitalar desenhado como linhas de blueprint sobre papel cream quente, ferramentas de divisão em latão pousadas ao lado. Top-down editorial. Sem clutter. 4K.",
      cta: "Fotografia editorial larga: átrio hospitalar com janelas altas em arco, uma figura solitária de bata branca a caminhar com confiança em direcção à luz. Iluminação de amanhecer, paredes cream, acentos terracotta no chão. Contemplativo, aspiracional, sem sci-fi. 4K.",
    },
    imageSection: {
      hero: "§ Hero",
      trust: "§ Trust",
      problem: "§ Problem",
      codicare: "§ CodiCare",
      escala: "§ Escala",
      bedflow: "§ BedFlow",
      model: "§ Modelo / Visão",
      cta: "§ Final CTA",
    },
    composedLine1:
      "Composto em Fraunces (display, opsz 9–144) e Manrope (corpo, peso variável). Mono em JetBrains Mono. Grelha editorial 12 colunas, hairlines a 1px / 12% ink.",
    composedLine2: "Impresso em ecrã. Construído com cuidado · 2026.",
  },

  hospitals: {
    h1: "Hospital São Bartolomeu",
    h2: "Centro Clínico Tejo Sul",
    h3: "Vitalis Health Group",
    h4: "Belmar Saúde",
    h5: "Caldera Hospital Group",
    h6: "Mercator Health",
  },

  team: {
    eyebrow: "A Equipa",
    eyebrowMeta: "Clínicos · engenheiros · investigadores",
    titleLine1: "As pessoas por trás",
    titleLine2: "do sistema.",
    body: "Um grupo pequeno, deliberado. Construímos a PHMCare AI a partir de hospitais reais, com clínicos que prescrevem e engenheiros que escrevem código de produção. Sem distância entre o terreno e o repositório.",
    specimenFooter: "Ponte de Lima · disponível para conversa",
    footnoteLabel: "— Nota",
    footnoteBody:
      "Estamos a recrutar para engenharia clínica, calibração e operações hospitalares. Carta de motivação directa: pedro@phmcare.ai.",
    members: {
      m1: {
        name: "Pedro Santos",
        role: "Senior Engenheiro de Software + IA",
        body: "Lidera a stack de produto e a infraestrutura de inferência. Responsável pela arquitectura federada que mantém o PHI dentro do perímetro do hospital.",
      },
      m2: {
        name: "Mariana Matos",
        role: "Jurista",
        body: "Licenciada em Direito e História, mestre em Direito das Empresas e dos Negócios e doutoranda. Possui a especialização de Administração Hospitalar pela Escola Nacional de Saúde Pública da Universidade Nova de Lisboa.",
      },
      m3: {
        name: "Fillipi Nascimento",
        role: "Senior SRE Engineer",
        body: "Responsável pela fiabilidade, observabilidade e operações on-premise. Mantém os 99.97% de disponibilidade que os hospitais parceiros leem na capa.",
      },
    },
  },
};

export default ptPT;
export type PtPT = typeof ptPT;
