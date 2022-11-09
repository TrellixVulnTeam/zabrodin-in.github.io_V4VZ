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



    //// //// //// //// //// //// //// //// MODAL
    const modal = document.querySelector(`.modal`),
          modalOpenBtns = document.querySelectorAll(`[data-modal]`),
          modalContent = modal.innerHTML;
    let timeOut;

    function modalOpenClose() {
        if (modal.classList.contains(`show`)) {
            modal.classList.remove(`show`);
            document.body.style.overflow = ``;
            modal.innerHTML = modalContent;
            formsEvent();
        } else {
            modal.classList.add(`show`);
            document.body.style.overflow = `hidden`;
        }
        clearInterval(modalOpenTimer);
        clearTimeout(timeOut);
        window.removeEventListener(`scroll`, modalScrollOpen);
    }
    // OPEN
    modalOpenBtns.forEach((btn) => {
        btn.addEventListener(`click`, modalOpenClose);
    });

    // Open with timer
    const modalOpenTimer = setTimeout(modalOpenClose, 10000);

    // Open with scroll
    function modalScrollOpen() {
        if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1) {
            modalOpenClose();
            window.removeEventListener(`scroll`, modalScrollOpen);
        }
    }
    window.addEventListener(`scroll`, modalScrollOpen);

    // CLOSE
    modal.addEventListener(`click`, (e) => {
        if (e.target === modal || e.target.getAttribute(`data-modalClose`) == ``) {
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

    const getData = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Can't fetch ${url}, status: ${res.status}`);
        }
        return res.json();
    };

    //////// FETCH API
    // getData(`http://localhost:3000/menu`)
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuItem(img, altimg, title, descr, price, `[data-menu]`).render();
    //     });
    // });
    ///////////////////////////// AXIOS
    axios.get(`http://localhost:3000/menu`)
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuItem(img, altimg, title, descr, price, `[data-menu]`).render();
        });
    });
    
    /*
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
    */

    //// REST TEST
    // const rest = function(a, b, ...rest) {
    //     console.log(a, b, rest);
    // };
    // rest(1, 2, 3, 4, 5, 6);

    //// DEFAULT PARAMS
    function calcOrDouble(a, b = 2) {
        return a * b;
    }

    //// //// //// //// //// //// //// //// FORMS
    const msg = {
        loading: `Loading.. <img src="img/form/spinner.svg" style="display: block; margin: auto;">`,
        success: `Thx, We'll call u soon`,
        error: `Smth went wrong`
    };

    function formsEvent() {
        const forms = document.querySelectorAll(`form`);

        forms.forEach(item => {
            bindPostData(item);
        });
    }

    formsEvent();

    ////////////////??!!!!!!!!!!!!!!!!!!!!!!!!!! ASYNC/AWAIT
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: `POST`,
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return res.json();
    };

    function bindPostData(form) {
        form.addEventListener(`submit`, (event) => {
            event.preventDefault();

            // const spinner = document.createElement(`img`);
            // spinner.src = msg.loading;
            // spinner.style.cssText = `
            //     margin: auto;
            //     display: block;
            // `;
            showThanksModal(msg.loading);
            // form.append(spinner);


            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// ////  CHANGING TO FETCH
            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 

            // const request = new XMLHttpRequest();
            // request.open(`POST`, `server.php`);

            /*
            //// //// AS A FORM_DATA //// //// 111
            // request.setRequestHeader(`Content-type`, `multipart/form-data`);
            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener(`load`, () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMsg.textContent = msg.success;
                    form.reset();
                    setTimeout(() => {
                        statusMsg.textContent = "";
                    }, 2000);
                } else {
                    statusMsg.textContent = msg.error;
                }
            });
            */

            //// //// AS A JSON //// //// 222
            // request.setRequestHeader(`Content-type`, `application/json`);
            const formData = new FormData(form);
            /*
            const obj = {};
            formData.forEach((element, key) => {
                obj[key] = element;
            });
            */
            // const json = JSON.stringify(obj);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // console.log(obj);
            // console.log(JSON.stringify(obj));

            // request.send(json);

            /*
            request.addEventListener(`load`, () => {
                if (request.status === 200) {
                    console.log(request.response);
                    form.reset();
                    showThanksModal(msg.success);
                } else {
                    showThanksModal(msg.error);
                }
            });
            */

            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
            //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 

            // fetch(`server.php1`, {
            //     method: `POST`,
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: json // formData
            // })
            
            postData(`http://localhost:3000/requests`, json) // instead of "json" was "JSON.stringify(obj)"
            // .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(msg.success);
            }).catch(() => {
                showThanksModal(msg.error);
            }).finally(() => {
                form.reset();
            });
        });
    }

    //// //// //// modal window after sending the data
    function showThanksModal(message) {
        modal.innerHTML = `
            <div class="modal__dialog">
                <div class="modal__content">
                    <div data-modalClose class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
                </div>
            </div>
        `;
        if (!modal.classList.contains(`show`)) {
            modal.classList.add(`show`);
            document.body.style.overflow = `hidden`;
        }
        if (message == msg.success) {
            timeOut = setTimeout(() => {
                modalOpenClose();
            }, 4000);
        }
    }

    //// //// //// //// //// //// //// //// //// //// //// //// 87 FETCH API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: `POST`,
        body: JSON.stringify({name: `Alex`}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));



    fetch(`http://localhost:3000/menu`)
    .then(data => data.json())
    .then(res => console.log(res));





    /*
    /////////////////////////////////////////////////// SLIDER 1
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    const sliderTabs = document.querySelectorAll(`.offer__slide`),
          sliderPrev = document.querySelector(`.offer__slider-prev`),
          sliderNext = document.querySelector(`.offer__slider-next`),
          sliderCurr = document.querySelector(`#current`),
          sliderTotal = document.querySelector(`#total`);
    let sliderIndex = 1;

    sliderTotal.textContent = sliderNumber(sliderTabs.length);

    function sliderSet(num) {
        sliderIndex = num;
        if (sliderIndex > sliderTabs.length) {
            sliderIndex = 1;
        } else if (sliderIndex < 1) {
            sliderIndex = sliderTabs.length;
        }
        sliderTabs.forEach(item => {
            item.style.display = `none`;
        });
        sliderTabs[sliderIndex - 1].style.display = ``;
        sliderCurr.textContent = sliderNumber(sliderIndex);
    }

    sliderSet(sliderIndex);

    sliderPrev.addEventListener(`click`, () => {
        sliderSet(sliderIndex - 1);
    });
    sliderNext.addEventListener(`click`, () => {
        sliderSet(sliderIndex + 1);
    });

    function sliderNumber(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else if (num < 0) {
            return `--`;
        } else {
            return num;
        }
    }
    */



    /////////////////////////////////////////////////// SLIDER 2
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    const sliderTabs = document.querySelectorAll(`.offer__slide`),
          sliderPrev = document.querySelector(`.offer__slider-prev`),
          sliderNext = document.querySelector(`.offer__slider-next`),
          sliderCurr = document.querySelector(`#current`),
          sliderTotal = document.querySelector(`#total`),
          slidesWrapper = document.querySelector(`.offer__slider-wrapper`),
          slidesInner = document.querySelector(`.offer__slider-inner`),
          slidesWrapperWidth = window.getComputedStyle(slidesWrapper).width;
    let sliderIndex = 1,
        sliderOffset = 0;

                    /////////////////////////////////////////////////// SLIDER DOTS
                    ///////////////////////////////////////////////////
                    ///////////////////////////////////////////////////
                    slidesWrapper.style.position = `relative`;
                    const dotsDiv = document.createElement(`div`);
                    dotsDiv.classList.add(`carousel-indicators`);
                    slidesWrapper.append(dotsDiv);

                    for (let i = 1; i < sliderTabs.length + 1; i++) {
                        const dot = document.createElement(`div`);
                        dot.classList.add(`dot`);
                        dot.setAttribute(`data-slider-dot`, i);
                        dotsDiv.append(dot);
                    }

                    const dots = document.querySelectorAll(`[data-slider-dot]`);
                    dots.forEach((item, i) => {
                        if (item.getAttribute(`data-slider-dot`) == sliderIndex) {
                            item.style.opacity = 1;
                        } else {
                            item.style.opacity = 0.5;
                        }
                        item.addEventListener(`click`, () => {
                            sliderScroll(i + 1);
                        });
                    });

    slidesInner.style.width = 100 * sliderTabs.length + `%`;
    slidesInner.style.display = `flex`;
    sliderTabs.forEach(item => {
        item.style.width = `${slidesWrapperWidth}`;
    });
    slidesWrapper.style.overflow = `hidden`;

    // console.log(slidesWrapperWidth.slice(0, -2));

    function noLetters(str) {
        return +str.replace(/\D/g, '');
    }

    function sliderScroll(num) {
        if (num > sliderTabs.length) {
            sliderIndex = 1;
            sliderOffset = 0;
        } else if (num < 1) {
            sliderIndex = sliderTabs.length;
            sliderOffset = (sliderTabs.length - 1) * noLetters(slidesWrapperWidth);
        } else {
            sliderOffset = (num - 1) * noLetters(slidesWrapperWidth);
            sliderIndex = num;
        }
        // console.log(sliderOffset);
        slidesInner.style.transform = `translateX(-${sliderOffset}px)`;
        slidesInner.style.transition = `0.5s all`;
        sliderCurr.textContent = sliderNumber(sliderIndex);

        dots.forEach(item => {
            if (item.getAttribute(`data-slider-dot`) == sliderIndex) {
                item.style.opacity = 1;
            } else {
                item.style.opacity = 0.5;
            }
        });
    }

    sliderScroll(1);
    sliderTotal.textContent = sliderNumber(sliderTabs.length);

    sliderPrev.addEventListener(`click`, () => {
        sliderScroll(sliderIndex - 1);
    });
    sliderNext.addEventListener(`click`, () => {
        sliderScroll(sliderIndex + 1);
    });

    function sliderNumber(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else if (num < 0) {
            return `--`;
        } else {
            return num;
        }
    }

});