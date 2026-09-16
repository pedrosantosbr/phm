# Landing page PHM Care — texto e estrutura

**Versão:** 2.0 · 16 de setembro de 2026 · substitui integralmente a v1.0
**Base:** Plano de Negócios v3.1 (15/09/2026), Secção 5 — Proposta de valor
**Decisões:** leitor principal = conselho de administração · marca = PHM Care, produto Codex · sem preços na página

---

## 0. O que muda face à v1.0

A v1.0 abria pelo incumprimento — *"o prazo é de 30 dias, ninguém cumpre"*. Tecnicamente sólido, comercialmente errado: põe o leitor a defender-se na primeira linha, e quem lê é exactamente quem responde por aquele número. Ninguém compra a quem começa por lhe apontar o dedo.

**A v2.0 inverte a ordem.** Abre pelo produto e pelo mecanismo — o que o Codex faz ao fluxo de trabalho, onde estão os estrangulamentos e como se desfazem. O prazo dos 30 dias mantém-se, mas entra a meio, como contexto que explica a urgência, e é escrito como pressão do sistema sobre a instituição, nunca como falha da instituição.

| | v1.0 | v2.0 |
|---|---|---|
| Primeira secção | a obrigação incumprida | **o produto e o que ele faz** |
| Secção do problema | "nenhuma instituição cumpre" | **onde o processo estrangula, e porquê** |
| Sujeito das frases | a instituição que falha | **o processo, o volume, o fluxo** |
| O que se promete | conformidade | **fluxo mais rápido, gargalos desfeitos, visibilidade** |

**O que continua fora, e não volta:** números de tempo por episódio, percentagens de ganho de completude, poupança, redução de pessoal, dados inventados de qualquer espécie. Falamos de *mecanismo* — o que o produto tira do caminho —, não de *resultado quantificado*, que só o piloto pode medir.

---

## 1. Estrutura da página

1. **Herói** — o produto: do texto clínico ao GDH, com o codificador a decidir
2. **Como funciona** — os quatro passos, e o que cada um tira do caminho
3. **Onde o processo estrangula hoje** — contexto, sem acusação
4. **O painel** — visibilidade para quem responde pelo contrato-programa
5. **Segurança e proteção de dados**
6. **Quem está do outro lado** — equipa e acompanhamento
7. CTA + rodapé

Seis secções. Sem barra de estatísticas, sem logótipos, sem testemunhos, sem colophon, sem quatro produtos com nomes próprios.

---

## 2. Navegação e topo

**Barra superior de metadados:** eliminar. (Era `Vol. IV · Issue 12 · 99.97% uptime · All systems operational` — inventado.)

**Nav:**

```
PHM Care          Como funciona  ·  Painel  ·  Segurança  ·  Equipa          [Falar connosco]
```

---

## 3. Herói — o produto

**Eyebrow:** `CODIFICAÇÃO CLÍNICA ASSISTIDA POR IA · ICD-10-CM/PCS · GDH`

**H1 (recomendado):**
> # Do texto clínico ao GDH, sem o caminho todo à mão.

**Subtítulo:**
> O Codex lê a documentação do episódio, propõe os códigos ICD-10-CM/PCS com a passagem clínica que os sustenta, agrupa em GDH e mostra o valor do episódio no momento em que ele é codificado. O médico codificador valida e decide — deixa de começar em folha em branco e passa a começar em proposta fundamentada.

**CTA primário:** `Ver uma demonstração`
**CTA secundário:** `Como funciona ↓`

**Microcopy sob os botões:**
> Desenhado para o sistema de financiamento hospitalar português: ICD-10-CM/PCS, agrupamento APR-DRG, valorização por peso relativo e ligação ao SIMH.

**Alternativas de H1:**

- **B** — *O codificador deixa de começar do zero em cada episódio.* (mais próxima do utilizador, menos da administração)
- **C** — *Codificação clínica assistida, construída para o SNS.* (mais sóbria, menos memorável)

Recomendo a **A**: diz o que o produto faz, nomeia o percurso inteiro (texto → GDH, que é o que nos distingue de um assistente de codificação genérico) e a segunda metade — *sem o caminho todo à mão* — é a promessa de agilidade sem prometer um número.

