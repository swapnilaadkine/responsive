const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});