'use strict';
//// //// //// ////
let text = 'Hello world!!',
    i = 0;

let timerId = setTimeout((text) => {
    console.log(text);
}, 2000, /*'Hello'*/ text);

//// //// //// ////
const timerId2 = setTimeout(someFunc, 2500);
function someFunc() {
    console.log(`some func`);
}

//// //// //// ////
clearInterval(timerId);

//// //// //// ////
const btn = document.querySelector(`.btn`);
btn.addEventListener(`click`, () => {
    timerId = setInterval(() => {
        if (i == 3) {
            clearInterval(timerId);
        }
        console.log(text);
        i++;
    }, 500);
});

//// //// //// ////
let id = setTimeout(function log() {
    console.log(`some text`);
    id = setTimeout(log, 500);
}, 500);

//// //// //// //// //// //// //// //// //// //// //// ////
function myAnimation() {
    let pos = 0;
    const box = document.querySelector(`.box`),
          id = setInterval(move, 10);
    function move() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}
btn.addEventListener(`click`, myAnimation);