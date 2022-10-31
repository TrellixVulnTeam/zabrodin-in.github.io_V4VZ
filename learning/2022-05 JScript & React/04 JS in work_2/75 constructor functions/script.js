'use strict';

const temp1 = new Number(3);
console.log(temp1);

const temp2 = new function() {};
console.log(temp2);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User(`Ivan`, 1);
console.log(ivan);
ivan.hello();

console.log(`//// //// ////`);
User.prototype.exit = function() {
    console.log(`User ${this.name} escaped`);
};
ivan.exit();