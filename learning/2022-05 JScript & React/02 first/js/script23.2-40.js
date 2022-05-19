'use strict';

function test() {
    let variable = 0;

    let testIn = function() {
        variable += 1;
        return variable;
    };
    return testIn;
}

let testVar = test();
console.log(testVar);
console.log(typeof(testVar));

let a = testVar();
console.log(a);
console.log(typeof(a));

let b = testVar();
console.log(b);
console.log(typeof(b));

let c = testVar();
console.log(c);
console.log(typeof(c));


console.log('============')

let a1 = test();
console.log(a1);
console.log(typeof(a1));

let b1 = a1();
console.log(b1);
console.log(typeof(b1));

let c1 = a1();
console.log(c1);
console.log(typeof(c1));



// CLOSURES TEST 2
// function testFunc(num) {
//     num = 1;
//     return function() {
//         return num += 2;
//     }
// }
// const test = testFunc(2);
// let a = test();
// let b = test();
// console.log(a, b);