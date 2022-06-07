'use strict';

// new RegExp('pattern', 'flags');
// /pattern/fl

// FLAGS
// i - regardless of the case
// g - global search across the entire row
// m - multiline mode

// CLASSES
// \d - digits
// \w - letters
// \s - spaces
// REVERSE CLASSES
// \D - not digits
// \W - not letters
// \S - not spaces

// .search(); - search only by the first match

const ans = prompt('Input ur name:'),
      reg = /n/ig,
      regDigits = /\d/;
console.log('>>>> .test();');
console.log(reg.test(ans)); // checking matches reg-pattern elements in var 'ans'

console.log('\n>>>> .search();');
console.log(ans.search(reg));

console.log('\n>>>> .match();');
console.log(ans.match(reg));
console.log(`if your input contains numbers:`);
console.log(ans.match(regDigits));

console.log('\n>>>> .replace();');
console.log(ans.replace(/./g, '*')); // changing all elements to '*'
console.log(ans.replace(/\./g, '*')); // changing all DOTS to '*'
console.log('12-34-56'.replace(/-/g, ':'));



console.log('\n==== EXAMPLE. String = "My name is R2D2"');
const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D/ig));