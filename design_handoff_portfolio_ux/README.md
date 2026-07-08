# Handoff: Portfólio UX — Ulisses Laffranchi

## Overview
Site de portfólio de Product Design (UX/UI), com uma página inicial (`Portfolio.dc.html`) listando cases, e uma página de case study detalhado (`Case-FoodFlow.dc.html`) sobre o app fictício "FoodFlow" (gestão doméstica de alimentos e doação para ONGs).

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML** — protótipos de alta fidelidade mostrando aparência e comportamento pretendidos, não código de produção para copiar diretamente. A tarefa é **recriar esses designs HTML no ambiente do projeto de destino** (React, Vue, framework estático, etc.), usando os padrões e bibliotecas já estabelecidos nesse projeto — ou, se ainda não existir um ambiente, escolher o framework mais apropriado e implementar os designs lá.

## Fidelity
**Alta fidelidade (hifi)**: cores finais, tipografia, espaçamento e microinterações definidos. O desenvolvedor deve recriar a UI com fidelidade visual usando as bibliotecas/padrões do projeto de destino.

## Screens / Views

### 0. Portfolio — cases (visão geral)
A seção "Cases" da home lista os dois case studies (FoodFlow e Astrea) em cards horizontais roláveis, cada um com imagem de capa, badges de disciplina, título, resumo de uma frase e link "Ver case completo".

### 1. Portfolio.dc.html — Página inicial
- **Propósito**: apresentação pessoal e vitrine de cases de UX.
- **Layout**: fundo escuro full-bleed, glows radiais ambientes roxo/verde no topo e no rodapé (`position:fixed`, `filter:blur`, animação `floatGlow` 14s). Largura máxima de conteúdo 1240px, padding lateral responsivo `clamp(20px,5vw,48px)`.
- **Nav** (`sticky`, topo, z-index 50): logo "U" (badge gradiente roxo, 30×30px, radius 8px) + nome "Ulisses Laffranchi"; links `Cases`, `Sobre`, `Contato` (Contato é um botão pill claro sobre fundo escuro). Fundo com blur (`backdrop-filter:blur(14px)`, `rgba(8,8,10,0.55)`).
- **Hero** (`id="top"`, grid `1.15fr 0.85fr`): título H1 grande (`clamp(34px,6.5vw,60px)`, Space Grotesk 700) com trecho em gradiente de texto roxo (`#c8b8ff → #9b7bff → #7a5cf0`); coluna de mídia com mockup/imagem (`hero-mockup.png`, `hero-bg.jpg` como fundo com máscara de fade).
- **Cases** (`id="cases"`): cabeçalho de seção + trilha/grid de cards de case (inclui o card que linka para `Case-FoodFlow.dc.html`).
- **Sobre** (`id="sobre"`, grid `0.9fr 1.1fr`): eyebrow "Sobre mim" em roxo uppercase, headline "Design que começa pela pergunta certa."
- **Contato** (`id="contato"`): card com borda roxa translúcida e gradiente sutil, glow radial no topo, título "Vamos construir algo juntos?", subtítulo, e ações de contato.
- **Responsivo**: abaixo de 900px o grid do hero e do "sobre" viram coluna única; abaixo de 560px o texto da marca é ocultado e os links de nav reduzem o gap.

### 2. Case-FoodFlow.dc.html — Case study "FoodFlow"
- **Propósito**: contar a história de pesquisa e design do app FoodFlow (evitar desperdício de alimentos e facilitar doação).
- **Layout geral**: fundo lilás claro (`#f1edfb`), texto (`#1e2438`), fonte Manrope; títulos em Space Grotesk; monoespaçada JetBrains Mono para labels/eyebrows. Conteúdo centralizado em `max-width:1100px`, seções separadas por `border-top`.
- **Nav**: link "← Voltar ao portfólio" (aponta para `Portfolio.dc.html`) + label "FoodFlow · UX Case Study".
- **Hero**: badges de tags (UX Research, Design Estratégico, UI · Protótipo — pills roxo claro), H1 "FoodFlow: tornar visível o que está sobrando e fácil de doar.", parágrafo de resumo, bloco "Pergunta norteadora" com borda esquerda roxa, e grid de 4 colunas com metadados do projeto (Meu papel / Cliente / Plataforma / Entregáveis).
- **Cover**: banner de imagem full-width (`assets/cover-banner.png`) com cantos arredondados e sombra roxa.
- **Corpo em 6 temas numerados** (número grande roxo `01`–`06` + título Space Grotesk 38px):
  1. **O cenário atual** — definição do problema.
  2. **Os usuários** — personas (inclui `assets/persona-mariana.png`) e insights de pesquisa.
  3. **A validação** — evidências/dados que sustentam o problema.
  4. **O desafio** — síntese do problema de design.
  5. **A solução** — fluxo do produto e telas de wireframe → alta fidelidade (usa os arquivos `assets/wf-*.png` para wireframes e `assets/tela-*.png` para as telas finais, cobrindo splash, boas-vindas, dashboard/home do doador, novo item, alertas, lista de itens, histórico, decisão de doação, escolha de ONG, confirmação, sucesso, home do receptor, itens recebidos, itens urgentes).
  6. **Teste de usabilidade** — metodologia e resultados do teste.
