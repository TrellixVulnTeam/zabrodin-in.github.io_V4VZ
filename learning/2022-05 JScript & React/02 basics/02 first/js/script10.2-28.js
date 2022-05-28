"use strict";

///////////// STRINGS
let string = 'Long long string "Hello World"';

console.log('string length: ' + string.length);
console.log('string slice: ' + string.slice(2, 6));
console.log('string substring: ' + string.substring(6, 2));
console.log('string substr: ' + string.substr(6, 3));


///////////// NUMBERS
let num = 12.2;
console.log(Math.round(num));

let numString = "12.2";
console.log(parseInt(numString));
console.log(parseFloat(numString));