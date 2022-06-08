'use strict';


const person = {
    name: 'Vasiliy',
    age: 25,
    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num;
    }
};
console.log(person.userAge = 30);
console.log(person.userAge);