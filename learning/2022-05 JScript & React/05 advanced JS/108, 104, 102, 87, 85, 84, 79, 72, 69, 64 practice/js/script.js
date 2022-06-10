'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import classes from './modules/classes';
import forms from './modules/forms';
import slider from './modules/slider';
import timer from './modules/timer';
import calc from './modules/calc';
// import {openModal, closeModal} from './modules/modal';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    // setting timer
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('.modal', modalTimerId);
    classes();
    slider({
        container: '.offer__slider',
        prevArr: '.offer__slider-prev',
        nextArr: '.offer__slider-next',
        counterCurr: '#current',
        counterTotal: '#total',
        wrapper: '.offer__slider-wrapper',
        slide: '.offer__slide',
        field: '.offer__slider-inner'
    });
    forms('form');
    timer('.timer', '2022-06-28');
    calc();
    // openModal('.modal');
    // closeModal('.modal');
});