**Visual do herói:** substituir o cartão clínico falso por uma representação do fluxo — quatro estados encadeados (*documentação do episódio → códigos propostos com justificação → GDH e severidade → valor do episódio*), com o passo de validação humana marcado entre o segundo e o terceiro. Dados de demonstração rotulados `exemplo ilustrativo`. Sem nomes de doentes, sem número de processo, sem sinais vitais, sem latências.

---

## 4. Secção 1 — Como funciona

**Eyebrow:** `COMO FUNCIONA`

**H2:**
> Quatro passos, um deles humano por desenho.

**Corpo:**
> A codificação é acto médico e continua a sê-lo. O Codex não substitui o passo da decisão: prepara tudo o que o antecede e executa tudo o que o segue.

**Os quatro passos:**

**01 · Lê o episódio inteiro**
> Relatórios de alta, notas de evolução, resultados, registos de bloco. O Codex reúne e lê a documentação dispersa do episódio antes de o codificador a abrir.
> *Tira do caminho:* a recolha e a leitura integral de documentação espalhada por vários sistemas e formatos.

**02 · Propõe os códigos, com a passagem que os sustenta**
> Diagnóstico principal, secundários e procedimentos em ICD-10-CM/PCS. Cada sugestão traz a frase do processo clínico que a fundamenta, com ligação ao documento de origem.
> *Tira do caminho:* a procura da evidência para sustentar — ou recusar — cada código. E deixa a justificação escrita, que é o que a auditoria interna precisa e que hoje raramente existe.

**03 · O codificador valida**
> Aceitar, alterar, acrescentar, recusar. A decisão é sempre do médico codificador, e cada intervenção fica registada.
> *Porque é assim:* a codificação é acto médico no enquadramento português, e o artigo 1.º-C do Código dos Contratos Públicos, aditado pelo Decreto-Lei n.º 177/2026, inscreve na lei o princípio de supervisão e contributo humano no uso de IA pela Administração.

**04 · Agrupa, valoriza e devolve ao sistema**
> Sobre os códigos validados, o Codex aplica o agrupamento, devolve o GDH e o nível de severidade, e apresenta a leitura do valor do episódio a partir do peso relativo.
> *Tira do caminho:* a transcrição manual de códigos entre sistemas — e o erro que lhe anda associado. E encurta a distância entre codificar e saber o que o episódio vale, que hoje é de meses.

**Fecho da secção:**
> O ganho não está em cada passo isolado. Está em o codificador chegar ao episódio com o trabalho de preparação feito, e em a instituição saber o que tem codificado enquanto ainda há margem para agir.

> 💬 **Nota sobre a ligação ao SIMH.** É o passo 04 e é diferenciador — foi pedido em documento público por uma instituição do SNS que já tem IA de codificação em produção. Mas está no roteiro (meses 2-6), não está construída. Na página tem de levar rótulo `em desenvolvimento` ou ser escrita no futuro. Publicá-la no presente é afirmação infundada.

> 💬 **Nota sobre quantificação.** Nenhum destes quatro blocos leva número. É deliberado: não temos linha de base medida de tempo por episódio, e a única referência de mercado implica 18 a 24 minutos, não os 60 que versões antigas do material comercial usavam. O texto descreve o que o produto retira do caminho, que é verdade e é verificável numa demonstração. Os números entram quando o piloto os produzir — e aí valem muito mais, porque são do cliente.

---

## 5. Secção 2 — Onde o processo estrangula hoje

Esta é a secção reescrita. **Regra que a governa: o sujeito das frases é o processo, o volume ou o sistema — nunca a instituição que lê.** Não há "não cumpre", "falha", "atraso vosso". Há pressão externa, capacidade fixa e um processo desenhado para outro volume.

**Eyebrow:** `PORQUE AGORA`

**H2:**
> O volume sobe, a capacidade não pode subir com ele.

**Corpo:**
> A codificação clínica é hoje um dos pontos mais estreitos da cadeia que liga o registo clínico ao financiamento hospitalar — e está a ficar mais estreito por razões que nenhuma instituição controla.

