'use strict';

const arr = [1,2,1,1,3,4,6,6,5,3,3,3];

const arrSet = new Set(arr);
console.log(arrSet);

arrSet.add('1');
console.log(arrSet);

// set.delete();
// set.has();
// set.clear();
// set.size;

for (let value of arrSet) console.log(value);
arrSet.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain, set);
});

console.log(arrSet.values());
console.log(arrSet.keys());
console.log(arrSet.entries());

//// //// //// //// //// ////
function unique(arr) {
    return Array.from(new Set(arr));
}
console.log(unique(arr));