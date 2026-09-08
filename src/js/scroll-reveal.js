//Seleciona todos os elementos que devem "revelar" (fade-in + blur) ao entrar na viewport
const revealElements = document.querySelectorAll('.reveal');

// IntersectionObserver: dispara o callback quando um elemento .reveal entra ou sai da área visível, sem precisar escutar o evento de scroll manualmente (mais performático)
const revealObserver = new IntersectionObserver((entries, observer) => {
    //entries: lista de elementos observados cujo estado de interseção mudou
    entries.forEach(entry => {
        //isIntersecting: true quando o elemento entrou na área visível definida por threshold/rootMargin
        if (entry.isIntersecting) {
            //will-change avisa o navegador que uma transform está prestes a acontecer, otimizando a animação de entrada (ver .reveal.active em global.css)
            entry.target.style.willChange = 'transform';
            entry.target.classList.add('active');
             //Remove will-change depois que a transição (1000ms) termina, liberando memória de GPU que não é mais necessária uma vez que a animação de entrada já ocorreu
            setTimeout(() => {
                entry.target.style.willChange = 'auto';
            }, 1000);
            //Para de observar o elemento: a revelação só precisa acontecer uma vez, evitando reprocessar o mesmo elemento a cada scroll
            observer.unobserve(entry.target);
        }
    });
}, {
    //threshold: dispara quando 15% do elemento está visível
    threshold: 0.15,
    // rootMargin negativo no rodapé: só considera "visível" quando o elemento está 100px acima do fim da viewport, evitando revelar cedo demais
    rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
