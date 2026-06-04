const hamburger = document.querySelector('.nav__hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});