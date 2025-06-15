const headerNavLinks = document.querySelectorAll('.header_nav__link');


const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('menu');
// const homeLink = document.getElementById('home_link');
// const closeLink = document.getElementById('close_link');
const closeLinks = document.querySelectorAll('.close_link');



openMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "flex";
    menu.classList.add('visible');
});

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "flex";
    menu.classList.remove('visible');
});

// homeLink.addEventListener('click', () => {
//     closeMenu.style.display = "none";
//     openMenu.style.display = "flex";
//     menu.classList.remove('visible');
// });
closeLinks.forEach(closeLink => {
    closeLink.addEventListener('click', () => {
        closeMenu.style.display = "none";
        openMenu.style.display = "flex";
        menu.classList.remove('visible');
    });
});