**Três blocos, um argumento cada:**

**O prazo é exigente por desenho**
> O Acordo Modificativo ao Contrato-Programa fixa 30 dias após a alta para codificar, agrupar e auditar cada episódio. É um prazo curto para um processo que exige leitura integral de documentação clínica por um médico codificador, e a pressão sobre ele é estrutural: aplica-se a todos, todos os meses, sobre todo o volume.
> `Fonte: Acordo Modificativo ao Contrato-Programa, Cláusula 5.ª, n.º 2 — ACSS`

**O recurso é escasso e está contingentado**
> O médico codificador é recurso especializado e escasso. O Quadro Global de Referência do SNS para 2026-2028 limita o reforço de pessoal sem termo a 1,4 % em 2026 para todo o SNS. A resposta ao volume não pode vir de mais pessoas.
> `Fonte: Despacho n.º 10981-A/2026`

**E o output da codificação pesa mais do que pesava**
> Quatro dos indicadores pelos quais cada ULS é avaliada até 2028 são construídos a partir do resultado da codificação — entre eles a hospitalização domiciliária em GDH, cuja meta mais do que duplica. A codificação deixou de ser trabalho administrativo de retaguarda e passou a ser a fonte de dados por onde a instituição é medida.
> `Fonte: Despacho n.º 10981-A/2026`

**Fecho da secção — a frase que faz o trabalho, sem acusar ninguém:**
> Nacionalmente, 23,12 % dos episódios do SNS estão por codificar. É a medida da distância entre o que o processo actual consegue dar e o que lhe está a ser pedido — e é o espaço onde a codificação assistida faz diferença.
> `Fonte: Base de Dados de Morbilidade Hospitalar — ACSS`

> ⚠️ **O que sai desta secção, e é o que a tornava agressiva:**
> - a tabela com o nome das instituições e os respectivos dias até à primeira codificação (~40, ~58, ~130). Além de expor o leitor, os valores foram lidos de gráfico com ±5 dias de precisão e o plano de negócios diz expressamente que não podem ir para documento comercial nesse estado;
> - a frase "nenhuma instituição do SNS cumpre";
> - o recorte do Relatório e Contas sobre facturação perdida. É verdadeiro e é público, mas numa página aberta lê-se como ameaça.
>
> O número nacional de 23,12 % fica, porque é agregado: não identifica ninguém e é o próprio SNS a publicá-lo. Quando a conversa for individual, os números da instituição entram — aí são úteis, porque são o dimensionamento dela.

---

## 6. Secção 3 — O painel

**Eyebrow:** `PARA QUEM RESPONDE PELO CONTRATO-PROGRAMA`

**H2:**
> A vista que hoje só existe depois do apuramento.

**Corpo:**
> Acima do trabalho episódio a episódio, o Codex entrega à gestão a leitura em tempo real do que está codificado, do que falta e do que isso representa.

**Quatro cartões:**

- **Prazo, em tempo real** — quantos episódios estão dentro dos 30 dias, quantos estão fora e quantos vão sair esta semana, por serviço e por responsável. A informação chega enquanto ainda há margem para agir, e não no apuramento.
- **O que o stock por codificar representa** — cada episódio por codificar é índice de *case-mix* que ainda não entrou no apuramento. O painel põe valor em euros no que está pendente.
- **Realizado contra contratado** — o Apêndice II fixa a produção contratada por linha. O painel compara realizado com contratado, por banda e por serviço, ao mês.
- **Auditoria contínua, não por amostra** — o motor vê todos os episódios: divergências entre código proposto e validado, documentação insuficiente para sustentar o GDH, padrões por serviço. A auditoria deixa de ser trabalho de amostragem *a posteriori*.

**Fecho:**
> Nenhuma destas quatro vistas existe quando a codificação é entregue a um prestador externo. É a diferença entre comprar capacidade e ter a cadeia toda instrumentada.

> 💡 A comparação entre instituições (*benchmarking* na plataforma) é a defensabilidade central do plano, mas só existe a partir do décimo cliente. Fora da página, até ser verdade.

---

