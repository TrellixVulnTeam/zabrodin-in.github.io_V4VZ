'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// 1 STEP
// console.log(block);
// console.log(block.textContent);
// console.log(1 + 2);


// 2 STEP
// if (block) {
//     console.log(block.textContent);
// }
// console.log(1 + 2);

// 3 STEP
console.log(block);
console.log(block?.textContent); // ?. WAS CHEKING OPERATOR AT LEFT
                                // ONLY FOR READING
console.log(1 + 2);

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('hello');
    }
};
// console.log(userData.skills.js); // NI DATA. ERROR

// 1 VARIANT - CONDITIONS
// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }


// 2 VARIANT - CONDITIONS
// console.log(userData?.skills?.js); // WARNING (!!) userData MUST BE DEFINED

// 3 VARIANT - CONDITIONS
userData.say(); // WARNING (!!) userData MUST BE DEFINED
userData.hey?.();

quer