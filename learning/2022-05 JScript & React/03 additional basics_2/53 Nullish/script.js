'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h}px`;
    elem.style.width = `${w}px`;
}

changeParams(box, newHeight, newWidth);

//// NULLISH ONLY FOR >> UNDEFINED and NULL

let userName;
console.log(userName ?? 'Nullish data');

userName = NaN;
console.log(userName ?? 'Nullish data');

userName = null;
let userKey;
console.log(userName ?? userKey ?? 'Nullish data');