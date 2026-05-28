# 📋 Requisitos de Desenvolvimento - D&J Technology Landing Page

## 📑 Estrutura de Requisitos

### **ÉPICA 1: Infraestrutura e Configuração Inicial**

#### **Feature 1.1: Configurar Ambiente de Desenvolvimento**

**User Story 1.1.1: Configurar repositório Git com estrutura de pastas**
- **Descrição:** Como desenvolvedor, preciso ter um repositório Git bem estruturado com pastas organizadas para que o projeto seja fácil de manter e escalar.
- **Critérios de Aceitação:**
  - [ ] Repositório inicializado com `.gitignore` apropriado
  - [ ] Pasta `src/` criada para arquivos fonte
  - [ ] Pasta `assets/` criada para imagens, ícones e fontes
  - [ ] Pasta `css/` criada para folhas de estilo
  - [ ] Pasta `js/` criada para scripts JavaScript
  - [ ] Arquivo `README.md` documentando a estrutura do projeto
  - [ ] Arquivo `.gitignore` contendo arquivos temporários e dependências

**User Story 1.1.2: Configurar ferramentas de build e transpilação**
- **Descrição:** Como desenvolvedor, preciso de ferramentas como Webpack ou Vite para fazer build do projeto e otimizar assets.
- **Critérios de Aceitação:**
  - [ ] `package.json` configurado com dependências necessárias
  - [ ] Webpack ou Vite instalado e configurado
  - [ ] Scripts de build criados (`npm run build`, `npm start`)
  - [ ] Minificação de CSS e JavaScript configurada
  - [ ] Source maps configurados para debug
  - [ ] Arquivo `webpack.config.js` ou `vite.config.js` documentado

**User Story 1.1.3: Configurar linters e formatadores de código**
- **Descrição:** Como desenvolvedor, preciso de ferramentas para garantir qualidade e consistência do código.
- **Critérios de Aceitação:**
  - [ ] ESLint instalado e configurado
  - [ ] Prettier instalado e configurado
  - [ ] Pre-commit hooks com Husky configurados
  - [ ] Regras de linting documentadas
  - [ ] Arquivo `.eslintrc.json` criado
  - [ ] Arquivo `.prettierrc` criado

---

#### **Feature 1.2: Estruturar HTML Base**

**User Story 1.2.1: Criar arquivo HTML principal com head otimizado**
- **Descrição:** Como desenvolvedor, preciso de um arquivo HTML bem estruturado com meta tags, links de fontes e scripts organizados.
- **Critérios de Aceitação:**
  - [ ] Arquivo `index.html` criado com DOCTYPE HTML5
  - [ ] Meta charset UTF-8 definido
  - [ ] Meta viewport configurado para responsividade
  - [ ] Meta description e keywords adicionados
  - [ ] Open Graph tags adicionadas para social media
  - [ ] Links para Google Fonts (Geist e Clash Display) inclusos
  - [ ] Link canonical adicionado
  - [ ] Favicon configurado

**User Story 1.2.2: Estruturar seções semânticas do HTML**
- **Descrição:** Como desenvolvedor, preciso que o HTML use tags semânticas corretas para acessibilidade e SEO.
- **Critérios de Aceitação:**
  - [ ] Tag `<header>` com navegação implementada
  - [ ] Tag `<nav>` com links estruturados
  - [ ] Múltiplas tags `<section>` para cada seção da página
  - [ ] Tag `<footer>` implementada
  - [ ] Tags `<h1>`, `<h2>`, `<h3>` usadas hierarquicamente
  - [ ] Tags `<button>` e `<a>` diferenciadas apropriadamente
  - [ ] ARIA labels adicionados onde necessário

---

### **ÉPICA 2: Navegação e Header**

#### **Feature 2.1: Implementar Navegação Fixa e Responsiva**

**User Story 2.1.1: Criar barra de navegação flutuante (Fluid Island)**
- **Descrição:** Como usuário, preciso de uma navegação flutuante no topo que seja moderna, com design em vidro desfocado.
- **Critérios de Aceitação:**
  - [ ] Navegação posicionada fixa com `position: fixed; top: 1.5rem; left: 50%`
  - [ ] Background com efeito de vidro (`backdrop-filter: blur(24px)`)
  - [ ] Borda com opacidade baixa (`border: 1px solid rgba(255, 255, 255, 0.08)`)
  - [ ] Sombra interna implementada (`box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1)`)
  - [ ] Border-radius arredondado (9999px para forma de pílula)
  - [ ] Logo com gradiente (púrpura → ciano)
  - [ ] Padding adequado (1rem)

**User Story 2.1.2: Implementar links de navegação com hover efeito sublinhado**
- **Descrição:** Como usuário, preciso que os links de navegação tenham um efeito visual de sublinha ao passar o mouse.
- **Critérios de Aceitação:**
  - [ ] Links: Features, Pricing, Contact implementados
  - [ ] Pseudo-elemento `::after` criado para sublinha
  - [ ] Sublinha começa com width: 0 e expande ao hover
  - [ ] Transição suave com cubic-bezier(0.32, 0.72, 0, 1)
  - [ ] Duração de 500ms
  - [ ] Cor do gradiente consistente (púrpura → ciano)
  - [ ] Links sem underline padrão

**User Story 2.1.3: Implementar botão hamburger responsivo com animação morph**
- **Descrição:** Como usuário mobile, preciso de um menu hamburger que se transforma em X ao clicar.
- **Critérios de Aceitação:**
  - [ ] Hamburger visível apenas em dispositivos menores (`display: none` em desktop)
  - [ ] 3 linhas (`<span>`) com espaçamento consistente
  - [ ] Primeira linha rotaciona 45° ao ativar: `rotate(45deg) translate(8px, 8px)`
  - [ ] Segunda linha desaparece: `opacity: 0`
  - [ ] Terceira linha rotaciona -45°: `rotate(-45deg) translate(6px, -6px)`
  - [ ] Transição suave (700ms, cubic-bezier)
  - [ ] Estado `active` gerenciado com classe CSS
  - [ ] JavaScript event listener para toggle de classe

**User Story 2.1.4: Implementar CTA button com ícone aninhado**
- **Descrição:** Como usuário, preciso que o botão principal tenha um ícone com efeito de movimento ao passar o mouse.
- **Critérios de Aceitação:**
  - [ ] Botão com classe `cta-button`
  - [ ] Ícone (seta) dentro de div circular
  - [ ] Ao hover, ícone translada `translate(2px, -2px)` e escala `scale(1.08)`
  - [ ] Background do ícone muda de opacidade
  - [ ] Cor do ícone: `#c4b5fd` (púrpura claro)
  - [ ] Ao click, botão escala para `scale(0.98)` (feedback tátil)
  - [ ] Bordas arredondadas (9999px)
  - [ ] Padding: `1rem 1.75rem`

