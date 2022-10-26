'use strict';

const btns = document.querySelectorAll('button');

console.log(btns[0].classList.length);
console.log(btns[0].classList.item(0));
console.log(btns[0].classList.item(1));
console.log(btns[0].classList.item(2));
console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));
console.log(btns[0].classList.add('pink', 'green'));

console.log(btns[1].classList.add('red'));
if (btns[1].classList.contains('red')) {
    console.log('RED CONTAINS');
} else {
    console.log(btns[1].classList.toggle('red'));
    console.log('RED WAS NE contains');
}

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

//// //// //// //// //// //// ////
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    // console.dir(event);
    // console.dir(event.target);
    if (event.target && event.target.tagName == `BUTTON`) {
        console.log('Hello');
    }

    if (event.target && event.target.tagName == `BUTTON` && event.target.matches(`button.red`)) { // it could be .. && event.target.classList.contains(`red`)
        console.log('Hello RED');
    }
});

//// //// //// //// //// //// ////

btns.forEach(btn => {
    btn.addEventListener(`click`, () => {
        console.log(`Added event with forEach`);
    });
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);