'use strict';

const person = {
    name: 'Alex',
    tel: '+79998887766',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// sending info to server
console.log(JSON.stringify(person)); // result >> {"name":"Alex","tel":"+79998887766"}

// recievinig info from server
console.log(JSON.parse(JSON.stringify(person))); 

console.log('--- deep clone by JSON ---');
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';

console.log(person);
console.log(clone);