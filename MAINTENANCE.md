# Guia de Manutenção — D&J Technology Landing Page
Este documento existe para ajudar quem for dar manutenção neste projeto no futuro (incluindo você mesmo, depois de um tempo longe do código).
## Como adicionar uma nova seção
1. Crie um novo arquivo CSS em `src/css/`, seguindo o padrão de nome da seção (ex: `testimonials.css`)
2. Importe o novo arquivo em `src/main.js`, na lista de imports de CSS
3. No `index.html`, adicione a nova `<section>` dentro de `<main>`, seguindo o padrão das seções existentes:
```html
   <!-- Nome da seção: descrição curta -->
   <section id="nome-da-secao" aria-label="Descrição da seção">
       <div class="section-header">
           <span class="eyebrow">Texto pequeno acima do título</span>
           <h2>Título da seção</h2>
       </div>
       <!-- conteúdo específico da seção -->
   </section>
```
4. Use as variáveis de cor e fonte já estabelecidas (ver seção "Cores e fontes" abaixo) para manter consistência visual
5. Se a seção tiver elementos que devem animar ao entrar na tela, adicione a classe `reveal` neles (o `scroll-reveal.js` já cuida do resto)
## Cores e fontes
### Paleta de cores
- **Roxo primário**: `#9370db`
- **Roxo claro (destaque)**: `#c4b5fd`
- **Ciano (acento secundário)**: `#22d3ee`
- **Fundo da página**: `#050505`
- **Texto principal**: `#f5f5f5`
- **Texto secundário**: `#a0a0a0`
> Para mudar a cor principal do site, procure por `#9370db` em todos os arquivos CSS (usado em gradientes, bordas e ícones) — não existe uma variável CSS centralizada para isso ainda, então a troca precisa ser feita arquivo por arquivo.
### Fontes
- **Clash Display** — usada em todos os títulos (`h1`, `h2` principais)
- **Geist** — usada no corpo do texto e botões
Ambas são carregadas via Google Fonts no `index.html` (com técnica de preload assíncrono, ver comentário no próprio arquivo). Fallbacks já configurados: `Arial Black` para Clash Display, `-apple-system, BlinkMacSystemFont` para Geist.
## Como adicionar uma animação
O projeto usa duas abordagens principais:
**1. Scroll reveal (fade-in ao rolar a página)**
Basta adicionar a classe `reveal` no elemento HTML. O `scroll-reveal.js` já observa automaticamente todos os elementos com essa classe.
**2. Animação contínua (como o floatCard dos hero cards)**
Defina um `@keyframes` no arquivo CSS da seção, e aplique via `animation` na classe do elemento. Veja `hero.css` (`.hero-card`) como referência.
Todas as transições do site usam a mesma curva de easing: `cubic-bezier(0.32, 0.72, 0, 1)` — mantenha esse padrão para novas animações, para consistência de "feel" entre as interações.
## Breakpoints padrão do projeto
| Nome | Largura |
|---|---|
| Mobile | até 767px |
| Tablet | 768px+ |
| Desktop | 1024px+ |
| Large desktop | 1400px+ (max-width do conteúdo) |
## Contato para suporte
Dúvidas sobre o código ou decisões de arquitetura: falar com Daniel Speltri (dono do repositório) ou Julyana Lima (colaboradora).