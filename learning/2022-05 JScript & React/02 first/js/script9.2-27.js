//////////////////// EXERCISE 6

"use strict";

function sayHello(name) {
    return (`Привет, ${name}!`);
}
console.log(sayHello("Антон"));

//////////////////////////////// TASK 2

function returnNeighboringNumbers(num) {
    let array = [];
    array[0] = num - 1;
    array[1] = num;
    array[2] = num + 1;
    console.log(array);
}
returnNeighboringNumbers(5);

//////////////////////////////// TASK 3

function getMathResult(arg, num) {
    let result = '';
    if ((num < 1) || (typeof(num) === 'string')) {
        return arg;
    } else if (num >= 1) {
        for (let i = 1; i <= num; i++) {
            result += arg * i;
            if (i !== num) {
                result += '---';
            }
        } 
    } else {
        console.log('Unexpected error');
    }
    return result;
}

console.log(getMathResult(10, 0));