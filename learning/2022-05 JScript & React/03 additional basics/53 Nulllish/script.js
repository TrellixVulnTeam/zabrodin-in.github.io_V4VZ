'use strict';

const box = document.querySelector('.box');

const newHeight = 100; //100
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 205}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);
// changeParams(box);

/////////////////////////////////

let userName; // "??" WORKS ONLY WITH NULL OR UNDEFINED
let userKey;
console.log(userName ?? userKey ?? 'User');