- **Placeholders**: existe um estilo utilitário `.ph` (fundo hachurado diagonal roxo, borda tracejada) usado para blocos de conteúdo ainda sem asset final — tratar como placeholder a substituir por conteúdo real, não como elemento de UI definitivo.
- **Responsivo** (`≤760px`): nav e paddings reduzidos, grids viram 1 coluna, cover perde radius/sombra e vira full-bleed, tabelas viram scroll horizontal, `.flow-steps` (diagrama horizontal) é substituído por `.flow-steps-list` (lista vertical).

### 3. Case-Astrea.dc.html — Case study "Astrea" (atividade prática de vaga)
- **Propósito**: documentar uma atividade prática de recrutamento (vaga de UX Designer Sênior · Growth) — auditoria e redesenho do fluxo de ativação do Astrea, software de gestão jurídica da Aurum. Não é um produto do próprio candidato; é um exercício de UX sobre um produto real de terceiros, feito para o processo seletivo.
- **Layout geral**: tema claro diferente do FoodFlow — fundo cinza-azulado (`#eef1f5`), texto quase-preto (`#12181f`), tipografia **Poppins** em peso único (sem par de fontes), replicando a identidade visual do documento original entregue no processo seletivo (paleta azul `#1e88e5`, verde de progresso `#0b6b1f → #22c55e`, vermelho de alerta `#ef4444`). Cards brancos com `border-radius:16px` e sombra suave.
- **Nav**: link "← Voltar ao portfólio" + label "Astrea · UX Case Study".
- **Hero**: badges (UX Research, Growth Design, UI · Protótipo hi-fi), eyebrow "Atividade prática · Vaga de UX Designer Sênior — Growth", H1 "Redesenho do fluxo de ativação", 2 cards de destaque (`< ⅓` dos usuários tratam a 1ª publicação; `10 → 7` passos), grid de metadados (Candidato / Vaga / Entregável / Data).
- **Corpo em 10 seções numeradas**, espelhando o índice do documento original entregue para a vaga:
  1. Resumo executivo.
  2. Contexto e objetivo (o que é o Astrea, módulos centrais).
  3. Como investiguei o problema — 8 hipóteses (H1–H8) e tabela de auditoria heurística (Nielsen + leis de Hick/Tesler/Jakob).
  4. Mapa da jornada atual — imagem real do diagrama de fluxo (`assets/astrea-fluxo-jornada-atual.png`).
  5. Métricas (métrica principal, secundárias, momento de valor, público, risco).
  6. Oportunidades de melhoria (3 frentes).
  7. Priorização — framework RICE (explicação dos 4 critérios).
  8. Experimento proposto — racional das decisões, com foto real do esboço de baixa fidelidade em papel (`assets/astrea-wireframe-sketch.png`).
  9. Fluxo atual × proposto — comparação de 10 passos atuais vs. 7 propostos, e 4 princípios comportamentais (Zeigarnik, objetivo gradiente, aversão à perda, Lei de Hick) + Lei de Jakob.
  10. Protótipo de alta fidelidade — 12 cards em coluna única, cada um com badge azul "Passo N" (ou verde para o resultado final), título, e a screenshot real do protótipo dentro de uma caixa cinza-clara, com legenda em fonte monoespaçada abaixo do card.
