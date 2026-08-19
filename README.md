# D&J Technology Landing Page
Landing page da D&J Technology — ferramenta de planning poker sem anúncios, sem paywalls e integrada com Jira e Azure DevOps.
## Tecnologias
- HTML, CSS, JavaScript
- Vite
## Rodando o projeto
Instalar dependências:
```bash
npm install
```
Ambiente de desenvolvimento (com hot-reload):
```bash
npm start
```
Sobe em `http://localhost:3000`.
## Build de produção
```bash
npm run build
```
Gera a pasta `dist/` com HTML, CSS e JS minificados e com hash no nome (cache busting). O CSS e o JS são bundlados num arquivo único cada, e vem junto o source map (`.js.map`) para debug.
Tamanhos atuais do build: CSS ~12 KB, JS ~1.6 KB, HTML ~14 KB.
Para testar o build antes de publicar:
```bash
npx vite preview
```
O terminal mostra a URL exata.
## Estrutura
```
LandingPage/
  assets/      favicon e estáticos
  src/
    css/       estilos por seção
    js/        nav.js, scroll-reveal.js
    main.js    importa tudo, ponto de entrada do Vite
  index.html
  vite.config.js
```