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
## Deploy
O deploy é automático via GitHub Actions, configurado em `.github/workflows/deploy.yml`.
### Como funciona
- **Trigger**: qualquer push na branch `main` dispara o workflow automaticamente
- **Passos do workflow**:
  1. Checkout do código
  2. Setup do Node.js (versão 20)
  3. Instalação das dependências (`npm ci`)
  4. Build de produção (`npm run build`)
  5. Deploy do conteúdo da pasta `dist/` para a branch `gh-pages`
> **Nota**: a habilitação do GitHub Pages nas configurações do repositório (Settings → Pages) requer permissão de administrador. O workflow de build/deploy foi criado e testado, mas a ativação final da configuração do Pages depende de quem tiver esse acesso.
### Site publicado
O site fica disponível em: `https://dspeltri.github.io/LandingPage`
### Deploy manual (se necessário)
Não deveria ser necessário na prática, já que o deploy é automático a cada push na `main`. Mas se precisar forçar um novo deploy sem alterar código, é possível re-executar o workflow manualmente na aba **Actions** do repositório no GitHub, selecionando o workflow "Deploy to GitHub Pages" e clicando em "Re-run jobs".
### Variáveis de ambiente
Não há variáveis de ambiente configuradas neste projeto no momento.
### Troubleshooting
**O site não atualiza depois do push:**
- Confira a aba **Actions** do repositório no GitHub — se o workflow falhou, o log do job mostra em qual etapa (checkout, install, build ou deploy)
- Erros de build geralmente aparecem no passo "Build" do log, com a mesma mensagem que apareceria rodando `npm run build` localmente
**Erro de permissão no deploy (`Permission denied` ou similar):**
- O GitHub Pages precisa estar habilitado nas configurações do repositório (**Settings → Pages**), com a fonte configurada para a branch `gh-pages`
- Isso requer permissão de administrador do repositório — se você não tiver acesso a essa configuração, o workflow pode rodar o build corretamente mas falhar ao publicar
**Build falha localmente mas funciona no CI (ou vice-versa):**
- Confirme que a versão do Node local bate com a usada no workflow (Node 20) — use `node -v` para checar
- Rode `npm ci` (não `npm install`) para replicar exatamente o ambiente do CI, já que `ci` respeita o `package-lock.json` de forma mais estrita
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