**User Story 2.1.5: Tornar navegação responsiva em mobile**
- **Descrição:** Como usuário mobile, preciso que a navegação se adapte ao tamanho da tela.
- **Critérios de Aceitação:**
  - [ ] Em telas < 768px: hamburguer visível, links ocultos
  - [ ] Em telas ≥ 768px: hamburger oculto, links visíveis
  - [ ] Logo sempre visível
  - [ ] Botão CTA redimensiona em mobile (icon-only option)
  - [ ] Sem horizontal scrolling
  - [ ] Padding ajustado para mobile

---

### **ÉPICA 3: Seção Hero**

#### **Feature 3.1: Implementar Hero Section com Conteúdo Principal**

**User Story 3.1.1: Criar layout assimétrico do hero (Asymmetrical Bento)**
- **Descrição:** Como usuário, preciso de um hero visualmente impactante com conteúdo à esquerda e cards flutuantes à direita.
- **Critérios de Aceitação:**
  - [ ] Grid com 1 coluna mobile, 2 colunas desktop (`grid-template-columns: 1fr` em mobile, `1.2fr 1fr` em 1024px+)
  - [ ] Gap entre conteúdo e visual: 4rem (mobile), 6rem (desktop)
  - [ ] Padding: 8rem 2rem (vertical), 5% (horizontal)
  - [ ] Altura mínima: 100dvh (mobile viewport safe)
  - [ ] Conteúdo alinhado verticalmente (`align-content: center`)
  - [ ] Max-width: 1400px e margin auto (centralizado)

**User Story 3.1.2: Implementar eyebrow text e heading gradiente**
- **Descrição:** Como usuário, preciso de um título de impacto com texto descritivo pequeno acima.
- **Critérios de Aceitação:**
  - [ ] Eyebrow com classe `eyebrow` criada
  - [ ] Eyebrow texto: "Agile Estimation Perfected"
  - [ ] Background: `rgba(147, 112, 219, 0.12)` (púrpura com baixa opacidade)
  - [ ] Color: `#c4b5fd` (púrpura claro)
  - [ ] Padding: `0.5rem 1rem`
  - [ ] Font-size: 0.75rem
  - [ ] Letter-spacing: 0.15em
  - [ ] Text-transform: uppercase
  - [ ] Border-radius: 9999px (pílula)
  - [ ] Margin-bottom: 1rem
  - [ ] H1 com gradiente: `linear-gradient(135deg, #fff 0%, #d0d0d0 100%)`
  - [ ] H1 com `-webkit-background-clip: text` e `-webkit-text-fill-color: transparent`
  - [ ] Font-family: 'Clash Display' (bold typography)
  - [ ] Font-size: clamp(2.5rem, 8vw, 5.5rem)
  - [ ] Line-height: 1.1
  - [ ] Letter-spacing: -0.02em

**User Story 3.1.3: Adicionar descrição do valor principal (hero description)**
- **Descrição:** Como usuário, preciso entender rapidamente o valor da D&J Technology.
- **Critérios de Aceitação:**
  - [ ] Texto descritivo com classe `hero-description`
  - [ ] Font-size: clamp(1rem, 3vw, 1.25rem)
  - [ ] Color: `#a0a0a0` (cinza médio)
  - [ ] Max-width: 600px
  - [ ] Line-height: 1.8
  - [ ] Margin-bottom: 3rem
  - [ ] Texto contém: "Ad-free. No signup required. Jira & Azure DevOps integrated. Made by Scrum Masters."

**User Story 3.1.4: Implementar botões de CTA no hero**
- **Descrição:** Como usuário, preciso de botões de ação claros para começar ou ver demo.
- **Critérios de Aceitação:**
  - [ ] Dois botões: "Start Estimating Now" (primário) e "Watch Demo" (secundário)
  - [ ] Container com `display: flex; gap: 1rem; flex-wrap: wrap`
  - [ ] Botão primário com classe `cta-button-primary`
  - [ ] Gradiente no botão primário: `linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(34, 211, 238, 0.2) 100%)`
  - [ ] Hover no primário: gradiente mais intenso + box-shadow
  - [ ] Botão secundário com estilo contraste
  - [ ] Ambos com ícone seta aninhado
  - [ ] Padding: `1rem 1.75rem`
  - [ ] Border-radius: 9999px
  - [ ] Transição: 700ms cubic-bezier(0.32, 0.72, 0, 1)

**User Story 3.1.5: Adicionar badges de confiança com ícones**
- **Descrição:** Como usuário, preciso confirmar os diferenciais principais da ferramenta rapidamente.
- **Critérios de Aceitação:**
  - [ ] 3 badges: "100% Ad-Free", "Zero Paywalls", "Jira & Azure"
  - [ ] Container com `display: flex; gap: 1.5rem; flex-wrap: wrap`
  - [ ] Border-top separando badges: `1px solid rgba(255, 255, 255, 0.1)`
  - [ ] Padding-top: 2rem, margin-top: 2rem
  - [ ] Cada badge com ícone emoji e texto
  - [ ] Font-size: 0.9rem
  - [ ] Color: `#a0a0a0`
  - [ ] Badge-icon: font-size 1.3rem

---

#### **Feature 3.2: Implementar Cards Flutuantes (Z-Axis Cascade)**

**User Story 3.2.1: Criar cards com efeito de profundidade 3D**
- **Descrição:** Como usuário, preciso de cards flutuantes que dão sensação de profundidade e movimento.
- **Critérios de Aceitação:**
  - [ ] Container `hero-visual` com `display: none` (hidden em mobile)
  - [ ] Em 1024px+: `display: block` com `position: relative; height: 400px`
  - [ ] 3 hero-cards criadas
  - [ ] Cada card com `position: absolute`
  - [ ] Background: `rgba(255, 255, 255, 0.05)`
  - [ ] Backdrop-filter: `blur(12px)`
  - [ ] Border: `1px solid rgba(255, 255, 255, 0.1)`
  - [ ] Border-radius: `1.5rem`
  - [ ] Padding: `2rem`
  - [ ] Box-shadow inset: `inset 0 1px 1px rgba(255, 255, 255, 0.08)`

