'use strict';


// //////////////// AS A FUNCTION
// ////////////////
// function User (name, age) {
//     this.name = name;
//     let userAge = age;
//     this.say = function() {
//         console.log(`Age of this person is ${userAge} and his name is ${this.name}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };
//     this.setAge = function(age) {
//         if ((typeof(age) === 'number') && (age > 0) && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Age error occurred');
//         }
//     };
// };

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());
// ivan.name = 'Alex';
// ivan.setAge(30);
// console.log(ivan.getAge());
// ivan.say();
// ivan.setAge(300);
// console.log(ivan.getAge());
// ivan.say();


//////////////// AS A CLASS
////////////////
class User {
    constructor (name, age) {
        this.name = name;
        this._age = age;
    }
    // new property
    get #surname() {
        return this._surname;
    }
    set #surname(sur) {
        this._surname = sur;
    }
    #privateClass = '<PRIVATE INFO>'
    say() {
        console.log(`\nAge of this person is ${this._age} and his name is ${this.name}`);
        console.log(`${this._surname}/${this.#surname}/${this.surname} + ${this.#privateClass}\n\n`);
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if ((typeof(age) === 'number') && (age > 0) && age < 110) {
            this._age = age;
        } else {
            console.log('Age error occurred');
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);
ivan.name = 'Alex';
ivan.surname = 'Ivanov';
ivan.age = 99;
console.log(ivan.age);
ivan.say();
ivan.age = 300;
console.log(ivan.age);
ivan.say();
console.log(ivan.surname);
console.log(ivan._surname);
console.log(ivan.privateClass);
// console.log(ivan.#privateClass);