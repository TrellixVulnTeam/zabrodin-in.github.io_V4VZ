'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// writable
    // true - u can change the property of this ibject 
    // false - read only

// enumerable
    // true - will be iterated in cycles

// configurable
    // true - property can be deleted

console.log(Object.getOwnPropertyDescriptor(user, 'name')); // reading flags


/* 
Object.defineProperty(user, 'name', {writable: false});
user.name = 'Ne Alex';
console.log(Object.getOwnPropertyDescriptor(user, 'name')); // reading flags
*/

// if u'll create property by .defineProperty - flags will be FALSE
Object.defineProperty(user, 'gender', {value: 'Male'});
console.log(Object.getOwnPropertyDescriptor(user, 'gender')); // reading flags

// if we want to hide function from property list
console.log('\nFULL LIST:');
for (let key in user) console.log(key);
Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
console.log(`\nWITHOUT FUNCTION:`)
for (let key in user) console.log(key);







console.log('\n///////////');
const secondUser = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
Object.defineProperty(user, 'gender', {value: 'Male'});

if (user.name == secondUser.name) {
    console.log(`THEY R SIMILAR`);
} else {
    console.log(`THEY R DIFFERENT`);
}

console.log(Object.is(user.name, secondUser.name));