**User Story 3.2.2: Implementar animação de flutuação (float animation)**
- **Descrição:** Como usuário, preciso que os cards tenham um movimento suave e contínuo.
- **Critérios de Aceitação:**
  - [ ] Keyframes `floatCard` criados (0%, 50%, 100%)
  - [ ] Card 1: translateY(0) no início/fim, translateY(-16px) no meio
  - [ ] Card 2: mesmo movimento com delay 0.3s
  - [ ] Card 3: mesmo movimento com delay 0.6s
  - [ ] Duração: 6s
  - [ ] Timing: ease-in-out
  - [ ] Rotation mantida durante animação (CSS variable `--rotation`)
  - [ ] Will-change não necessário para y-axis (usar transform)

**User Story 3.2.3: Posicionar cards com cascata visual**
- **Descrição:** Como usuário, preciso que os cards estejam sobrepostos em uma ordem visual clara.
- **Critérios de Aceitação:**
  - [ ] Card 1: top: 0, left: 0, z-index: 3, width: 320px, rotation: -2deg
  - [ ] Card 2: top: 80px, left: 120px, z-index: 2, width: 300px, rotation: 1deg
  - [ ] Card 3: top: 140px, left: 220px, z-index: 1, width: 280px, rotation: -1.5deg
  - [ ] Cards ligeiramente sobrepostos (offset visual)
  - [ ] Cada card rotacionado para quebrar rigidez

**User Story 3.2.4: Adicionar conteúdo aos hero cards**
- **Descrição:** Como usuário, preciso que os cards mostrem funcionalidades principais.
- **Critérios de Aceitação:**
  - [ ] Card 1: "📊 Live Voting" + "Real-time estimation with async reveal and discussion rounds."
  - [ ] Card 2: "📈 Analytics" + "Track velocity trends over time with detailed insights."
  - [ ] Card 3: "🔗 Sync" + "Auto-sync estimates back to Jira and Azure DevOps."
  - [ ] Cada card com `<h4>` (heading pequeno)
  - [ ] Color de h4: `#9370db` (púrpura)
  - [ ] Font-size h4: 0.85rem
  - [ ] Letter-spacing: 0.1em
  - [ ] Text-transform: uppercase
  - [ ] Margin-bottom: 0.8rem
  - [ ] Cada card com `<p>` descritivo
  - [ ] Font-size p: 0.9rem
  - [ ] Color p: `#d0d0d0`
  - [ ] Line-height: 1.6

**User Story 3.2.5: Aplicar scroll reveal aos cards**
- **Descrição:** Como usuário, preciso que os cards apareçam suavemente quando a página carrega.
- **Critérios de Aceitação:**
  - [ ] Classe `reveal` adicionada aos cards
  - [ ] Estado inicial: `opacity: 0; transform: translateY(40px) blur(8px)`
  - [ ] Estado ativo: `opacity: 1; transform: translateY(0) blur(0)`
  - [ ] Transição: 1000ms cubic-bezier(0.32, 0.72, 0, 1)
  - [ ] IntersectionObserver implementado em JavaScript
  - [ ] Threshold: 0.15
  - [ ] RootMargin: '0px 0px -100px 0px'

---

### **ÉPICA 4: Seção de Features**

#### **Feature 4.1: Implementar Grid Assimétrico de Features**

**User Story 4.1.1: Criar layout bento assimétrico para features**
- **Descrição:** Como usuário, preciso ver features em um layout dinâmico que chama atenção para os mais importantes.
- **Critérios de Aceitação:**
  - [ ] Container com classe `features-grid`
  - [ ] Mobile (padrão): `grid-template-columns: 1fr` (1 coluna)
  - [ ] Tablet (≥768px): `grid-template-columns: repeat(2, 1fr)` (2 colunas)
  - [ ] Desktop (≥1024px): `grid-template-columns: repeat(3, 1fr)` (3 colunas)
  - [ ] Gap: 2rem (mobile), 2.5rem (tablet/desktop)
  - [ ] Feature 2 (Integration) ocupa 2 colunas em desktop: `grid-column: span 2`
  - [ ] Outras features: 1 coluna
  - [ ] Seção padding: 8rem 2rem (vertical/horizontal)
  - [ ] Max-width: 1400px, margin: 0 auto

**User Story 4.1.2: Implementar header da seção features**
- **Descrição:** Como usuário, preciso entender que esta seção é sobre funcionalidades.
- **Critérios de Aceitação:**
  - [ ] Container `section-header` com text-align: center
  - [ ] Margin-bottom: 5rem
  - [ ] Eyebrow: "Everything You Need"
  - [ ] H2: "Powerful Features, Built Simple"
  - [ ] Eyebrow com justify-content: center (se aplicável)

---

#### **Feature 4.2: Implementar Cards de Feature com Double-Bezel**

**User Story 4.2.1: Criar estrutura de feature card com arquitetura Double-Bezel**
- **Descrição:** Como desenvolvedor, preciso que cada card tenha a arquitetura de dupla moldura para aparência premium.
- **Critérios de Aceitação:**
  - [ ] Card com classe `feature-card`
  - [ ] Background: `rgba(0, 0, 0, 0.3)` (shell externa)
  - [ ] Border: `1px solid rgba(255, 255, 255, 0.06)` (hairline)
  - [ ] Border-radius: `2rem` (squircle premium)
  - [ ] Padding: `2rem` (espaço interno)
  - [ ] Position: relative (para pseudo-elemento)
  - [ ] Pseudo-elemento `::before` criado
  - [ ] ::before inset: `1px` (núcleo interno)
  - [ ] ::before border-radius: `calc(2rem - 1px)` (concêntrico)
  - [ ] ::before background: gradiente púrpura-ciano com baixa opacidade
  - [ ] ::before opacity: 0 (padrão), 1 (hover)
  - [ ] ::before pointer-events: none
  - [ ] Transição suave (700ms cubic-bezier)

**User Story 4.2.2: Implementar hover effect com elevação**
- **Descrição:** Como usuário, preciso que os cards subam ao passar o mouse.
- **Critérios de Aceitação:**
  - [ ] Hover: border-color muda para `rgba(147, 112, 219, 0.3)` (púrpura)
  - [ ] Hover: transform translateY(-8px) (eleva 8 pixels)
  - [ ] Hover: ::before opacity muda para 1 (mostra gradiente)
  - [ ] Transição: 700ms cubic-bezier(0.32, 0.72, 0, 1)
  - [ ] Will-change: transform (otimização)
  - [ ] Cursor: pointer

