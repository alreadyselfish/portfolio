document.addEventListener('DOMContentLoaded', main);

function main(){
    document.body.style.zoom="110%"
}

function toggle(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}