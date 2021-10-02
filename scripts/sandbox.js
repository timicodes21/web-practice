const closeIcon = document.querySelector('.fa-times');
const navLinks = document.querySelector('.nav-links')
const openIcon = document.querySelector('.fa-bars');

openIcon.addEventListener('click', () => {
    navLinks.style.right = "0";
});

closeIcon.addEventListener('click', () => {
    navLinks.style.right = "-200px";
});