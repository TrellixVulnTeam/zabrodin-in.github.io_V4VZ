"use strict";

let options = {
    name1: 'black',
    name2: 1024,
    name3: false,
    name4: {
        subname1: 'first',
        subname2: 'second',
        subname3: 999
    },
    makeTest: function() {
        console.log('testMakeMakeMeHappy')
    }
}

console.log(options);

console.log('----1----');
for (let key in options) {
console.log(`Ключ: ${key}; значение: ${options[key]}`);
}

console.log('----2----');
for (let key in options.name4) {
console.log(`Ключ: ${key}; значение: ${options.name4[key]}`);
}

console.log('----3----');
console.log(Object.keys(options));
console.log(Object.keys(options).length);

console.log(Object.values(options));
console.log(Object.values(options).length);

console.log('----4----');
options.makeTest();

console.log('----5----');
const {subname1, subname3} = options.name4;
console.log(subname3 + ' ' + subname1);