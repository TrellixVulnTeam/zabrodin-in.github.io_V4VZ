'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs');
    const modal = require('./modules/modal');
    const classes = require('./modules/classes');
    const forms = require('./modules/forms');
    const slider = require('./modules/slider');
    const timer = require('./modules/timer');
    const calc = require('./modules/calc');

    tabs();
    modal();
    classes();
    slider();
    forms();
    timer();
    calc();
});