function openMenu(){
    const openMenu = document.querySelector('.menu-hamb');
    const closeMenu = document.querySelector('.menu-close');
    const navbar = document.querySelector('.navbar-menu');
    const cardContainer = document.querySelector('.card-container');
    const masterLogo = document.querySelector('.logo-mastercraft');
    const paddingChanges = document.querySelector('.card1');
    const hero = document.querySelector('.hero');
    const borderRemove = document.querySelector('.link-mobo');

    openMenu.classList.add('show');
    closeMenu.classList.add('show');
    navbar.classList.add('show');
    cardContainer.classList.add('show');
    masterLogo.classList.add('show');
    paddingChanges.classList.add('show');
    hero.classList.add('show');
}

function closeMenu(){
    const openMenu = document.querySelector('.menu-hamb');
    const closeMenu = document.querySelector('.menu-close');
    const navbar = document.querySelector('.navbar-menu');
    const cardContainer = document.querySelector('.card-container');
    const masterLogo = document.querySelector('.logo-mastercraft');
    const paddingChanges = document.querySelector('.card1');
    const hero = document.querySelector('.hero');

    openMenu.classList.remove('show');
    closeMenu.classList.remove('show');
    navbar.classList.remove('show');
    cardContainer.classList.remove('show');
    masterLogo.classList.remove('show');
    paddingChanges.classList.remove('show');
    hero.classList.remove('show');   
}



