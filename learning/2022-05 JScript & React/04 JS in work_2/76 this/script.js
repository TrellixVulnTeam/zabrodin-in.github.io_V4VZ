'use strict';

// 1 // this = window (without "strict mode")
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);

// 2 // context for object methods - is the object
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        console.log(`shout:`);
        shout();
    }
};
obj.sum();

// 3 // this in constructors & classes - IS THE OBJECT INSTANCE
const User = function(name , id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}!!`);
    }
    this.echo = function() {
        console.log(this);
    };
};
let ivan = new User(`Ivan`, 20);
ivan.echo();
ivan.hello();

// 4 // manual binding THIS (call, apply, bind)
function sayName(lastName) {
    console.log(this);
    console.log(this.name + ` ` + lastName);
}
const user = {
    name: 'John'
};

sayName.call(user, `Ivanov`);
sayName.apply(user, [`Petrov`]);

//// 4.2 ////
function count(num) {
    return this * num;
}
const double = count.bind(2); // define in context 2
console.log(double(3)); // num = 3
const triple = count.bind(3);
console.log(triple(3));



//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function() {
    this.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;
    console.log(this);
});




const objectus = {
    num: 555,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
objectus.sayNumber();

const doubleMe = (a) => console.log(a * 2);
doubleMe(56);

// ARROW FUNCTION DOES NOT HAVE OWN CONTEXT !!!!