'use strict';

const btn = document.querySelector('#btn'),
    overlay = document.querySelector('.overlay');

// ПРЯМОЙ ЗАПУСК СОБЫТИЯ. ПЛОХОЙ ВАРИАНТ, МОЖНО ЗАПУТАТЬСЯ
// btn.onclick = function() {
//     alert('Clickkkk');
// };
// btn.onclick = function() {
//     alert('Clickkkk second');
// };


// ПОСТАНОВКА СОБЫТИЯ В ОЧЕРЕДЬ
// btn.addEventListener('click', () => {
//     alert('click');
// });
// btn.addEventListener('click', () => {
//     alert('second click');
// });


// ПРАКТИКА
// btn.addEventListener('mouseenter', () => {
//     console.log('hover');
// });
// btn.addEventListener('click', (event) => {
//     console.log(event);
//     alert('click');
//     event.target.remove();
// });

////////////////////////////////////////////////////
let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type);
    // alert('click');
    // // event.target.remove();
    // i++;
    // if (i > 0) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

const btns = document.querySelectorAll('button');
btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});