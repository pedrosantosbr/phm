/* ──────────────────────────────────────────────────────────────────────────
   PHM Care — Codex · texto da landing page (pt-PT)
   Fonte de verdade: landing-page-phm-care-copy.md (v2.0, 16/09/2026).
   Não acrescentar números sem fonte pública citável ao lado.
   ────────────────────────────────────────────────────────────────────────── */

const ptPT = {
  meta: {
    title: "PHM Care — Codex · Do texto clínico ao GDH",
    description:
      "O Codex lê a documentação do episódio, propõe os códigos ICD-10-CM/PCS com a passagem clínica que os sustenta, agrupa em GDH e mostra o valor do episódio. O médico codificador valida e decide. Codificação clínica assistida por IA, desenhada para o SNS.",
  },

  nav: {
    brand: "PHM Care",
    product: "Codex",
    brandAria: "PHM Care — início",
    aria: "Navegação principal",
    how: "Como funciona",
    dashboard: "Painel",
    security: "Segurança",
    cta: "Falar connosco",
    menu: "Menu",
    skip: "Saltar para o conteúdo",
  },

  language: {
    label: "Idioma",
    pt: "PT",
    en: "EN",
    switchAria: "Mudar idioma",
  },

  hero: {
    eyebrow: "Codificação clínica assistida por IA · ICD-10-CM/PCS · GDH",
    titleLine1: "Do texto clínico ao GDH,",
    titleLine2: "sem o caminho todo à mão.",
    body: "O Codex lê a documentação do episódio, propõe os códigos ICD-10-CM/PCS com a passagem clínica que os sustenta, agrupa em GDH e mostra o valor do episódio no momento em que ele é codificado. O médico codificador valida e decide — deixa de começar em folha em branco e passa a começar em proposta fundamentada.",
    ctaPrimary: "Ver uma demonstração",
    ctaGhost: "Como funciona",
    microcopy:
      "Desenhado para o sistema de financiamento hospitalar português: ICD-10-CM/PCS, agrupamento APR-DRG, valorização por peso relativo e ligação ao SIMH (em desenvolvimento).",
    flow: {
      aria: "Representação ilustrativa do fluxo do Codex em quatro estados, com validação humana entre o segundo e o terceiro",
      header: "Fluxo de um episódio",
      tag: "Exemplo ilustrativo",
      s1Label: "Estado um",
      s1Title: "Documentação do episódio",
      s1Chip1: "Relatório de alta",
      s1Chip2: "Notas de evolução",
      s1Chip3: "Registo de bloco",
      s2Label: "Estado dois",
      s2Title: "Códigos propostos, com justificação",
      s2Chip1: "Diagnóstico principal",
      s2Chip2: "Secundários",
      s2Chip3: "Procedimentos",
      s2Note: "↗ passagem do processo clínico · documento de origem",
      humanLabel: "Validação humana",
      humanWho: "O médico codificador aceita, altera, acrescenta ou recusa.",
      s3Label: "Estado três",
      s3Title: "GDH e severidade",
      s3Chip1: "GDH",
      s3Chip2: "Nível de severidade",
      s4Label: "Estado quatro",
      s4Title: "Valor do episódio",
      s4Note: "a partir do peso relativo",
      caption:
        "Exemplo ilustrativo. Sem dados de doentes: as barras representam texto, não valores.",
    },
  },

  how: {
    eyebrow: "Como funciona",
    titleLine1: "Quatro passos,",
    titleLine2: "um deles humano por desenho.",
    body: "A codificação é acto médico e continua a sê-lo. O Codex não substitui o passo da decisão: prepara tudo o que o antecede e executa tudo o que o segue.",
    removes: "Tira do caminho",
    because: "Porque é assim",
    humanBadge: "Passo humano — não automático",
    simhTag: "Ligação ao SIMH · em desenvolvimento",
    steps: {
      s1: {
        num: "01",
        label: "Passo um",
        title: "Lê o episódio inteiro",
        body: "Relatórios de alta, notas de evolução, resultados, registos de bloco. O Codex reúne e lê a documentação dispersa do episódio antes de o codificador a abrir.",
        removes:
          "A recolha e a leitura integral de documentação espalhada por vários sistemas e formatos.",
      },
      s2: {
        num: "02",
        label: "Passo dois",
        title: "Propõe os códigos, com a passagem que os sustenta",
        body: "Diagnóstico principal, secundários e procedimentos em ICD-10-CM/PCS. Cada sugestão traz a frase do processo clínico que a fundamenta, com ligação ao documento de origem.",
        removes:
          "A procura da evidência para sustentar — ou recusar — cada código. E deixa a justificação escrita, que é o que a auditoria interna precisa e que hoje raramente existe.",
      },
      s3: {
        num: "03",
        label: "Passo três",
        title: "O codificador valida",
        body: "Aceitar, alterar, acrescentar, recusar. A decisão é sempre do médico codificador, e cada intervenção fica registada.",
        because:
          "A codificação é acto médico no enquadramento português, e o artigo 1.º-C do Código dos Contratos Públicos, aditado pelo Decreto-Lei n.º 177/2026, inscreve na lei o princípio de supervisão e contributo humano no uso de IA pela Administração.",
      },
      s4: {
        num: "04",
        label: "Passo quatro",
        title: "Agrupa, valoriza e devolve ao sistema",
        body: "Sobre os códigos validados, o Codex aplica o agrupamento, devolve o GDH e o nível de severidade, e apresenta a leitura do valor do episódio a partir do peso relativo.",
        removes:
          "A transcrição manual de códigos entre sistemas — e o erro que lhe anda associado. E encurta a distância entre codificar e saber o que o episódio vale, que hoje é de meses.",
      },
    },
    close:
      "O ganho não está em cada passo isolado. Está em o codificador chegar ao episódio com o trabalho de preparação feito, e em a instituição saber o que tem codificado enquanto ainda há margem para agir.",
  },

  why: {
    eyebrow: "Porque agora",
    titleLine1: "O volume sobe,",
    titleLine2: "a capacidade não pode subir com ele.",
    body: "A codificação clínica é hoje um dos pontos mais estreitos da cadeia que liga o registo clínico ao financiamento hospitalar — e está a ficar mais estreito por razões que nenhuma instituição controla.",
    r1: {
      figure: "30",
      figureUnit: "dias após a alta",
      title: "O prazo é exigente por desenho",
      body: "O Acordo Modificativo ao Contrato-Programa fixa 30 dias após a alta para codificar, agrupar e auditar cada episódio. É um prazo curto para um processo que exige leitura integral de documentação clínica por um médico codificador, e a pressão sobre ele é estrutural: aplica-se a todos, todos os meses, sobre todo o volume.",
      source:
        "Fonte: Acordo Modificativo ao Contrato-Programa, Cláusula 5.ª, n.º 2 — ACSS",
    },
    r2: {
      figure: "1,4 %",
      figureUnit: "de reforço de pessoal sem termo em 2026",
      title: "O recurso é escasso e está contingentado",
      body: "O médico codificador é recurso especializado e escasso. O Quadro Global de Referência do SNS para 2026-2028 limita o reforço de pessoal sem termo a 1,4 % em 2026 para todo o SNS. A resposta ao volume não pode vir de mais pessoas.",
      source: "Fonte: Despacho n.º 10981-A/2026",
    },
    r3: {
      figure: "Quatro",
      figureUnit: "indicadores construídos a partir da codificação",
      title: "E o output da codificação pesa mais do que pesava",
      body: "Quatro dos indicadores pelos quais cada ULS é avaliada até 2028 são construídos a partir do resultado da codificação — entre eles a hospitalização domiciliária em GDH, cuja meta mais do que duplica. A codificação deixou de ser trabalho administrativo de retaguarda e passou a ser a fonte de dados por onde a instituição é medida.",
      source: "Fonte: Despacho n.º 10981-A/2026",
    },
    close: {
      figure: "23,12 %",
      body: "Nacionalmente, 23,12 % dos episódios do SNS estão por codificar. É a medida da distância entre o que o processo actual consegue dar e o que lhe está a ser pedido — e é o espaço onde a codificação assistida faz diferença.",
      source: "Fonte: Base de Dados de Morbilidade Hospitalar — ACSS",
    },
  },

  dashboard: {
    eyebrow: "Para quem responde pelo contrato-programa",
    titleLine1: "A vista que hoje só existe",
    titleLine2: "depois do apuramento.",
    body: "Acima do trabalho episódio a episódio, o Codex entrega à gestão a leitura em tempo real do que está codificado, do que falta e do que isso representa.",
    c1: {
      k: "Prazo",
      title: "Prazo, em tempo real",
      body: "Quantos episódios estão dentro dos 30 dias, quantos estão fora e quantos vão sair esta semana, por serviço e por responsável. A informação chega enquanto ainda há margem para agir, e não no apuramento.",
    },
    c2: {
      k: "Pendente",
      title: "O que o stock por codificar representa",
      bodyPart1: "Cada episódio por codificar é índice de ",
      bodyEm: "case-mix",
      bodyPart2:
        " que ainda não entrou no apuramento. O painel põe valor em euros no que está pendente.",
    },
    c3: {
      k: "Produção",
      title: "Realizado contra contratado",
      body: "O Apêndice II fixa a produção contratada por linha. O painel compara realizado com contratado, por banda e por serviço, ao mês.",
    },
    c4: {
      k: "Auditoria",
      title: "Auditoria contínua, não por amostra",
      bodyPart1:
        "O motor vê todos os episódios: divergências entre código proposto e validado, documentação insuficiente para sustentar o GDH, padrões por serviço. A auditoria deixa de ser trabalho de amostragem ",
      bodyEm: "a posteriori",
      bodyPart2: ".",
    },
    close:
      "Nenhuma destas quatro vistas existe quando a codificação é entregue a um prestador externo. É a diferença entre comprar capacidade e ter a cadeia toda instrumentada.",
  },

  security: {
    eyebrow: "Segurança",
    titleLine1: "Dados de saúde tratados",
    titleLine2: "como o que são.",
    body: "A instituição é responsável pelo tratamento; a PHM Care actua como subcontratante, com contrato de subcontratação nos termos do artigo 28.º do RGPD. Dados de saúde são categoria especial do artigo 9.º, e o produto é construído a partir dessa restrição e não à volta dela.",
    p1: {
      title: "Contrato de subcontratação art. 28.º RGPD",
      body: "Objecto e duração, instruções documentadas, confidencialidade, segurança, sub-subcontratação só com autorização, devolução ou eliminação no final, direito de auditoria.",
    },
    p2: {
      title: "Os vossos dados não treinam modelos",
      body: "Compromisso contratual, não política interna.",
    },
    p3: {
      title: "Rasto de auditoria completo",
      body: "Cada sugestão com a passagem clínica que a sustenta e o registo de quem validou, o quê e quando.",
    },
    p4: {
      title: "Supervisão humana como requisito, não como opção",
      body: "É o passo 03 do fluxo, e está alinhado com o artigo 1.º-C do Código dos Contratos Públicos.",
    },
  },

  cta: {
    secNum: "VIII",
    eyebrow: "Falar com a equipa",
    titleLine1: "Vejam o Codex",
    titleLine2: "a correr",
    titleLine3: "sobre um episódio.",
    body1:
      "Uma sessão de 30 minutos, sobre um caso real anonimizado ou sobre um exemplo nosso, consoante preferirem. Mostramos o percurso completo — documentação, códigos propostos com justificação, validação, GDH e valor do episódio — e respondemos às perguntas de integração e de proteção de dados na mesma conversa.",
    body2:
      "Se quiserem, levamos também o dimensionamento da vossa instituição, calculado a partir de documentos públicos.",
    form: {
      email: "Email clínico ou executivo",
      emailPlaceholder: "pedro@phmcare.ai",
      hospital: "Hospital · serviço",
      hospitalPlaceholder: "Hospital São Bartolomeu, Cardiologia",
      role: "Função",
      rolePlaceholder: "Seleccione",
      roles: {
        board: "Conselho de administração",
        clinical: "Direcção clínica",
        coding: "Serviço de codificação",
        it: "Sistemas de informação",
        other: "Outra",
      },
      roleOther: "Qual?",
      roleOtherPlaceholder: "Indique a sua função",
      submit: "Pedir demonstração",
      microcopy: "Resposta em 24h · BAA na assinatura · sem PHI necessário para a demo",
      invalid: "Preencha todos os campos, com um email válido.",
      sent: "O seu cliente de email vai abrir com o pedido preenchido. Se não abrir, escreva para pedro@phmcare.ai.",
      subject: "Pedido de demonstração",
      bodyIntro: "Gostaria de marcar uma demonstração do Codex.",
    },
    stats: {
      s1Num: "14d",
      s1Label: "Do contrato à primeira recomendação",
      s2Num: "0",
      s2Label: "PHI sai do seu perímetro",
      s3Num: "∞",
      s3Label: "Override clínico — quem cuida tem sempre a última palavra",
    },
  },

  footer: {
    eyebrow: "Fim de edição",
    cities: "Ponte de Lima · Portugal",
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
};

export default ptPT;
export type PtPT = typeof ptPT;
