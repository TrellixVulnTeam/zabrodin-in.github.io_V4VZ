"use strict";

// let array = [0,1,2,3,4,5,6,7,8,9],
//     arrMirror = array;

// console.log(`array: ${array}`);
// console.log(`arrMirror: ${arrMirror}`);

// arrMirror[3] = '123';
// console.log(`--------`);

// console.log(`array: ${array}`);
// console.log(`arrMirror: ${arrMirror}`);

// arrMirror = [];

// for (let i = 0; i < array.length; i++) {
//     arrMirror[i] = array[i];
//     console.log(`${arrMirror[i]} = ${array[i]}`);
// }
// console.log(`--------`);

// console.log(`array: ${array}`);
// console.log(`arrMirror: ${arrMirror}`);

// arrMirror[3] = '321';
// console.log(`--------`);

// console.log(`array: ${array}`);
// console.log(`arrMirror: ${arrMirror}`);




//////////////////////////////////////////////////////////////////////////////



// let obj = {
//         a: 1,
//         b: 22,
//         x: {
//             x1: 'x1',
//             x2: 'x2'
//         }
//     },
//     objNew = {
//         c: 'c',
//         d: 'd'
//     };

// console.log(Object.assign(objNew, obj));


// console.log(`--------`);
// let objCopy = Object.assign({}, obj);
// console.log(obj);
// console.log(objNew);
// console.log(objCopy);

//////////////////////////////////////////////////////////////////////////////





// let arr = [1,2,3,4,5],
//     arr2 = [];

// console.log(arr);
// console.log(arr2);

// console.log(`--------`);
// arr2 = arr.slice();
// arr2[0] = 'dqwiooqqwd';
// console.log(arr2);




//////////////////////////////////////////////////////////////////////////////




// let a = [1,2,3,4],
//     b = [11,12,13,14],
//     c = [];

// console.log(c);

// c = a + b;
// console.log(c);

// c = [];
// c[0] = a;
// c[1] = b;
// console.log(c);

// c = [...a, ...b, ...a];
// console.log(c);



// //////////////////////////////////////////////////////////////////////////////

// console.log(`--------`);console.log(`--------`);

// function separation(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// separation(...c);




//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



let array = [1,2,3,4,5,6,7],
    arrayCopy = [...array];
arrayCopy[2] = 1;
console.log(`array = ${array}`);
console.log(`arrayCopy = ${arrayCopy}`);

console.log(`--------`);
let obj = {
        a: 'a',
        b: 'b',
        c: 'c'
    },
    objCopy = {...obj};
objCopy.b = 'BBB';
console.log(obj);
console.log(objCopy);