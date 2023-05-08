const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header__nav');
const btnClose = document.querySelector('.burger-close');
const menuLinks = document.querySelectorAll('.nav__link');

burgerBtn.addEventListener('click', function() {
    menu.classList.add('header__nav--active');
});

btnClose.addEventListener('click', function() {
    menu.classList.remove('header__nav--active');
});

menuLinks.forEach(
    function(el) {
        el.addEventListener('click', function() {
            menu.classList.remove('header__nav--active');
        });
    }
)