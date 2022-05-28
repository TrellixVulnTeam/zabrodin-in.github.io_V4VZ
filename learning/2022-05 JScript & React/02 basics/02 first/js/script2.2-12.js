"use strict";

const obj1 = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj1['name']);


let array = [1, 2, 3, `string`, 4.5, false];
console.log(array[3], array[4]);

let testObj = {
    first: '123',
    second: '321',
    third: '333'
}
console.log(testObj);
console.log('---------');
testObj.fourth = 444;
console.log(testObj);
console.log(testObj.fourth);

testObj['fourth'] = 445;
console.log(testObj['fourth']);

let b = 'fifth';
testObj[b] = 555;
console.log(testObj);