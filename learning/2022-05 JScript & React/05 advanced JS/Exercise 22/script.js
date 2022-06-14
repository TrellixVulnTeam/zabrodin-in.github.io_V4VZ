'use strict';

// let item = {
//     first: '1',
//     second: '2',
//     third: '3'
// };
// console.log(Object.entries(item));

const a = (i) => {
    i = i * 20;
    console.log(`func a = i * 20 = ${i}`);
    return i;
};
// console.log('\n', a(3));
const b = (i) => {
    i = i / 100;
    console.log(`func b = i / 100 = ${i}`);
    return i;
};
// console.log(b(3));
const c = (i) => {
    i.toFixed(2);
    console.log(`func c .toFixed(2) = ${i}`);
    return i;
};
// console.log(c(3));
// const func = (x) => (a(b(c(x))));
// console.log(func(3));

const compose = (...funcArray) => (x) => funcArray.reduceRight((prevValue, currValue) => currValue(prevValue), x);
const result = compose(c, b, a);
result(3);




////// ADDING PREFIX
const addPrefix = (price) => '$' + String(price);
const discountWithPrefix = compose(
    addPrefix,
    c,
    b,
    a
);
console.log(discountWithPrefix(200));



////// PIPE and COMPOSE
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const addPrefix3 = (price) => "$" + String(price);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);
const compose3 =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const discountPipe = pipe(multiply20, divide100, normalizePrice, addPrefix3);
const discountCompose = compose3(
  addPrefix3,
  normalizePrice,
  divide100,
  multiply20
);

console.log(discountPipe(200)); // '$40.00'
console.log(discountCompose(200)); // '$40.00'



////// UNLIMITED ARGUMENTS
const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));