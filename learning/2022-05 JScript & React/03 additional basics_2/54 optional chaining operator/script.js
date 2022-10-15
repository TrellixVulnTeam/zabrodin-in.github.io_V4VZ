'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// console.log(block.textContent); // ERROR (no text content)

if (block) {
    console.log(block.textContent);
}

console.log(block?.textContent);

console.log(2 * 4);

////// 

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log(`Hello`);
    }
};
// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }
console.log(userData.skills?.js);
userData.say();
userData.hi?.();