'use strict';

import tabs from './modules/tabs';
import modalAndForms from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
// import forms from './modules/forms';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', function() {

    modalAndForms(`.modal`, `[data-modal]`, `form`);
    tabs(`.tabcontent`, `.tabheader__items`, `tabheader__item`, `tabheader__item_active`);
    timer(`.timer`, `2022-11-16T00:00`);
    cards();
    calc();
    // forms();
    slider({
        sliderTabsSel: '.offer__slide',
        sliderPrevSel: '.offer__slider-prev',
        sliderNextSel: '.offer__slider-next',
        sliderCurrSel: '#current',
        sliderTotalSel: '#total',
        slidesWrapperSel: '.offer__slider-wrapper',
        slidesInnerSel: '.offer__slider-inner'
    });
    
});