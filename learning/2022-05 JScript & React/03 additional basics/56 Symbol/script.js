'use strict';


//////////// 1 ////////////
// const obj = {
//     'name': 'Test',
//     [Symbol('id')]: 1
// };

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id == id2);

// obj[id] = 1;
// console.log(obj);
// console.log(obj[id]);

// for (let value in obj) console.log(value);



//////////// 2 ////////////
let id = Symbol("id");
const obj = {
    'name': 'Test',
    [id]: 1,
    getId: function() {
        return this[id];
    }
};

console.log(obj);
console.log(obj[id]);
console.log(obj.getId());

console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);


//////////// 3 GLOBAL ////////////
const obj2 = {
    'name': 'Test',
    [Symbol.for('id')]: 111
};

console.log(obj2[Symbol.for('id')]);
console.log(obj2);