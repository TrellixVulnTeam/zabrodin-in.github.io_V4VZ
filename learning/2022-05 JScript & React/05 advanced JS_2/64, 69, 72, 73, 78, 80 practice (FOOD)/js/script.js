'use strict';

window.addEventListener('DOMContentLoaded', function() {

    //// //// //// //// //// //// //// //// tabs on top
    const tabContents = document.querySelectorAll(`.tabcontent`),
        tabHeader = document.querySelector(`.tabheader__items`),
        tabLinks = tabHeader.querySelectorAll(`.tabheader__item`);

    function hideTabContent() {
        tabContents.forEach(item => {
            item.style.display = 'none';
        });
        tabLinks.forEach(item => {
            item.classList.remove(`tabheader__item_active`);
        });
    }

    function showTabContent(tabNumber = 0) {
        hideTabContent();
        tabContents.forEach((item, i) => {
            if (tabNumber == i) {
                item.style.display = 'block';
                tabLinks[i].classList.add(`tabheader__item_active`);
            }
        });
    }

    tabHeader.addEventListener(`click`, (element) => {
        const target = element.target;
        if (target && target.classList.contains(`tabheader__item`)) {
            tabLinks.forEach((item, i) => {
                if (target == item) {
                    showTabContent(i);
                }
            });
        }
    });

    showTabContent();


    //// //// //// //// //// //// //// //// timer
    const endTime = `2022-11-13T00:00`;

    function getTimeInfo(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date());
        let days, hours, minutes, seconds;

        if (t <= 0) {
            days = hours = minutes = seconds = 0;
        } else {
            days = Math.floor(t / 1000 / 60 / 60 / 24);
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function showTime(selector, endTime) {
        function showTimeRefresh() {
            const sel = document.querySelector(selector),
                  get = getTimeInfo(endTime);
            
                  sel.querySelector(`#days`).innerHTML = getZero(get.days);
            sel.querySelector(`#hours`).innerHTML = getZero(get.hours);
            sel.querySelector(`#minutes`).innerHTML = getZero(get.minutes);
            sel.querySelector(`#seconds`).innerHTML = getZero(get.seconds);
            
            if (get.total <= 0) {
                clearInterval(interval);
            }
        }
        const interval = setInterval(showTimeRefresh, 1000);
        showTimeRefresh();
    }

    showTime(`.timer`, endTime);
    console.log(getTimeInfo(endTime));


    //// //// //// //// //// //// //// //// MODAL
    const modal = document.querySelector(`.modal`),
          modalOpenBtns = document.querySelectorAll(`[data-modal]`),
          modalCloseBtn = document.querySelector(`[data-modalClose]`);

    function modalOpenClose() {
        modal.classList.toggle(`show`);
        if (modal.classList.contains(`show`)) {
            document.body.style.overflow = `hidden`;
        } else {
            document.body.style.overflow = ``;
        }
        clearInterval(modalOpenTimer);
        window.removeEventListener(`scroll`, modalScrollOpen);
    }
    // OPEN
    modalOpenBtns.forEach((btn) => {
        btn.addEventListener(`click`, modalOpenClose);
    });

    // Open with timer
    const modalOpenTimer = setTimeout(modalOpenClose, 4000);

    // Open with scroll
    function modalScrollOpen() {
        if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1) {
            modalOpenClose();
            window.removeEventListener(`scroll`, modalScrollOpen);
        }
    }
    window.addEventListener(`scroll`, modalScrollOpen);

    // CLOSE
    modalCloseBtn.addEventListener(`click`, modalOpenClose);
    modal.addEventListener(`click`, (e) => {
        // modal.classList.remove(`show`);
        // modal.classList.add(`hide`);
        if (e.target === modal) {
            modalOpenClose();
        }
    });
    document.addEventListener(`keydown`, (e) => {
        if (e.code === `Escape` && modal.classList.contains(`show`)) {
            modalOpenClose();
        }
    }); 
   
    
    //// //// //// //// //// //// //// //// CLASSES FOR TABS IN THE BOTTOM
    class MenuItem {
        constructor(imgSrc, alt, title, descr, price, parentSelector, ...classes) {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.currency = 27;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.calcPrice();
        }

        calcPrice() {
            this.price = (this.price * this.currency).toFixed(0);
        }

        render() {
            const div = document.createElement(`div`);
            if (this.classes.length > 0) {
                this.classes.forEach(item => div.classList.add(item));
                // div.classList.add(`menu__item`);
            } else {
                div.classList.add('menu__item');
            }
            div.innerHTML = `
                <img src="${this.imgSrc}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(div);
        }
    }

    new MenuItem(
        `img/tabs/vegy.jpg`,
        `vegy`,
        `Меню "Фитнес"`,
        `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
        `8.48`,
        `[data-menu]`,
        `menu__item`, `menu__item2`, `menu__item3`
    ).render();
    new MenuItem(
        `img/tabs/elite.jpg`,
        `elite`,
        `Меню “Премиум”`,
        `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
        `20.36`,
        `[data-menu]`
    ).render();
    new MenuItem(
        `img/tabs/post.jpg`,
        `post`,
        `Меню "Постное"`,
        `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
        `15.93`,
        `[data-menu]`
    ).render();


    //// REST TEST
    const rest = function(a, b, ...rest) {
        console.log(a, b, rest);
    };
    rest(1, 2, 3, 4, 5, 6);
    //// DEFAULT PARAMS
    function calcOrDouble(a, b = 2) {
        return a * b;
    }
    console.log(calcOrDouble(5, 3));
    console.log(calcOrDouble(5));
});