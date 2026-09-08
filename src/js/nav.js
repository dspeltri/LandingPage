//Controla o menu hamburger mobile: alterna as classes .active no botão (anima o morph das linhas para "X") e na nav (mostra os links empilhados)
const hamburger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    //.active no hamburger dispara a animação CSS de morph (ver nav.css)
    hamburger.classList.toggle('active');
    //.active na nav muda o layout para coluna e revela os links (ver media query mobile em nav.css)
    nav.classList.toggle('active');
    //Log de debug deixado propositalmente (US 10.2.2) para facilitar verificação do estado do menu
    console.log('Hamburger toggled:', hamburger.classList.contains('active'));
});