- **Screenshots reais**: diferente do FoodFlow (telas ilustrativas geradas), as imagens desta seção são capturas de tela reais do protótipo navegável e do produto Astrea, extraídas do PDF de entrega e fornecidas pelo usuário (algumas com dados sensíveis borrados/censurados pelo próprio usuário antes do envio). Tratar como assets finais, não regenerar.
- **Responsivo**: mesmo padrão do FoodFlow (grids viram 1 coluna, nav e paddings reduzidos abaixo de 760px).

## Interactions & Behavior
- Nav do portfólio usa scroll suave (`scroll-behavior:smooth`) para âncoras internas (`#cases`, `#sobre`, `#contato`).
- Navegação entre páginas via link direto (`<a href>`), sem roteador client-side.
- Animação ambiente contínua `floatGlow` (translação + escala, 14s ease-in-out infinite) nos glows de fundo do portfólio.
- Sem estados de loading/erro — são páginas estáticas de apresentação.
- Sem formulários com validação nesta versão.

## State Management
Não há estado de aplicação — ambas as páginas são estáticas/apresentacionais (sem chamadas de API, sem forms controlados).

## Design Tokens

### Portfolio.dc.html (tema escuro)
- Fundo: `#08080a` · Texto: `#f3f3f5` · Texto secundário: `#b6b6bf`
- Roxo de destaque: `#9b7bff` (accent), gradiente `#c8b8ff → #9b7bff → #7a5cf0`
- Fontes: Space Grotesk 700 (títulos), Manrope (corpo)
- Radius: pills `999px`, cards `24px`, badges `8px`

### Case-Astrea.dc.html (tema claro · azul)
- Fundo: `#eef1f5` · Texto: `#12181f` · Texto secundário: `#5b6472` / `#8892a0`
- Azul de destaque: `#1e88e5` (badges, números de seção, links, botões)
- Verde (fluxo proposto / resultado positivo): `#0b6b1f → #22c55e` (gradiente, usado em textos e badges de sucesso)
- Vermelho (heurísticas não conformes / risco): `#ef4444`
- Âmbar (parcial): `#e6a30f`
- Fonte única: **Poppins** (400/600/700/800) — sem par serifada/monoespaçada; labels usam Poppins 700 em vez de mono.
- Cards: brancos, `border-radius:16px`, sombra `0 12px 30px -18px rgba(18,24,31,.15)`, sem gradientes decorativos (visual mais "flat" que o FoodFlow).

### Case-FoodFlow.dc.html (tema claro · roxo)
- Fundo: `#f1edfb` · Texto: `#1e2438` · Texto secundário: `#646c80` / `#8a93a6`
- Roxo de destaque: `#7c3aed` (títulos numerados, badges, borda de citação)
- Fontes: Space Grotesk 700 (títulos), Manrope (corpo), JetBrains Mono (labels/eyebrows uppercase)
- Placeholder pattern: `repeating-linear-gradient(135deg,#efeafc,#efeafc 11px,#e7e0f8 11px,#e7e0f8 22px)`, borda tracejada `rgba(30,36,56,0.12)`
- Radius: cover `24px`, cards de metadado `0` (grid com divisores de 1px), badges `999px`

## Assets
Pasta `assets/` incluída neste pacote:
- `hero-bg.jpg`, `hero-mockup.png`, `ulisses.jpg` / `ulisses.png` — imagens da home do portfólio.
- `cover-banner.png`, `persona-mariana.png` — imagens do case FoodFlow.
- `tela-00` a `tela-13` — telas de alta fidelidade do protótipo FoodFlow (splash, onboarding, dashboards de doador/receptor, fluxo de doação, etc).
- `wf-01` a `wf-14` — wireframes de baixa fidelidade correspondentes às mesmas telas.
Todas as imagens foram geradas/preparadas para este case; tratar como assets finais a re-exportar (ou recriar em maior resolução) no projeto de destino conforme a necessidade da stack.

## Files
- `Portfolio.dc.html` — página inicial do portfólio (agora lista 2 cases).
- `Case-FoodFlow.dc.html` — case study completo do FoodFlow.
- `Case-Astrea.dc.html` — case study completo do Astrea (atividade prática de vaga).
- `support.js` — runtime interno do protótipo (não portar; é infraestrutura do ambiente de design, sem função no app final).
- `assets/` — todas as imagens referenciadas pelas três páginas, incluindo os prefixos `astrea-*` (screenshots reais do protótipo Astrea, capa do case e diagramas) e `tela-*`/`wf-*` (mockups gerados do FoodFlow).
