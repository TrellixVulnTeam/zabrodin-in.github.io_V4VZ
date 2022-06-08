'use strict';

// function myModule() {
//     this.hello = function() {
//         console.log('Hello');
//     };
//     this.goodBye = function() {
//         console.log('Good bye');
//     };
// }

// module.exports = myModule;


////// EXPORT
export let one = 1; // 1

let two = 2; // 2
export {two};

export default function sayHi() { // 3 & 4 (default export)
    console.log('Hi!!!!');
}