**User Story 4.2.3: Adicionar conteúdo aos feature cards**
- **Descrição:** Como usuário, preciso ver o ícone, título e descrição de cada feature.
- **Critérios de Aceitação:**
  - [ ] 6 features criadas com ícones emoji:
    - 1. 🎯 Real-Time Planning Poker
    - 2. 🔗 Seamless Jira & Azure Integration
    - 3. 📈 Velocity & Analytics
    - 4. 🔐 30-90 Day Session History
    - 5. 🎨 Customizable Decks
    - 6. 📱 Mobile-First Design
  - [ ] Feature-icon: font-size 2.5rem, margin-bottom 1.2rem
  - [ ] H3 color: `#fff`
  - [ ] H3 margin-bottom: 1rem
  - [ ] P color: `#a0a0a0`
  - [ ] P line-height: 1.7
  - [ ] Feature-card-content com position: relative, z-index: 2

**User Story 4.2.4: Aplicar scroll reveal aos feature cards**
- **Descrição:** Como usuário, preciso que os cards apareçam suavemente ao scroll.
- **Critérios de Aceitação:**
  - [ ] Classe `reveal` em cada feature-card
  - [ ] Estado inicial: `opacity: 0; transform: translateY(40px) blur(8px)`
  - [ ] Estado ativo: `opacity: 1; transform: translateY(0) blur(0)`
  - [ ] Transição: 1000ms cubic-bezier(0.32, 0.72, 0, 1)
  - [ ] Observador IntersectionObserver gerencia entrada

---

### **ÉPICA 5: Seção de Comparação**

#### **Feature 5.1: Implementar Comparação com Competidores**

**User Story 5.1.1: Criar layout editorial split para comparação**
- **Descrição:** Como usuário, preciso ver claramente como D&J Technology se compara com concorrentes.
- **Critérios de Aceitação:**
  - [ ] Container `comparison-container` com grid
  - [ ] Mobile: `grid-template-columns: 1fr` (stack vertical)
  - [ ] Desktop (≥1024px): `grid-template-columns: 1fr 1.2fr` (split)
  - [ ] Gap: 6rem em desktop
  - [ ] Align-items: center
  - [ ] Seção padding: 8rem 2rem
  - [ ] Background: `rgba(147, 112, 219, 0.03)`
  - [ ] Border-top e border-bottom: `1px solid rgba(147, 112, 219, 0.1)`

**User Story 5.1.2: Implementar conteúdo de comparação com destaques**
- **Descrição:** Como usuário, preciso que os pontos-chave sejam destacados visualmente.
- **Critérios de Aceitação:**
  - [ ] Eyebrow: "Why Teams Switch"
  - [ ] H2: "Stop Settling for Second-Best"
  - [ ] Parágrafo introdutório com cor `#a0a0a0`
  - [ ] 3 blocos de destaque com classe `comparison-highlight`
  - [ ] Cada bloco com background: `rgba(147, 112, 219, 0.1)`
  - [ ] Border-left: `3px solid #9370db`
  - [ ] Border-radius: `0.5rem`
  - [ ] Padding: `1.5rem`
  - [ ] Margin-bottom: 2rem
  - [ ] Icon (✓) com font-size 1.5rem
  - [ ] P color: `#d0d0d0`
  - [ ] Font-size: 0.95rem

**User Story 5.1.3: Estruturar destaques de comparação**
- **Descrição:** Como usuário, preciso que as comparações sejam claras e memoráveis.
- **Critérios de Aceitação:**
  - [ ] Destaque 1: "Genuinely Free — Everything you need for estimation. No participant limits. No feature paywalls on core functionality."
  - [ ] Destaque 2: "Zero Ads, Always — Focus your team. No retargeting ads, no distractions during sprint planning."
  - [ ] Destaque 3: "No Signup Hell — Share a link. Participants join instantly. Only the Scrum Master needs an account for persistence and pro features."
  - [ ] Cada destaque com ícone ✓
  - [ ] Textos em bold onde apropriado

---

### **ÉPICA 6: Seção de Integrações**

#### **Feature 6.1: Showcase de Integrações**

**User Story 6.1.1: Criar grid de integrações com hover effect**
- **Descrição:** Como usuário, preciso ver todas as integrações disponíveis de forma clara.
- **Critérios de Aceitação:**
  - [ ] Container `integrations-container` com max-width 1400px
  - [ ] Section-header com eyebrow "Connected Workflows"
  - [ ] H2: "Works With Your Tools"
  - [ ] Margin-bottom: 5rem
  - [ ] Grid com `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
  - [ ] Gap: 2rem
  - [ ] Margin-top: 4rem
  - [ ] Seção padding: 8rem 2rem

**User Story 6.1.2: Implementar cards de integração com hover elevation**
- **Descrição:** Como usuário, preciso que os cards de integração tenham feedback visual ao hover.
- **Critérios de Aceitação:**
  - [ ] 4 integrações: Jira Cloud, Azure DevOps, Slack, GitHub Issues
  - [ ] Card com background: `rgba(255, 255, 255, 0.02)`
  - [ ] Border: `1px solid rgba(255, 255, 255, 0.08)`
  - [ ] Border-radius: `1.5rem`
  - [ ] Padding: `3rem 2rem`
  - [ ] Text-align: center
  - [ ] Position: relative (para pseudo-elemento)
  - [ ] Pseudo-elemento `::after` para gradiente topo
  - [ ] ::after: altura 1px, gradiente horizontal, opacity 0 (padrão)
  - [ ] Hover: background `rgba(147, 112, 219, 0.08)`, border-color `rgba(147, 112, 219, 0.3)`
  - [ ] Hover: transform translateY(-12px)
  - [ ] Hover: ::after opacity 1

**User Story 6.1.3: Adicionar conteúdo aos cards de integração**
- **Descrição:** Como usuário, preciso entender o que cada integração oferece.
- **Critérios de Aceitação:**
  - [ ] Card 1: "🔷 Jira Cloud" + "Pull stories, auto-update story points, sync estimates in real-time."
  - [ ] Card 2: "☁️ Azure DevOps" + "Full integration with Azure Boards. Estimate work items and sync estimates back."
  - [ ] Card 3: "💬 Slack" + "Get notifications when estimation sessions complete. Share results with your team."
  - [ ] Card 4: "🐙 GitHub Issues" + "Estimate GitHub Issues directly. Sync complexity levels across your workflow."
  - [ ] Icon: font-size 3rem, margin-bottom 1.5rem
  - [ ] H3: font-size 1.2rem, margin-bottom 0.8rem
  - [ ] P: font-size 0.9rem, color `#999`
  - [ ] Classe `reveal` em cada card

