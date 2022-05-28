"use strict";

const array = [1,2,3,4,5,6,7,8];

// console.log(array);

// // -1 ITEM FROM THE END
// array.pop();
// console.log(array);

// // +1 ITEM FROM THE END
// array.push(99);
// console.log(array);

// array[99] = 100;


// // ForEach
// console.log('-------');
// array.forEach(function(value, index, arr) {
//     console.log(`value: ${value}, index: ${index}`)
// });


// // FOR OF <<
// console.log('-------');
// for (let value of array) {
//     console.log(`${value}`);
// }


// SPLIT
// let a = prompt('Input product names separated by ","'),
//     b = a.split(',');
// console.log(b);

let a = prompt('Input product names separated by ","').split(",");
console.log(a);
a.forEach(function(value, i) {
    a[i] = value.trim();
});
console.log(a);
a = a.join(` - `);
console.log(a);