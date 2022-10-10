'use strict';

const box = document.getElementById(`box`);
console.log(box);

const btns = document.getElementsByTagName(`button`);
console.log(btns);

const btns2 = document.getElementsByTagName(`button`)[1];
console.log(btns2);
const btns3 = document.getElementsByTagName(`button`);
console.log(btns3[1]);

const circles = document.getElementsByClassName(`circle`);
console.log(circles);

console.log(`//////////`);
const hearts = document.querySelectorAll(`.heart`);
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector(`.heart`);
console.log(`oneHeart:`);
console.log(oneHeart);