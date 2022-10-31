'use strict';

const box = document.querySelector(`.box`);

// const width = box.clientWidth;
// const Height = box.clientHeight;

// const width = box.offsetWidth;
// const Height = box.offsetHeight;

const width = box.scrollWidth;
const Height = box.scrollHeight;

console.log(width, Height);

const btn = document.querySelector(`button`);
btn.addEventListener(`click`, () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(((box.scrollTop+box.offsetHeight)/box.scrollHeight*100).toFixed(0));
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

//// //// //// //// //// //// //// //// getCOMPUTEDstyle
const style = window.getComputedStyle(box);
console.log(style.display);
console.log(style);

//// //// //// //// //// //// //// //// DOCUMENT
console.log(document.documentElement.scrollTop);
console.log(document.documentElement.clientWidth);


// document.documentElement.scrollTop = 50;
// window.scrollBy(0, 100); // относительно текущей позиции
// window.scrollTo(0, 400); // относительно всей страницы