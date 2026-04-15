const btn = document.getElementById('hamburger-btn');
const menu = document.querySelector('.links-nav'); // Seleccionamos el contenedor de los links

btn.addEventListener('click', () => {
    // toggle añade la clase 'active' si no la tiene, y la quita si ya la tiene
    menu.classList.toggle('active');
});