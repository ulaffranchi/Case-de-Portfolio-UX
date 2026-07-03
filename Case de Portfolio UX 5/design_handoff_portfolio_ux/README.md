# Handoff: Portfólio UX — Ulisses Laffranchi

## Overview
Site de portfólio de Product Design (UX/UI), com uma página inicial (`Portfolio.dc.html`) listando cases, e uma página de case study detalhado (`Case-FoodFlow.dc.html`) sobre o app fictício "FoodFlow" (gestão doméstica de alimentos e doação para ONGs).

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML** — protótipos de alta fidelidade mostrando aparência e comportamento pretendidos, não código de produção para copiar diretamente. A tarefa é **recriar esses designs HTML no ambiente do projeto de destino** (React, Vue, framework estático, etc.), usando os padrões e bibliotecas já estabelecidos nesse projeto — ou, se ainda não existir um ambiente, escolher o framework mais apropriado e implementar os designs lá.

## Fidelity
**Alta fidelidade (hifi)**: cores finais, tipografia, espaçamento e microinterações definidos. O desenvolvedor deve recriar a UI com fidelidade visual usando as bibliotecas/padrões do projeto de destino.

## Screens / Views

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

### Case-FoodFlow.dc.html (tema claro)
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
- `Portfolio.dc.html` — página inicial do portfólio.
- `Case-FoodFlow.dc.html` — case study completo do FoodFlow.
- `support.js` — runtime interno do protótipo (não portar; é infraestrutura do ambiente de design, sem função no app final).
- `assets/` — todas as imagens referenciadas pelas duas páginas.
