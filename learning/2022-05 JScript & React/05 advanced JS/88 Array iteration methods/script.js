'use strict';

////// FILTER
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function(name) {
    return name.length < 5;
});
console.log('filter()');
console.log(shortNames);


////// MAP 1
const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => {
    return item.toLowerCase();
});
console.log('\nmap(). ver.1');
console.log(result);
// const result = answers.map(item => item.toLowerCase()); // similar as 12th row

////// MAP 2
let answers2 = ['IvAn', 'AnnA', 'Hello'].map(item => item.toLowerCase());
console.log('\nmap(). ver.2');
console.log(answers2);


////// EVERY/SOME => true or false
const array = [4, 'qwe', 'sasasa'];
const array2 = ['qdffff2', 'qwe', 'sasasa'];
console.log('\nSOME');
console.log(array.some(item => typeof(item) === 'number'));

////// EVERY
console.log('\nEVERY');
console.log(array.every(item => typeof(item) === 'number'));
console.log(array2.every(item => typeof(item) === 'string'));


////// REDUCE
const arr = [4, 5, 1, 12, 10, 3];
const res = arr.reduce((sum, current) => {
    // 0 + 4
    // 4 + 5
    // 9 + 1
    // 10 + 12
    // 22 + 10
    // 32 + 3
    // = 35
    return sum + current;
});
const res2 = arr.reduce((sum, current) => sum + current, 30.3); // 30.3 - starting value
const res3 = arr.reduce((res, curr) => `${res} + ${String(curr)}`);
console.log('\nREDUCE');
console.log(res);
console.log(res2);
console.log(res3);



///////////// EXAMPLE
console.log('\nEXAMPLE');
const obj = {
    ivan: 'person',
    ann: 'person',
    cat: 'animal',
    dog: 'animal'
};
const newArr = Object.entries(obj) //chaining
    .filter(item => item[1] === 'person')
    .map(item => item[0]);
console.log(newArr);