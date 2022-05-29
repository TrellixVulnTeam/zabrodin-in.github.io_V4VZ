'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} is logged out`);
};

const alex = new User('Alex', 20),
      ann = new User('Ann', 35);

console.log(alex);
console.log(ann);

alex.hello();
ann.hello();

alex.exit();
ann.exit();

console.dir(User);