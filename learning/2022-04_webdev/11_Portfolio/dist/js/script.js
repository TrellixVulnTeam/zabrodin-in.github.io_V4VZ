const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu__left'),
        overlay = document.querySelector('.menu__overlay'),
        close_elem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    overlay.classList.add('active'),
    hamburger.classList.add('active');
});

close_elem.addEventListener('click', () => {
    menu.classList.remove('active'),
    overlay.classList.remove('active'),
    hamburger.classList.remove('active');
});




const   counters = document.querySelectorAll('.skills__progress__item_counter'),
        lines = document.querySelectorAll('.skills__progress__item_line');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});