## 7. Secção 4 — Segurança e proteção de dados

**Eyebrow:** `SEGURANÇA`

**H2:**
> Dados de saúde tratados como o que são.

**Corpo:**
> A instituição é responsável pelo tratamento; a PHM Care actua como subcontratante, com contrato de subcontratação nos termos do artigo 28.º do RGPD. Dados de saúde são categoria especial do artigo 9.º, e o produto é construído a partir dessa restrição e não à volta dela.

**Quatro pontos:**

- **Contrato de subcontratação art. 28.º RGPD** — objecto e duração, instruções documentadas, confidencialidade, segurança, sub-subcontratação só com autorização, devolução ou eliminação no final, direito de auditoria.
- **Os vossos dados não treinam modelos** — compromisso contratual, não política interna.
- **Rasto de auditoria completo** — cada sugestão com a passagem clínica que a sustenta e o registo de quem validou, o quê e quando.
- **Supervisão humana como requisito, não como opção** — é o passo 03 do fluxo, e está alinhado com o artigo 1.º-C do Código dos Contratos Públicos.

> 🚩 **Continua por decidir, e bloqueia esta secção.** Indicaram *RGPD, ISO, SOC 2 Type II e HIPAA*. Só o RGPD é afirmável sem documento na mão:
> - **ISO 27001** e **SOC 2 Type II** são certificações auditadas, com relatório emitido por auditor externo — a SOC 2 Type II exige ainda 6 a 12 meses de janela de observação. Publicá-las sem relatório é declaração falsa perante um cliente público que as pode exigir no procedimento.
> - **HIPAA** é legislação federal norte-americana. Não se aplica a uma ULS, e invocá-la sinaliza que a página foi escrita para outro mercado. **Retirar.**
>
> Três redacções legítimas, por ordem de preferência:
> 1. **Só o que existe hoje** — RGPD, art. 28.º, não-treino, rasto de auditoria, supervisão humana. É suficiente: segurança é o eixo secundário.
> 2. **Certificação em curso, rotulada** — *"Certificação ISO/IEC 27001 em curso, conclusão prevista para [data]"*. Defensável se o processo estiver aberto com um organismo certificador.
> 3. **Controlos sem certificação** — *"Arquitectura construída segundo os controlos da norma ISO/IEC 27001"*. Afirmação sobre desenho, não sobre auditoria.

---

## 8. Secção 5 — Quem está do outro lado

**Eyebrow:** `EQUIPA E ACOMPANHAMENTO`

**H2:**
> Uma equipa pequena, e os dois fundadores em cada implementação.

**Dois cartões:**

- **Pedro Santos — Tecnologia.** Engenheiro sénior de TI com foco em inteligência artificial. Responsável pelo motor, pela arquitectura e pelo modelo de custo.
- **Mariana — Domínio e regulação.** Administradora Hospitalar e jurista, com pós-graduação em Direito Médico e mestrado em Direito das Empresas e Negócios.

**Corpo:**
> A navegação do enquadramento de contratação pública e do RGPD é competência interna da empresa, não serviço que subcontratamos. Num mercado onde o ciclo de venda é um procedimento pré-contratual, isso poupa tempo dos dois lados.

**Acompanhamento — três linhas:**

- Implementação acompanhada, com âmbito, duração e métricas de aceitação definidos à partida.
- Formação e apoio directo ao serviço de codificação. A ferramenta é para quem codifica, e é com eles que a afinamos.
- Interlocutor único, com conhecimento do domínio. Sem nível 1, nível 2 e bilhete de suporte.

> ⚠️ Não prometer SLA, tempo de resposta ou disponibilidade em percentagem enquanto não houver compromisso que se possa cumprir e medir.

---

## 9. Secção 6 — CTA

**H2:**
> Vejam o Codex a correr sobre um episódio.

**Corpo:**
> Uma sessão de 30 minutos, sobre um caso real anonimizado ou sobre um exemplo nosso, consoante preferirem. Mostramos o percurso completo — documentação, códigos propostos com justificação, validação, GDH e valor do episódio — e respondemos às perguntas de integração e de proteção de dados na mesma conversa.
>
> Se quiserem, levamos também o dimensionamento da vossa instituição, calculado a partir de documentos públicos.

