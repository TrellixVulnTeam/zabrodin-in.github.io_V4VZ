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





// IF TEST
// let time = '';
// 5 > 3 || 2 ? time = 'Day' : time = 'Night';
// console.log(time);


// let y = 1; let x = y = 2;
// console.log(null || 2 && 3 || 4 );


// let  a = [1, 2, 3],
//      b = [1, 2, 3]; 
// console.log(a==b);

// console.log("Ёжик" > "яблоко");
// console.log(0 || "" || 2 || undefined || true || falsе);

// (2 >= 2) && true ? console.log('true22') : console.log('false22');

// let y = 1; let x = y = 2; console.log(2 && 1 && null && 0 && undefined ); 

// let	a = [1, 2, 3], b = [1, 2, 3]; 
// "Ёжик" > "яблоко" ? console.log(true) : console.log(0 || "" || 2 || undefined || true || falsе );