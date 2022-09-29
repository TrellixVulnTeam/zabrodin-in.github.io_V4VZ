'use strict';

import openModal from './modules/2modal';
import {closeModal} from './modules/2modal';
import tabs from './modules/2tabs';
import slider from './modules/2slider';

// import {openModal, closeModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    openModal();
    closeModal();
    tabs();
    slider();
    
    
    // // setting timer
    // // const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);
    // /
    // // tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active'); 
});