**Formulário — quatro campos:**

- Nome
- Instituição
- Email institucional
- Função *(Conselho de administração · Direcção clínica · Serviço de codificação · Sistemas de informação · Outra)*

**Botão:** `Marcar demonstração`

**Microcopy:** `Resposta em 48 horas úteis. Nenhum dado clínico é necessário para agendar.`

> Remover o campo de EHR com fornecedores americanos (Epic, Cerner, Meditech, Allscripts). Se ficar, as opções corretas são **SClínico · SIMH · SONHO · Outro**.

---

## 10. Rodapé

Uma coluna de identificação, uma de ligações legais, uma de contacto.

- **Retirar:** menu de produtos com quatro nomes inexistentes; "Resources" (methodology, validation studies, white papers, press, trust center); "Careers — we're hiring"; moradas em Boston, Lisboa e Singapura; distintivos SOC 2 / HIPAA / HITRUST.
- **Manter:** PHM Care, morada real, Política de Privacidade, contacto, ano.

---

## 11. Inventário do que sai da página actual

| Elemento | Porquê sai |
|---|---|
| `99.97% uptime`, `All systems operational`, `38ms latency` | inventado |
| `220+ care sites`, `18M encounters`, `14 million patient encounters` | inventado; não há contratos fechados |
| Mural de logótipos (Beaumont Mercy, St. Albright…) | clientes inexistentes |
| Três testemunhos com nome, cargo e citação | pessoas inexistentes — risco reputacional e legal |
| `8.4 h/semana`, `23 % ↓ dano evitável`, `18 % ↓ readmissões`, `AUROC > 0.91` | sem estudo, sem piloto, sem base |
| `49 % do tempo em documentação`, `80.000 pontos de dados por internamento` | estatísticas de outro sistema de saúde, sem fonte |
| Quatro produtos (Sentinel, Cadence, Stratify, Conduit) | um produto, não quatro |
| Secção "Method" / implantação em 14 dias | prazo por provar |
| Colophon inteiro | material de trabalho interno |
| SOC 2 Type II, HIPAA, HITRUST, NIST 800-53 | ver bandeira da Secção 7 |
| Cartão de doente no herói (MRN, sinais vitais, recomendação de sépsis) | inventa dados clínicos e sugere um produto que não é o nosso |
| Ornamento de ECG em toda a página | pertence a monitorização de sinais vitais, não a codificação clínica |

---

## 12. Regras de redacção

1. **Tom.** O adversário é o processo manual e o volume, nunca o leitor. Sempre que uma frase tiver a instituição como sujeito de um verbo negativo, reescrever com o processo como sujeito.
2. **Números.** Só o que tem fonte pública citável, e com a fonte visível ao lado. Na página inteira: 30 dias, 1,4 % e 23,12 %. Mais nenhum.
3. **Sem promessas de resultado quantificado** — tempo por episódio, percentagem de completude, poupança, redução de pessoal, aumento de receita. Descrever mecanismo, não outcome.
4. **Futuro escreve-se no futuro.** Funcionalidade em roteiro leva rótulo.
5. **O codificador nunca aparece como custo a eliminar.** É o utilizador do produto, e é ele que decide se a ferramenta fica.
6. **Português de Portugal.** Sem *care sites*, *health systems*, *bedside*.
7. **Nada de linguagem de vigilância** no painel — "por responsável" é para gestão de carga, não para controlo individual. Se soar a monitorização de desempenho de pessoas, reescrever.

---

## 13. O que fica por decidir

1. **Certificações de segurança** — Secção 7. Bloqueia a redacção final dessa secção.
2. **Estado da integração com o SIMH** — presente ou roteiro? Afecta o passo 04 e o microcopy do herói.
3. **Formato da demonstração** — sobre caso real anonimizado do cliente ou sobre exemplo nosso? O CTA promete os dois; convém saber qual é o predefinido.
4. **Morada e entidade legal** para o rodapé.
5. **Política de Privacidade** — a página recolhe email de profissionais de saúde e hoje não existe. Não é opcional.
