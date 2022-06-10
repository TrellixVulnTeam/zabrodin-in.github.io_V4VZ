/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator() {
    /////////////////////////////////////////////
    //////////////// CALCULATOR /////////////////
    let sex, ratio, age, height, weight;
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', '1.375');
    }
    function calcTotal() {
        const result = document.querySelector('.calculating__result span');
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '---';
        } else {
            if (sex == 'male') {
                result.textContent = `${+Math.round(88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio)}`;
            } else {
                result.textContent = +Math.round(447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio);
            }
        }
        return;
    }
    function getStaticInfo(parentSelector, activeClass) {
        const div = document.querySelectorAll(`${parentSelector} div`);
        div.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                div.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
        return;
    }
    function getDynamicInfo(selector) {
        const item = document.querySelector(selector);
        item.addEventListener('input', () => {
            if (item.value.match(/\D/g)) {
                item.style.border = '1px solid red';
            } else {
                item.style.border = 'none';
            }
            switch(item.getAttribute('id')) {
                case 'weight':
                    weight = +item.value;
                    break;
                case 'height':
                    height = +item.value;
                    break;
                case 'age':
                    age = +item.value;
                    break;
            }
            calcTotal();
        });
        return;
    }
    function initLocalStorage(selector, activeClass) {
        const div = document.querySelectorAll(`${selector} div`);
        // console.log(div);
        div.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalStorage('#gender', 'calculating__choose-item_active');
    initLocalStorage('.calculating__choose_big', 'calculating__choose-item_active');
    getStaticInfo('#gender', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');
    getDynamicInfo('#height');
    getDynamicInfo('#weight');
    getDynamicInfo('#age');
    calcTotal();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/classes.js":
/*!*******************************!*\
  !*** ./js/modules/classes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classes() {
    ///////////////////////////////////////////////////////////////////
    //////////////// TEMPLATES BY CLASSES (menu__item) ////////////////
    class MenuCard {
        constructor(imgSrc, alt, title, descr, price, ...classes) {
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

    // 5-89
    const getResources = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}. Status ${res.status}`);
        }
        return await res.json();
    };
    
    // getResources('http://localhost:3000/menu')
    //     .then(data => {
    //         const menuContainer = document.querySelector('[data-menu-container]');
    //         menuContainer.innerHTML = '';
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             menuContainer.append(new MenuCard(img, altimg, title, descr, price).render());
    //         });
    //     });
    axios.get('http://localhost:3000/menu')
        .then(data2 => {
            const menuContainer = document.querySelector('[data-menu-container]');
            menuContainer.innerHTML = '';
            data2.data.forEach(({img, altimg, title, descr, price}) => {
                menuContainer.append(new MenuCard(img, altimg, title, descr, price).render());
            });
        });

    // const menuContainer = document.querySelector('[data-menu-container]'),
    //       item1 = new MenuCard('Меню "Фитнес"',
    //                         'img/tabs/vegy.jpg',
    //                         'vegy',
    //                         229,
    //                         'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //                         'test1', 'test2'),
    //       item2 = new MenuCard('Меню “Премиум”',
    //                         'img/tabs/elite.jpg',
    //                         'elite',
    //                         550,
    //                         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!'),
    //       item3 = new MenuCard('Меню "Постное"',
    //                         'img/tabs/post.jpg',
    //                         'post',
    //                         430,
    //                         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'),
    //       itemArr = [item1, item2, item3];

    // menuContainer.innerHTML = '';
    // // let item;

    // // ////// FIRST VARIANT
    // // item = document.createElement('div');
    // // item.classList.add('menu__item');
    // // item.innerHTML = item1.HTML;
    // // menuContainer.append(item);

    // // item = document.createElement('div');
    // // item.classList.add('menu__item');
    // // item.innerHTML = item2.HTML;
    // // menuContainer.append(item);

    // // item = document.createElement('div');
    // // item.classList.add('menu__item');
    // // item.innerHTML = item3.HTML;
    // // menuContainer.append(item);

    // // ////// SECOND VARIANT
    // // for (let i = 0; i < 3; i++) {
    // //     item = document.createElement('div');
    // //     item.classList.add('menu__item');
    // //     item.innerHTML = itemArr[i].HTML;
    // //     menuContainer.append(item);
    // // }
    // for (let i = 0; i < 3; i++) {
    //     menuContainer.append(itemArr[i].render());
    // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classes);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");

function forms() {
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
        bindPostData(item);
    });

    // 5-89
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data // it was JSON.stringify(object) here
        });
        return await res.json();
    };


    function bindPostData(form) {
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
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // ////// Changed for Fetch
            // const json = JSON.stringify(object);
            // request.send(json);

            // fetch('server.php', { // changed to http://localhost:3000/requests
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            postData('http://localhost:3000/requests', json) // here was "'server.php', JSON.stringify(object))
            // .then(data => data.text()) // do not needed anymore
            .then(data => {
                console.log(data);
                (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showThanksModal)(message.success, '.modal');
                statusMessage.remove();
            }).catch(() => {
                (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showThanksModal)(message.failure, '.modal');
            }).finally(() => {
                form.reset();
            });

            console.log(object);

            // request.send(formData);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    // console.log(request.response);
                    // statusMsg.textContent = message.success;
                    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showThanksModal)(message.success, '.modal');
                    statusMessage.remove();
                    form.reset();
                    // setTimeout(() => {
                        // statusMsg.remove();
                    // }, 2000);
                } else {
                    // console.log(request.response);
                    // statusMsg.textContent = message.failure;
                    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showThanksModal)(message.failure, '.modal');
                    statusMessage.remove();
                }
            });
        });
    }
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "showThanksModal": () => (/* binding */ showThanksModal)
/* harmony export */ });
// show loading in the modal
function showThanksModal(message, modalSelector) {
    const prevModalContent = document.querySelector('.modal__dialog');
    prevModalContent.classList.add('hide');
    openModal(modalSelector);
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
        closeModal(modalSelector);
    }, 3000);
}

