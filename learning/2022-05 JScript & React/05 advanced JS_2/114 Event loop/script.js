'use strict';

// console.log('1');

// setTimeout(() => {
//     console.log('timeout 1');
// }, 4000);

// setTimeout(() => {
//     console.log('timeout 2');
// }, 4000);

// console.log('2');



setTimeout(() => {
    console.log('1');
}, 0);
console.log('2');



const arr = [1,2,3,5,7,90];
arr.forEach((item, i) => {
    setTimeout(() => {
        console.log(item);
    }, i * 1000);
});

// let k = 0;
// function count() {
//     for (let i = 0; i < 2e9; i++) {
//         k++;
//     }
//     alert(`done!`);
// }
// count();