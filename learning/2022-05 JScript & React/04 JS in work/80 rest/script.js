'use strict';

const log = function(a, b, ...rest) { // '...rest' or another name
    console.log(a, b, rest);
};

log('Hello,', 'world', '!!', '!', ' ', 'some test text');

// OLD VERSION
function calcOrDouble(number, basis) {
    basis = basis || 2; // if basis does not exist
    console.log(number * basis);
}
// NEW VERSION ES6
function calcOrDouble2(number, basis = 2) { // if basis does not exist
    console.log(number * basis);
}

calcOrDouble(3);
calcOrDouble2(3);