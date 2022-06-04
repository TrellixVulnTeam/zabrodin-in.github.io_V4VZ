'use strict';
window.addEventListener('DOMContentLoaded', () => {
//////////////////////////////////////
//////////////// TABS ////////////////
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
            
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            console.log('Hello');
        }
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    });
///////////////////////////////////////
//////////////// TIMER ////////////////
    const deadline = '2022-06-28';
    function getTimeRemaining(endtime) {
        let daysRemaining,
            hoursRemaining,
            minutesRemaining,
            secondsRemaining;
        const t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0) {
            daysRemaining = 0;
            hoursRemaining = 0;
            minutesRemaining = 0;
            secondsRemaining = 0;
        } else {
            daysRemaining = Math.floor(t / (1000*60*60*24));
            hoursRemaining = Math.floor((t/ (1000*60*60*24)) % 24);
            minutesRemaining = Math.floor((t / 1000 / 60) % 60);
            secondsRemaining = Math.floor((t / 1000) % 60);
        }
        return {
            'total': t,
            'days': daysRemaining,
            'hours': hoursRemaining,
            'minutes': minutesRemaining,
            'seconds': secondsRemaining
        };
    }
    function prependZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock(); // so that the page does not blink
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = prependZero(t.days);
            hours.innerHTML = prependZero(t.hours);
            minutes.innerHTML = prependZero(t.minutes);
            seconds.innerHTML = prependZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
//////////////////////////////////////////////
//////////////// MODAL WINDOW ////////////////
    const connectBtn = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
    function openModal() {
        // modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    function closeModal() {
        // modal.style.display = 'none';
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    connectBtn.forEach((elem) => {
        elem.addEventListener('click', openModal);
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if ((e.code === 'Escape') && (modal.classList.contains('show'))) {
            closeModal();
        }
    });
    // setting timer
    const modalTimerId = setTimeout(openModal, 10000);
    // opening modal window when user scrolled down to the end of page
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    // show loading in the modal
    function showThanksModal(message) {
        const prevModalContent = document.querySelector('.modal__dialog');
        prevModalContent.classList.add('hide');
        openModal();
        const thanksModalContent = document.createElement('div');
        thanksModalContent.classList.add('modal__dialog');
        thanksModalContent.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModalContent);
        setTimeout(() => {
            thanksModalContent.remove();
            prevModalContent.classList.remove('hide');
            closeModal();
        }, 3000);
    }
    




///////////////////////////////////////////////////////////////////
//////////////// TEMPLATES BY CLASSES (menu__item) ////////////////
    class MenuCard {
        constructor(title, imgSrc, alt, price, descr, ...classes) {
            this.title = title;
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            // ////// FIRST & SECOND VARIANT
            // this.HTML = `
            //     <img src="${this.imgSrc}" alt="${this.alt}">
            //     <h3 class="menu__item-subtitle">${this.title}</h3>
            //     <div class="menu__item-descr">${this.descr}</div>
            //     <div class="menu__item-divider"></div>
            //     <div class="menu__item-price">
            //         <div class="menu__item-cost">Цена: </div>
            //         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            //     </div>
            // `;
        }
        render() {
            const elem = document.createElement('div');
            elem.classList.add('menu__item');
            this.classes.forEach(className => elem.classList.add(className));
            elem.innerHTML = `
                <img src="${this.imgSrc}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена: </div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            return elem;
        }
    }
    const menuContainer = document.querySelector('[data-menu-container]'),
          item1 = new MenuCard('Меню "Фитнес"',
                            'img/tabs/vegy.jpg',
                            'vegy',
                            229,
                            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
                            'test1', 'test2'),
          item2 = new MenuCard('Меню “Премиум”',
                            'img/tabs/elite.jpg',
                            'elite',
                            550,
                            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!'),
          item3 = new MenuCard('Меню "Постное"',
                            'img/tabs/post.jpg',
                            'post',
                            430,
                            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'),
          itemArr = [item1, item2, item3];

    menuContainer.innerHTML = '';
    // let item;

    // ////// FIRST VARIANT
    // item = document.createElement('div');
    // item.classList.add('menu__item');
    // item.innerHTML = item1.HTML;
    // menuContainer.append(item);

    // item = document.createElement('div');
    // item.classList.add('menu__item');
    // item.innerHTML = item2.HTML;
    // menuContainer.append(item);

    // item = document.createElement('div');
    // item.classList.add('menu__item');
    // item.innerHTML = item3.HTML;
    // menuContainer.append(item);

    // ////// SECOND VARIANT
    // for (let i = 0; i < 3; i++) {
    //     item = document.createElement('div');
    //     item.classList.add('menu__item');
    //     item.innerHTML = itemArr[i].HTML;
    //     menuContainer.append(item);
    // }
    for (let i = 0; i < 3; i++) {
        menuContainer.append(itemArr[i].render());
    }

///////////////////////////////////////
//////////////// FORMS ////////////////
    const forms = document.querySelectorAll('form'),
          message = {
            loading: 'img/form/spinner.svg',
            success: "Thanks. Soon we'll call you",
            failure: 'Smth went wrong',
            thanks: 'Thankssss'
          };
    forms.forEach(item => {
        postData(item);
    });
    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // // don't need if working showThanksModal()
            // const statusMsg = document.createElement('div');
            // statusMsg.classList.add('status');
            // statusMsg.textContent = message.loading;
            // form.append(statusMsg);
            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;            
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
            

        // ///// FIRST VARIANT - XMLHttpRequest();
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            
            // // WE DON'T NEED THIS WITH FORMS:
            // // request.setRequestHeader('Content-type', 'multipart/form-data');
            // const formData = new FormData(form);

        // ////// SECOND VARIANT - JSON
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form),
                  object = {};
            
            formData.forEach(function(value, key) {
                object[key] = value;
                // console.log(object[key], value);
            });

            // ////// Changed for Fetch
            // const json = JSON.stringify(object);
            // request.send(json);

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

            console.log(object);

            // request.send(formData);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    // console.log(request.response);
                    // statusMsg.textContent = message.success;
                    showThanksModal(message.success);
                    statusMessage.remove();
                    form.reset();
                    // setTimeout(() => {
                        // statusMsg.remove();
                    // }, 2000);
                } else {
                    // console.log(request.response);
                    // statusMsg.textContent = message.failure;
                    showThanksModal(message.failure);
                    statusMessage.remove();
                }
            });
        });
    }
});
