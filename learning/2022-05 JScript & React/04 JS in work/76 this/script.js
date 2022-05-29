'use strict';

// 1) Simply function 'this' - window. But with 'use strict' = undefined
// 2) methods of object has their own object as context
// 3) if we use 'this' in classes or constructors, it will be a new object.
// 4) manual binding for 'this' - call, apply, bind

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: `John`
};

// ////// CALL & APPLY
console.log('--------------');
sayName.call(user);
sayName.apply(user);

console.log('--------------');
// plus context
sayName.call(user, ' Smith');
sayName.apply(user, [' Elephant']);


console.log('--------------');
// ////// BIND
function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(7));

// ////// EXAMPLE IN BROWSER
const btn = document.querySelector('[data-first]');
const btn2 = document.querySelector('[data-second]');
    btn.style.width = '200px';
    btn2.style.width = '200px';
    btn.style.height = '30px';
    btn2.style.height = '30px';
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});
// btn2.addEventListener('click', () => {
//     console.log(this);
//     this.style.backgroundColor = 'green'; // even it can't to change BGColor
// });
// SOLUTION FOR btn2:
btn2.addEventListener('click', (e) => {
    console.log(this);
    e.target.style.backgroundColor = 'green'; // even it can't to change BGColor
});


// ////// this IN OBJECTS with METHODS
const obj = {
    name: 'Name',
    sayNameFunc: function() {
        const say = function() {
            console.log(this.name); // undefined. refers to func 'say'
        };
        say();
    },
    sayNameArrayFunc: function() {
        const say = () => {
            console.log(this.name); // 'Name'. refers to parent of func - 'obj'
        };
        say();
    }
};
obj.sayNameFunc();
obj.sayNameArrayFunc();