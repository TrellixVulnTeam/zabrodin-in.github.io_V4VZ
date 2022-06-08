'use strict';

// const app = '123';

//////////////////////////// 1
const number = 1;
// (function(){}()); // anonymous
(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());
console.log(number);

//////////////////////////// 2
const user = (function(){
    const privat = function() {
        console.log('I am private!');
    };
    return {
        sayHello: privat
    };
}());
user.sayHello();