---

### **ÉPICA 7: Seção de Preços**

#### **Feature 7.1: Implementar Pricing Cards com Double-Bezel**

**User Story 7.1.1: Criar grid de pricing com card destaque**
- **Descrição:** Como usuário, preciso ver três planos de preço de forma clara e destacar o mais popular.
- **Critérios de Aceitação:**
  - [ ] Container `pricing-container` com max-width 1400px
  - [ ] Section-header com eyebrow "Transparent Pricing"
  - [ ] H2: "Plans for Every Team"
  - [ ] Grid com 1 coluna mobile, 3 colunas em 768px+
  - [ ] Gap: 2.5rem
  - [ ] Margin-top: 4rem
  - [ ] Seção padding: 8rem 2rem
  - [ ] Background: `rgba(34, 211, 238, 0.02)`
  - [ ] Border-top: `1px solid rgba(34, 211, 238, 0.1)`

**User Story 7.1.2: Implementar estrutura de pricing card com Double-Bezel**
- **Descrição:** Como desenvolvedor, preciso que os pricing cards tenham a arquitetura premium Double-Bezel.
- **Critérios de Aceitação:**
  - [ ] Card com classe `pricing-card`
  - [ ] Background: `rgba(0, 0, 0, 0.2)` (shell externa)
  - [ ] Border: `1px solid rgba(255, 255, 255, 0.08)`
  - [ ] Border-radius: `2rem`
  - [ ] Padding: `3rem`
  - [ ] Pseudo-elemento `::before` com inset: `1px`
  - [ ] ::before border-radius: `calc(2rem - 1px)`
  - [ ] ::before background: gradiente púrpura-ciano com opacidade 8%
  - [ ] ::before opacity: 0 (padrão), 1 (hover)
  - [ ] Hover: border-color `rgba(147, 112, 219, 0.3)`
  - [ ] Hover: transform translateY(-8px)
  - [ ] Card Pro com classe `featured`
  - [ ] Pro em mobile: scale 1
  - [ ] Pro em desktop (≥768px): scale 1.05
  - [ ] Pro border-color: `rgba(147, 112, 219, 0.4)`

**User Story 7.1.3: Adicionar preços e períodos**
- **Descrição:** Como usuário, preciso ver o preço claramente para cada plano.
- **Critérios de Aceitação:**
  - [ ] Plano 1 - Starter: "Free" / "Forever"
  - [ ] Plano 2 - Pro: "$99" / "per month, billed annually"
  - [ ] Plano 3 - Enterprise: "Custom" / "Contact sales"
  - [ ] Price com font-size 3rem
  - [ ] Price com gradiente: `linear-gradient(135deg, #9370db 0%, #22d3ee 100%)`
  - [ ] Price com `-webkit-background-clip: text` e `-webkit-text-fill-color: transparent`
  - [ ] Price margin: 2rem 0 1rem
  - [ ] Price-period: font-size 1rem, color `#999`, font-weight 400

**User Story 7.1.4: Implementar lista de features com checkmarks**
- **Descrição:** Como usuário, preciso ver quais features cada plano oferece.
- **Critérios de Aceitação:**
  - [ ] Container `pricing-features` com list-style none
  - [ ] Border-top e border-bottom: `1px solid rgba(255, 255, 255, 0.08)`
  - [ ] Margin: 2.5rem 0
  - [ ] Cada li com padding: 1rem 0, display: flex, gap: 0.8rem
  - [ ] Li color: `#a0a0a0`
  - [ ] Li font-size: 0.95rem
  - [ ] ::before content: "✓"
  - [ ] ::before color: `#4ade80` (verde)
  - [ ] ::before font-weight: bold
  - [ ] ::before font-size: 1.1rem
  - [ ] ::before flex-shrink: 0

**User Story 7.1.5: Adicionar botão CTA em cada pricing card**
- **Descrição:** Como usuário, preciso iniciar uma ação para cada plano.
- **Critérios de Aceitação:**
  - [ ] Botão por card com classe `cta-button`
  - [ ] Starter: "Start Free"
  - [ ] Pro: "Start 14-Day Trial"
  - [ ] Enterprise: "Contact Sales"
  - [ ] Width: 100% em cards
  - [ ] Justify-content: center
  - [ ] Margin-top: 2rem
  - [ ] Starter e Pro com classe `cta-button-primary`
  - [ ] Enterprise sem classe primária

**User Story 7.1.6: Estruturar lista de features de cada plano**
- **Descrição:** Como usuário, preciso saber exatamente o que cada plano oferece.
- **Critérios de Aceitação:**
  - [ ] Starter features:
    - Unlimited planning sessions
    - Up to 10 participants
    - Basic integrations
    - 30-day history
    - Community support
  - [ ] Pro features:
    - Unlimited participants
    - Advanced Jira + Azure DevOps
    - 90-day history + export
    - Velocity analytics
    - Custom decks & workflows
    - Team management
    - Priority support
  - [ ] Enterprise features:
    - Everything in Pro
    - SSO & SAML auth
    - Self-hosted option
    - Audit logs & compliance
    - SLA guarantees
    - Dedicated support
    - Custom integrations

---

### **ÉPICA 8: CTA Final e Footer**

#### **Feature 8.1: Implementar Final CTA Section**

**User Story 8.1.1: Criar seção final com gradiente**
- **Descrição:** Como usuário, preciso de um último estímulo para iniciar com D&J Technology.
- **Critérios de Aceitação:**
  - [ ] Section com classe `final-cta`
  - [ ] Padding: 10rem 2rem (grande espaço)
  - [ ] Text-align: center
  - [ ] Background: `linear-gradient(135deg, rgba(147, 112, 219, 0.1) 0%, rgba(34, 211, 238, 0.08) 100%)`
  - [ ] Border-top: `1px solid rgba(147, 112, 219, 0.2)`
  - [ ] Classe `reveal` para scroll animation
  - [ ] H2: "Transform Your Sprint Planning Today"
  - [ ] H2 margin-bottom: 1.5rem
  - [ ] H2 font-size: clamp(2rem, 6vw, 3.5rem)
  - [ ] P: "Join agile teams who've ditched ads, paywalls, and unnecessary complexity."
  - [ ] P font-size: 1.1rem
  - [ ] P color: `#a0a0a0`
  - [ ] P margin-bottom: 3rem
  - [ ] P max-width: 600px, margin-left/right auto
  - [ ] Botão: "Get Started Free — No Credit Card"
  - [ ] Botão font-size: 1.05rem
  - [ ] Botão padding: 1.25rem 2.5rem