function openModal(modalSelector, modalTimerId) {
    // modal.style.display = 'block';
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}
function closeModal(modalSelector) {
    // modal.style.display = 'none';
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


function modal(modalSelector, modalTimerId) {
    //////////////////////////////////////////////
    //////////////// MODAL WINDOW ////////////////
    const connectBtn = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector(modalSelector);

    // here was openModal() & closeModal()

    connectBtn.forEach((elem) => {
        elem.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if ((e.code === 'Escape') && (modal.classList.contains('show'))) {
            closeModal(modalSelector);
        }
    });

    // inserted to the global script.js
    // // setting timer
    // const modalTimerId = setTimeout(openModal, 10000);

    // opening modal window when user scrolled down to the end of page
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
    /////////////////////////////////////////////
    //////////////// SLIDER VER.1 ///////////////
    const slides = document.querySelectorAll('.offer__slide'),
          btnPrev = document.querySelector('.offer__slider-prev'),
          btnNext = document.querySelector('.offer__slider-next'),
          countCurr = document.querySelector('#current'),
          countTotal = document.querySelector('#total');
    let slideIndex = 1;
    // (slides.length < 10) ? countTotal.textContent = `0${slides.length}` : countTotal.textContent = `${slides.length}`;
    
    // showSlide(slideIndex);
    // function showSlide(index) {
    //     (index < 10) ? countCurr.textContent = `0${index}` : countCurr.textContent = `${index}`;
    //     slides.forEach((elem, id) => {
    //         if (id + 1 == index) {
    //             elem.classList.add('show');
    //             elem.classList.remove('hide');
    //         } else {
    //             elem.classList.add('hide');
    //             elem.classList.remove('show');
    //         }
    //     });
    // }
    // btnPrev.addEventListener('click', () => {
    //     slideIndex--;
    //     if (slideIndex < 1) {
    //         slideIndex = slides.length
    //     }
    //     showSlide(slideIndex);
    // });
    // btnNext.addEventListener('click', () => {
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1;
    //     }
    //     showSlide(slideIndex);
    // });
/////////////////////////////////////////////
//////////////// SLIDER VER.2 ///////////////
    (slides.length < 10) ? countTotal.textContent = `0${slides.length}` : countTotal.textContent = `${slides.length}`;
    const slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;
    // console.log(width);
    slidesWrapper.style.width = width;
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(item => {
        item.style.width = width;
    });
    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }
    function changeCount(index) {
        (index < 10) ? countCurr.textContent = `0${index}` : countCurr.textContent = `${index}`;
    }
    changeCount(slideIndex);
    function prevSlide() {
        (slideIndex <= 1) ? slideIndex = slides.length : slideIndex--;
        changeCount(slideIndex);
        slidesField.style.transform = `translateX(-${(slideIndex - 1) * deleteNotDigits(width)}px)`;
        chooseSlide(slideIndex);
    }
    function nextSlide() {
        (slideIndex >= slides.length) ? slideIndex = 1 : slideIndex++;
        changeCount(slideIndex);
        slidesField.style.transform = `translateX(-${(slideIndex - 1) * deleteNotDigits(width)}px)`;
        chooseSlide(slideIndex);
    }
    btnPrev.addEventListener('click', prevSlide);
    btnNext.addEventListener('click', nextSlide);
    ////////////////////////////
    //////// SLIDER DOTS ///////
    const slider = document.querySelector('.offer__slider'),
          dotList = document.createElement('ol');
    dotList.classList.add('carousel-indicators');
    slider.style.position = 'relative';
    slider.append(dotList);
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-carousel-id', i);
        dotList.append(dot);
        if (i == slideIndex - 1) {
            dot.classList.add('dot-bright');
        }
    }
    dotList.addEventListener('click', (event) => {
        if (event.target.matches('li')) {
            // console.log('asidawind');
            // console.log(event.target.getAttribute('data-carousel-id'));
            slideIndex = +event.target.getAttribute('data-carousel-id') + 1;
            // console.log(slideIndex);
            chooseSlide(slideIndex);
        }
    });
    function chooseSlide(index) {
        changeCount(index);
        slidesField.style.transform = `translateX(-${(index - 1) * deleteNotDigits(width)}px)`;
        const dotLi = dotList.querySelectorAll('li');
        dotLi.forEach((elem, id) => {
            if (id == index - 1) {
                elem.classList.add('dot-bright');
            } else {
                elem.classList.remove('dot-bright');
            }
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./js/modules/classes.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");









// import {openModal, closeModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    // setting timer
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 5000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal', modalTimerId);
    (0,_modules_classes__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
    // openModal('.modal');
    // closeModal('.modal');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map