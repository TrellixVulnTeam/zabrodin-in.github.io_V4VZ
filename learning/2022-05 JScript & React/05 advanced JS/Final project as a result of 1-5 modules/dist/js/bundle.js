/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/assembling/modules/2modal.js":
/*!*********************************************!*\
  !*** ./src/js/assembling/modules/2modal.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; }
/* harmony export */ });
function openModal() {
  const modal = document.querySelector('.modal'),
        modalBtns = document.querySelectorAll('[data-modal]');
  modalBtns.forEach(e => {
    e.addEventListener('click', () => {
      modal.classList.add('modal__active');
      document.body.style.overflow = "hidden";
    });
  });
}

function closeModal() {
  const modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('.modal__close'),
        modalContent = document.querySelector('.modal__content');
  modal.addEventListener('click', elem => {
    // Closing if click 'X' & somwhere out of the MODAL__CONTENT
    if (elem.target === modal || elem.target === modalCloseBtn) {
      modal.classList.remove('modal__active');
      document.body.style.overflow = "";
    }
  }); // closing if ESC

  document.addEventListener('keydown', e => {
    if (e.code == 'Escape' && modal.classList.contains('modal__active')) {
      modal.classList.remove('modal__active');
      document.body.style.overflow = "";
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (openModal);


/***/ }),

/***/ "./src/js/assembling/modules/2slider.js":
/*!**********************************************!*\
  !*** ./src/js/assembling/modules/2slider.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  const offerSlides = document.querySelectorAll('.offer__slide'),
        btnPrev = document.querySelector('.offer__slider-prev'),
        btnNext = document.querySelector('.offer__slider-next'),
        countCurr = document.querySelector('#current'),
        countTotal = document.querySelector('#total'),
        offerSlider = document.querySelector('.offer__slider-wrapper'),
        slideWrap = document.querySelector('.offer__slider-wrap');

  if (offerSlides.length > 9) {
    countTotal.textContent = offerSlides.length;
  } else {
    countTotal.textContent = `0${offerSlides.length}`;
  }

  let slideIndex = offerSlides.length;

  function nextSlide() {
    slideIndex++;

    if (slideIndex >= offerSlides.length) {
      slideIndex = 0;
    }

    slideWrap.style.transform = `translateX(-${slideIndex * 650}px)`;

    if (slideIndex < 9) {
      countCurr.textContent = `0${slideIndex + 1}`;
    } else {
      countCurr.textContent = slideIndex + 1;
    }
  }

  nextSlide(slideIndex);

  function prevSlide() {
    slideIndex--;

    if (slideIndex < 0) {
      slideIndex = offerSlides.length - 1;
    }

    slideWrap.style.transform = `translateX(-${slideIndex * 650}px)`;

    if (slideIndex < 9) {
      countCurr.textContent = `0${slideIndex + 1}`;
    } else {
      countCurr.textContent = slideIndex + 1;
    }
  }

  btnPrev.addEventListener('click', () => prevSlide());
  btnNext.addEventListener('click', () => nextSlide()); // dots

  let sliderDotsBox = document.querySelector('.slider__dots'); // dotList.classList.add('offer__slider__dots');
  // sliderDotsWrap.append(dotList);

  for (let i = 0; i < offerSlides.length; i++) {
    let dotList = document.createElement('div');
    dotList.classList.add('slider__dots-item');
    dotList.setAttribute('data-dot-id', i);
    sliderDotsBox.append(dotList);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/assembling/modules/2tabs.js":
/*!********************************************!*\
  !*** ./src/js/assembling/modules/2tabs.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function tabs() {
  const tabContents = document.querySelectorAll('.tabcontent'),
        tabHeaderItems = document.querySelectorAll('.tabheader__item');
  tabContents.forEach(elem => elem.classList.add('hide'));

  function showTab(i) {
    tabContents.forEach((elem, num) => {
      if (num === i) {
        elem.classList.remove('hide');
      } else {
        elem.classList.add('hide');
      }
    });
    tabHeaderItems.forEach((elem, num) => {
      if (num === i) {
        elem.classList.add('tabheader__item_active');
      } else {
        elem.classList.remove('tabheader__item_active');
      }
    });
  }

  showTab(0);

  function tabsClick() {
    tabHeaderItems.forEach((elem, num) => {
      elem.addEventListener('click', () => {
        showTab(num);
      });
    });
  }

  tabsClick();
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

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
/*!*************************************!*\
  !*** ./src/js/assembling/script.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_2modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/2modal */ "./src/js/assembling/modules/2modal.js");
/* harmony import */ var _modules_2tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/2tabs */ "./src/js/assembling/modules/2tabs.js");
/* harmony import */ var _modules_2slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/2slider */ "./src/js/assembling/modules/2slider.js");





 // import {openModal, closeModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_2modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_2modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
  (0,_modules_2tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_2slider__WEBPACK_IMPORTED_MODULE_2__["default"])(); // // setting timer
  // // const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);
  // /
  // // tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active'); 
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map