---

#### **Feature 8.2: Implementar Footer**

**User Story 8.2.1: Criar footer com links e informações**
- **Descrição:** Como usuário, preciso de informações legais e de contato no rodapé.
- **Critérios de Aceitação:**
  - [ ] Footer com padding: 3rem 2rem
  - [ ] Border-top: `1px solid rgba(255, 255, 255, 0.05)`
  - [ ] Text-align: center
  - [ ] Color: `#666`
  - [ ] Font-size: 0.9rem
  - [ ] Texto: "© 2026 D&J Technology. All rights reserved."
  - [ ] Links: Privacy, Terms, Contact
  - [ ] Link separator: |
  - [ ] Link color: `#9370db`
  - [ ] Link hover color: `#c4b5fd`
  - [ ] Link text-decoration: none
  - [ ] Link transição: 500ms cubic-bezier(0.32, 0.72, 0, 1)
  - [ ] Email: hello@djtech.com

---

### **ÉPICA 9: Background e Efeitos Visuais**

#### **Feature 9.1: Implementar Ethereal Glass Background**

**User Story 9.1.1: Criar background com gradientes radiais e ruído**
- **Descrição:** Como desenvolvedor, preciso de um background premium que complemente o design.
- **Critérios de Aceitação:**
  - [ ] Body com background: `#050505` (Vantablack)
  - [ ] Body pseudo-elemento `::before` com position: fixed
  - [ ] ::before inset: 0 (tela inteira)
  - [ ] ::before background com dois radial-gradients:
    - 1. Circle em 20% 50% com `rgba(147, 112, 219, 0.08)` até transparent
    - 2. Circle em 80% 80% com `rgba(34, 211, 238, 0.06)` até transparent
  - [ ] ::before pointer-events: none
  - [ ] ::before z-index: 1
  - [ ] Body pseudo-elemento `::after` com position: fixed
  - [ ] ::after inset: 0
  - [ ] ::after background-image: SVG com ruído (fractal noise)
  - [ ] ::after opacity: 0.03 (film grain sutil)
  - [ ] ::after pointer-events: none
  - [ ] ::after z-index: 2

**User Story 9.1.2: Implementar z-index hierarchy**
- **Descrição:** Como desenvolvedor, preciso que elementos apareçam em ordem correta.
- **Critérios de Aceitação:**
  - [ ] Body ::before: z-index 1 (gradientes)
  - [ ] Body ::after: z-index 2 (ruído)
  - [ ] Section, main, nav: z-index 10 (conteúdo acima)
  - [ ] Navegação: z-index 9999 (sempre no topo)
  - [ ] Hamburger: z-index 10001 (acima da nav)

---

### **ÉPICA 10: Animações e Interatividade**

#### **Feature 10.1: Implementar Scroll Reveal com IntersectionObserver**

**User Story 10.1.1: Criar classe reveal com animação de entrada**
- **Descrição:** Como desenvolvedor, preciso que elementos apareçam suavemente ao scroll.
- **Critérios de Aceitação:**
  - [ ] Classe `.reveal` com estado inicial:
    - opacity: 0
    - transform: translateY(40px) blur(8px)
  - [ ] Classe `.reveal.active` com estado final:
    - opacity: 1
    - transform: translateY(0) blur(0)
  - [ ] Transição: 1000ms cubic-bezier(0.32, 0.72, 0, 1)
  - [ ] Media query para `prefers-reduced-motion: reduce`

**User Story 10.1.2: Implementar IntersectionObserver em JavaScript**
- **Descrição:** Como desenvolvedor, preciso que a animação ocorra quando elemento entra na viewport.
- **Critérios de Aceitação:**
  - [ ] IntersectionObserver criado com options:
    - threshold: 0.15
    - rootMargin: '0px 0px -100px 0px'
  - [ ] Observador monitora todos os elementos com classe `.reveal`
  - [ ] Ao entrar na viewport, classe `active` é adicionada
  - [ ] Element é desobservado após animar
  - [ ] Script carregado no fim do HTML antes de `</body>`

---

#### **Feature 10.2: Implementar Hamburger Morph Animation**

**User Story 10.2.1: Animar linhas do hamburger**
- **Descrição:** Como desenvolvedor, preciso que o ícone hamburger se transforme em X.
- **Critérios de Aceitação:**
  - [ ] Hamburger com 3 linhas (`<span>`)
  - [ ] Linha 1 (estado ativo): rotate(45deg) translate(8px, 8px)
  - [ ] Linha 2 (estado ativo): opacity: 0
  - [ ] Linha 3 (estado ativo): rotate(-45deg) translate(6px, -6px)
  - [ ] Transição: 700ms cubic-bezier(0.32, 0.72, 0, 1)
  - [ ] Transform-origin: center
  - [ ] JavaScript event listener no hamburger
  - [ ] Toggle de classe `active` ao click

**User Story 10.2.2: Implementar toggle com JavaScript**
- **Descrição:** Como desenvolvedor, preciso que o hamburger toggled a classe active.
- **Critérios de Aceitação:**
  - [ ] Seletor: `document.querySelector('.hamburger')`
  - [ ] Event listener: `click`
  - [ ] Ação: `classList.toggle('active')`
  - [ ] Verificação: console.log para debug (remover em produção)

---

### **ÉPICA 11: Otimização de Performance e Acessibilidade**

#### **Feature 11.1: Implementar Boas Práticas de Performance**

**User Story 11.1.1: Otimizar animations com transform e opacity**
- **Descrição:** Como desenvolvedor, preciso que animações não causem reflow/repaint.
- **Critérios de Aceitação:**
  - [ ] Todas as animações usam `transform` (translateX, translateY, rotate, scale)
  - [ ] Todas as animações usam `opacity`
  - [ ] Nenhuma animação em: width, height, top, left, padding, margin
  - [ ] Will-change: transform em elementos animados
  - [ ] Will-change removido após animação
  - [ ] GPU acceleration verificada em DevTools

**User Story 11.1.2: Gerenciar backdrop-blur sem performance impact**
- **Descrição:** Como desenvolvedor, preciso que backdrop-blur não cause frame drops.
- **Critérios de Aceitação:**
  - [ ] Backdrop-blur apenas em elementos fixed/sticky
  - [ ] Navbar tem backdrop-filter: blur(24px)
  - [ ] Nenhum backdrop-blur em elementos scrolláveis
  - [ ] Performance testada em mobile (60fps target)

