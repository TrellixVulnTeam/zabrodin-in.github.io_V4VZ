/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function calc() {
  //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// CALCULATOR
  //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
  //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 

  const calcResult = document.querySelector(`.calculating__result span`),
    calcGenderParent = document.querySelector(`#gender`),
    calcActivityParent = document.querySelector(`.calculating__choose_big`);
  let gender, height, weight, age, activity, tempElem;
  if (localStorage.getItem(`genderLS`)) {
    tempElem = document.querySelector(`[data-gender = ${localStorage.getItem(`genderLS`)}]`);
    gender = localStorage.getItem(`genderLS`);
    calcResetActivity(calcGenderParent);
    tempElem.classList.add(`calculating__choose-item_active`);
  } else {
    gender = `female`;
  }
  if (localStorage.getItem(`activityLS`)) {
    switch (+localStorage.getItem(`activityLS`)) {
      case 1.2:
        tempElem = document.querySelector(`#low`);
        break;
      case 1.375:
        tempElem = document.querySelector(`#small`);
        break;
      case 1.55:
        tempElem = document.querySelector(`#medium`);
        break;
      case 1.725:
        tempElem = document.querySelector(`#high`);
        break;
    }
    activity = localStorage.getItem(`activityLS`);
    calcResetActivity(calcActivityParent);
    tempElem.classList.add(`calculating__choose-item_active`);
  } else {
    activity = 1.375;
  }
  function calcCalculation() {
    if (!gender || !height || !weight || !age || !activity) {
      calcResult.textContent = `??`;
      return;
    }
    if (gender == `female`) {
      calcResult.textContent = Math.floor((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * activity);
    } else {
      calcResult.textContent = Math.floor((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * activity);
    }
    return;
  }
  calcCalculation();
  function calcResetActivity(parent) {
    const elems = parent.querySelectorAll(`div`);
    elems.forEach(elem => {
      elem.classList.remove(`calculating__choose-item_active`);
    });
  }
  function calcStaticELements(parent) {
    const elems = parent.querySelectorAll(`div`);
    elems.forEach(elem => {
      elem.addEventListener(`click`, () => {
        calcResetActivity(parent);
        elem.classList.add(`calculating__choose-item_active`);
        if (elem.getAttribute(`data-gender`) == `male`) {
          gender = `male`;
          localStorage.setItem(`genderLS`, `male`);
        } else if (elem.getAttribute(`data-gender`) == `female`) {
          gender = `female`;
          localStorage.setItem(`genderLS`, `female`);
        } else {
          switch (elem.getAttribute(`id`)) {
            case `low`:
              activity = 1.2;
              localStorage.setItem(`activityLS`, 1.2);
              break;
            case `small`:
              activity = 1.375;
              localStorage.setItem(`activityLS`, 1.375);
              break;
            case `medium`:
              activity = 1.55;
              localStorage.setItem(`activityLS`, 1.55);
              break;
            case `high`:
              activity = 1.725;
              localStorage.setItem(`activityLS`, 1.725);
              break;
          }
        }
        calcCalculation();
      });
    });
  }
  calcStaticELements(calcGenderParent);
  calcStaticELements(calcActivityParent);
  function calcAddDynamicEvent(elem) {
    elem.addEventListener(`input`, () => {
      if (elem.value.match(/\D/)) {
        elem.style.border = `1px red solid`;
      } else {
        elem.style.border = `none`;
      }
      switch (elem.getAttribute(`id`)) {
        case `height`:
          height = +elem.value;
          break;
        case `weight`:
          weight = +elem.value;
          break;
        case `age`:
          age = +elem.value;
          break;
      }
      calcCalculation();
    });
  }
  document.querySelectorAll(`.calculating__choose_medium input`).forEach(item => {
    calcAddDynamicEvent(item);
  });
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function cards() {
  //// //// //// //// //// //// //// //// CLASSES FOR TABS IN THE BOTTOM
  class MenuItem {
    constructor(imgSrc, alt, title, descr, price, parentSelector) {
      this.imgSrc = imgSrc;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.currency = 27;
      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }
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
  const getData = async url => {
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
  axios.get(`http://localhost:3000/menu`).then(data => {
    data.data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
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
  function calcOrDouble(a) {
    let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return a * b;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function modalAndForms(modalSelector, modalBtnsSelector, formsSelector) {
  //// //// //// //// //// //// //// //// MODAL
  const modal = document.querySelector(modalSelector),
    modalOpenBtns = document.querySelectorAll(modalBtnsSelector),
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
  modalOpenBtns.forEach(btn => {
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
  modal.addEventListener(`click`, e => {
    if (e.target === modal || e.target.getAttribute(`data-modalClose`) == ``) {
      modalOpenClose();
    }
  });
  document.addEventListener(`keydown`, e => {
    if (e.code === `Escape` && modal.classList.contains(`show`)) {
      modalOpenClose();
    }
  });

  //// //// //// //// //// //// //// //// FORMS
  const msg = {
    loading: `Loading.. <img src="img/form/spinner.svg" style="display: block; margin: auto;">`,
    success: `Thx, We'll call u soon`,
    error: `Smth went wrong`
  };
  function formsEvent() {
    const forms = document.querySelectorAll(formsSelector);
    forms.forEach(item => {
      bindPostData(item);
    });
  }
  formsEvent();
  function bindPostData(form) {
    form.addEventListener(`submit`, event => {
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

      (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)(`http://localhost:3000/requests`, json) // instead of "json" was "JSON.stringify(obj)"
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
  fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json));
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: `POST`,
    body: JSON.stringify({
      name: `Alex`
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => response.json()).then(json => console.log(json));
  fetch(`http://localhost:3000/menu`).then(data => data.json()).then(res => console.log(res));
}
/* harmony default export */ __webpack_exports__["default"] = (modalAndForms);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider(_ref) {
  let {
    sliderTabsSel,
    sliderPrevSel,
    sliderNextSel,
    sliderCurrSel,
    sliderTotalSel,
    slidesWrapperSel,
    slidesInnerSel
  } = _ref;
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
  const sliderTabs = document.querySelectorAll(sliderTabsSel),
    sliderPrev = document.querySelector(sliderPrevSel),
    sliderNext = document.querySelector(sliderNextSel),
    sliderCurr = document.querySelector(sliderCurrSel),
    sliderTotal = document.querySelector(sliderTotalSel),
    slidesWrapper = document.querySelector(slidesWrapperSel),
    slidesInner = document.querySelector(slidesInnerSel),
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
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function tabs(tabContentSelector, tabHeaderSelector, tabLinksSelector, tabActiveClass) {
  //// //// //// //// //// //// //// //// tabs on top
  const tabContents = document.querySelectorAll(tabContentSelector),
    tabHeader = document.querySelector(tabHeaderSelector),
    tabLinks = tabHeader.querySelectorAll(`.${tabLinksSelector}`);
  function hideTabContent() {
    tabContents.forEach(item => {
      item.style.display = 'none';
    });
    tabLinks.forEach(item => {
      item.classList.remove(tabActiveClass);
    });
  }
  function showTabContent() {
    let tabNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    hideTabContent();
    tabContents.forEach((item, i) => {
      if (tabNumber == i) {
        item.style.display = 'block';
        tabLinks[i].classList.add(tabActiveClass);
      }
    });
  }
  tabHeader.addEventListener(`click`, element => {
    const target = element.target;
    if (target && target.classList.contains(tabLinksSelector)) {
      tabLinks.forEach((item, i) => {
        if (target == item) {
          showTabContent(i);
        }
      });
    }
  });
  showTabContent();
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function timer(timerSelector, timerEndTime) {
  //// //// //// //// //// //// //// //// timer
  const endTime = timerEndTime;
  function getTimeInfo(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date());
    let days, hours, minutes, seconds;
    if (t <= 0) {
      days = hours = minutes = seconds = 0;
    } else {
      days = Math.floor(t / 1000 / 60 / 60 / 24);
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / (1000 * 60) % 60);
      seconds = Math.floor(t / 1000 % 60);
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
  showTime(timerSelector, endTime);
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");







// import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', function () {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])(`.modal`, `[data-modal]`, `form`);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(`.tabcontent`, `.tabheader__items`, `tabheader__item`, `tabheader__item_active`);
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(`.timer`, `2022-11-16T00:00`);
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  // forms();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    sliderTabsSel: '.offer__slide',
    sliderPrevSel: '.offer__slider-prev',
    sliderNextSel: '.offer__slider-next',
    sliderCurrSel: '#current',
    sliderTotalSel: '#total',
    slidesWrapperSel: '.offer__slider-wrapper',
    slidesInnerSel: '.offer__slider-inner'
  });
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map