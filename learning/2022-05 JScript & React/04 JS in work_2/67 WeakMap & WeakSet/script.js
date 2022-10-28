'use strict';
///// WeakMap /////
///// supports .has,.set,.delete?

// let user = {
//     name: 'Ivan'
// };

// let map = new WeakMap();
// map.set(user, 'data');

// console.log(map.has(user));
// console.log(map);

// function userNull() {
//     user = null;
//     console.log('\n>>> user = null:');
//     console.log(map.has(user));
// }

// setTimeout(userNull, 1000);



////// EXAMPLE WITH CHAT > WATCHING FOR USERS ONLINE
let cache = new WeakMap();
function cacheUser(user) { // checking if user in cache already
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}
let lena = {name: 'Elena'}, // users
    alex = {name: 'Alex'};
cacheUser(lena); // users entered the chat
cacheUser(alex);
lena = null; // lena went out
console.log(cache.has(lena)); // checking cache
console.log(cache.has(alex));



////// WeakSet /////
////// suports .add,.has,.delete

// EXAMPLE with WeakSet
// Chat
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '....', from: 'M'}
    
];
let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
console.log('-----------');
console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));
messages.shift(); // deleting 2 elems of messages
messages.shift();
console.log(readMessages.has(messages[0])); // checking deleting from readMessages