**User Story 11.1.3: Implementar lazy loading para fontes**
- **Descrição:** Como desenvolvedor, preciso que fontes não bloqueiem renderização.
- **Critérios de Aceitação:**
  - [ ] Google Fonts com `rel="preconnect"`
  - [ ] `crossorigin` attribute adicionado
  - [ ] Font-family fallback para system fonts
  - [ ] Geist: -apple-system, BlinkMacSystemFont, sans-serif
  - [ ] Clash Display: fallback para sans-serif pesada

---

#### **Feature 11.2: Implementar Acessibilidade**

**User Story 11.2.1: Adicionar ARIA labels e roles**
- **Descrição:** Como usuário com deficiência visual, preciso que a página seja acessível com screen reader.
- **Critérios de Aceitação:**
  - [ ] Hamburger com `aria-label="Toggle menu"`
  - [ ] Botões com texto claro (não só ícones)
  - [ ] Headings em hierarquia correta (h1, h2, h3)
  - [ ] Links com text descritivo
  - [ ] Imagens com alt text (quando aplicável)
  - [ ] Formulários com labels associados (quando implementados)

**User Story 11.2.2: Garantir contraste de cores**
- **Descrição:** Como usuário com baixa visão, preciso de contraste adequado entre texto e background.
- **Critérios de Aceitação:**
  - [ ] Texto branco (#fff, #f5f5f5) sobre fundo escuro: ratio ≥ 4.5:1
  - [ ] Texto cinza (#a0a0a0) sobre fundo escuro: verificar ratio ≥ 3:1
  - [ ] Botões com contraste suficiente
  - [ ] Gradientes não prejudicam legibilidade
  - [ ] Teste com ferramentas como WebAIM Contrast Checker

**User Story 11.2.3: Implementar keyboard navigation**
- **Descrição:** Como usuário que usa teclado, preciso navegar toda a página.
- **Critérios de Aceitação:**
  - [ ] Tab order lógico na página
  - [ ] Botões acessíveis via Enter/Space
  - [ ] Links acessíveis via Enter
  - [ ] Focus visible indicators (outline ou similar)
  - [ ] Skip to main content link (opcional mas recomendado)

**User Story 11.2.4: Implementar mobile viewport seguro**
- **Descrição:** Como usuário mobile, preciso que a página não tenha viewport jumping.
- **Critérios de Aceitação:**
  - [ ] Meta viewport: `width=device-width, initial-scale=1.0, viewport-fit=cover`
  - [ ] Min-height: 100dvh (dynamic viewport height)
  - [ ] Sem `height: 100vh` em seções (causa overflow em mobile)
  - [ ] Padding/margin adequado para notch e status bar

---

### **ÉPICA 12: Testes e Validação**

#### **Feature 12.1: Validar HTML e CSS**

**User Story 12.1.1: Passar em validação W3C HTML**
- **Descrição:** Como desenvolvedor, preciso que o HTML seja válido.
- **Critérios de Aceitação:**
  - [ ] Validar em https://validator.w3.org/
  - [ ] Sem erros, apenas warnings (se algum)
  - [ ] DOCTYPE HTML5 correto
  - [ ] Tags abertas/fechadas corretamente
  - [ ] Atributos válidos em todas as tags

**User Story 12.1.2: Validar CSS**
- **Descrição:** Como desenvolvedor, preciso que o CSS não tenha erros.
- **Critérios de Aceitação:**
  - [ ] Validar em https://jigsaw.w3.org/css-validator/
  - [ ] Sem erros críticos
  - [ ] Browser prefixes verificados (-webkit-, -moz-)
  - [ ] Fallbacks para propriedades experimentais

---

#### **Feature 12.2: Testar Responsividade**

**User Story 12.2.1: Testar em breakpoints principais**
- **Descrição:** Como desenvolvedor, preciso que o site responda bem em todos os tamanhos.
- **Critérios de Aceitação:**
  - [ ] Mobile (320px): hamburger visível, layout stack vertical
  - [ ] Tablet (768px): 2 colunas grid, nav muda para links
  - [ ] Desktop (1024px+): 3 colunas bento, visual cards aparecem
  - [ ] Large desktop (1400px+): max-width respeitado, layout não expande
  - [ ] Sem horizontal scrolling em nenhum breakpoint
  - [ ] Imagens responsivas (se aplicável)

**User Story 12.2.2: Testar em dispositivos reais**
- **Descrição:** Como desenvolvedor, preciso validar em dispositivos reais.
- **Critérios de Aceitação:**
  - [ ] iPhone SE (375px)
  - [ ] iPhone 14 Pro (393px)
  - [ ] iPad (768px)
  - [ ] Desktop 1920x1080
  - [ ] Edge cases (landscape, foldable)

---

#### **Feature 12.3: Testar Performance**

**User Story 12.3.1: Validar Core Web Vitals**
- **Descrição:** Como desenvolvedor, preciso que a página seja rápida.
- **Critérios de Aceitação:**
  - [ ] LCP (Largest Contentful Paint): < 2.5s
  - [ ] FID (First Input Delay): < 100ms
  - [ ] CLS (Cumulative Layout Shift): < 0.1
  - [ ] Testar em PageSpeed Insights
  - [ ] Testar em Lighthouse
  - [ ] Score target: ≥ 90 em Performance

**User Story 12.3.2: Otimizar bundle size**
- **Descrição:** Como desenvolvedor, preciso que o CSS/JS seja mínimo.
- **Critérios de Aceitação:**
  - [ ] HTML minificado
  - [ ] CSS minificado (< 50KB ideal)
  - [ ] JavaScript minificado (< 20KB ideal)
  - [ ] Sem CSS unused
  - [ ] Sem JavaScript unused
  - [ ] Lazy loading de imagens (se houver)

---

### **ÉPICA 13: Build e Deployment**

#### **Feature 13.1: Configurar Pipeline de Build**

**User Story 13.1.1: Criar script de build production**
- **Descrição:** Como desenvolvedor, preciso fazer build otimizado para produção.
- **Critérios de Aceitação:**
  - [ ] Script `npm run build` cria pasta `dist/`
  - [ ] Todos os arquivos minificados
  - [ ] Source maps inclusos (opcional, para debug)
  - [ ] Assets otimizadas
  - [ ] Sem arquivos temporários
  - [ ] Documentação no README

**User Story 13.1.2: Criar script de desenvolvimento**
- **Descrição:** Como desenvolvedor, preciso de ambiente confortável para desenvolvimento.
- **Critérios de Aceitação:**
  - [ ] Script `npm start` inicia dev server
  - [ ] Hot reload configurado
  - [ ] Port padrão: 3000 ou 8080
  - [ ] Logging de erros configurado
  - [ ] Source maps inclusos para debug

---

#### **Feature 13.2: Deploy em GitHub Pages**

**User Story 13.2.1: Configurar GitHub Pages**
- **Descrição:** Como desenvolvedor, preciso fazer deploy automático da página.
- **Critérios de Aceitação:**
  - [ ] GitHub Actions workflow criado (`.github/workflows/deploy.yml`)
  - [ ] Trigger: push na branch main
  - [ ] Build automaticamente
  - [ ] Deploy para gh-pages branch
  - [ ] Site acessível em `dspeltri.github.io/LandingPage`
  - [ ] HTTPS ativado automaticamente

**User Story 13.2.2: Criar documentação de deployment**
- **Descrição:** Como desenvolvedor, preciso documentar o processo de deploy.
- **Critérios de Aceitação:**
  - [ ] README.md com instruções de setup
  - [ ] Instruções de build
  - [ ] Instruções de deploy
  - [ ] Variáveis de ambiente documentadas (se houver)
  - [ ] Troubleshooting incluído

---

### **ÉPICA 14: Documentação e Manutenção**

#### **Feature 14.1: Documentação de Código**

**User Story 14.1.1: Documentar HTML com comentários**
- **Descrição:** Como desenvolvedor, preciso entender a estrutura HTML.
- **Critérios de Aceitação:**
  - [ ] Comentários em seções principais (hero, features, etc.)
  - [ ] Comentários explicando estruturas complexas
  - [ ] Sem comentários óbvios
  - [ ] Formato consistente

**User Story 14.1.2: Documentar CSS com comentários**
- **Descrição:** Como desenvolvedor, preciso entender a organização CSS.
- **Critérios de Aceitação:**
  - [ ] Seções comentadas (typography, navigation, hero, etc.)
  - [ ] Explicação de técnicas complexas (Double-Bezel, etc.)
  - [ ] Variables documentadas
  - [ ] Breakpoints documentados

**User Story 14.1.3: Documentar JavaScript com comentários**
- **Descrição:** Como desenvolvedor, preciso entender a lógica JavaScript.
- **Critérios de Aceitação:**
  - [ ] Funções documentadas com propósito
  - [ ] Parâmetros explicados
  - [ ] Eventos documentados
  - [ ] Lógica complexa comentada

---

#### **Feature 14.2: Manutenção e Atualizações**

**User Story 14.2.1: Criar guia de manutenção**
- **Descrição:** Como desenvolvedor futuro, preciso saber como manter o projeto.
- **Critérios de Aceitação:**
  - [ ] Documento MAINTENANCE.md criado
  - [ ] Guia de como adicionar novas seções
  - [ ] Guia de como modificar cores/fontes
  - [ ] Guia de como adicionar animações
  - [ ] Contatos para suporte

**User Story 14.2.2: Manter dependências atualizadas**
- **Descrição:** Como desenvolvedor, preciso manter dependências seguras.
- **Critérios de Aceitação:**
  - [ ] `npm audit` sem vulnerabilidades críticas
  - [ ] Dependências atualizadas regularmente
  - [ ] Changelog mantido
  - [ ] Versão do projeto em package.json

---

## 📊 Resumo de Épicas

| # | Épica | Prioridade | Estimativa |
|---|-------|-----------|-----------|
| 1 | Infraestrutura e Configuração | 🔴 Alta | 2-3 dias |
| 2 | Navegação e Header | 🔴 Alta | 2-3 dias |
| 3 | Seção Hero | 🔴 Alta | 2-3 dias |
| 4 | Seção de Features | 🟡 Média | 2-3 dias |
| 5 | Seção de Comparação | 🟡 Média | 1-2 dias |
| 6 | Seção de Integrações | 🟡 Média | 1 dia |
| 7 | Seção de Preços | 🟡 Média | 2-3 dias |
| 8 | CTA Final e Footer | 🟢 Baixa | 1 dia |
| 9 | Background e Efeitos Visuais | 🟡 Média | 1-2 dias |
| 10 | Animações e Interatividade | 🟡 Média | 2-3 dias |
| 11 | Otimização e Acessibilidade | 🟢 Baixa | 2-3 dias |
| 12 | Testes e Validação | 🟡 Média | 2-3 dias |
| 13 | Build e Deployment | 🔴 Alta | 1-2 dias |
| 14 | Documentação e Manutenção | 🟢 Baixa | 1-2 dias |

---

## 📝 Notas Importantes para o Junior Dev

### **Padrões e Princípios**

1. **CSS Naming:** Use BEM (Block Element Modifier) quando apropriado
   - `.hero` (Block)
   - `.hero-content` (Element)
   - `.hero-content--active` (Modifier) - se necessário

2. **Cubic-Bezier Padrão:** `cubic-bezier(0.32, 0.72, 0, 1)` para todas as transições
   - Não use `linear` ou `ease-in-out` (evita sinal banned)

3. **Cores Principais:**
   - Púrpura: `#9370db`, `#c4b5fd`
   - Ciano: `#22d3ee`
   - Fundo: `#050505`
   - Texto: `#f5f5f5`, `#a0a0a0`, `#666`

4. **Font Stack:**
   - Headers: 'Clash Display', sans-serif
   - Body: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif

5. **Z-Index Hierarchy:**
   - Background overlays: 1-2
   - Conteúdo: 10
   - Nav: 9999
   - Overlays: 10001+

### **Development Tips**

- Use `clamp()` para tipografia responsiva: `font-size: clamp(min, calc(1rem + 2vw), max)`
- Use `100dvh` em vez de `100vh` para viewport dinâmica (iOS safe)
- Teste em dispositivos reais frequentemente
- Use DevTools Lighthouse para validar performance
- Commit frequentemente com mensagens descritivas

---

## 🎯 Critérios de Conclusão do Projeto

- [ ] Todas as épicas implementadas
- [ ] HTML válido (W3C)
- [ ] CSS válido (W3C)
- [ ] Responsivo em: 320px, 768px, 1024px, 1920px
- [ ] Acessibilidade WCAG 2.1 AA
- [ ] Lighthouse Score ≥ 90
- [ ] Zero console errors
- [ ] Documentação completa
- [ ] Deployed em GitHub Pages
- [ ] README atualizado

---

**Versão:** 1.0  
**Data:** Maio 2026  
**Status:** ✅ Pronto para desenvolvimento
