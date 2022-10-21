'use strict';

const shops = [
        {rice: 500},
        {oil: 200},
        {sugar: 1000}
    ],
    budget = [5000, 2000, 1000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);
console.log(map.get(shops[0]));
console.log(map.has(shops[0]));


map.delete(shops[0]);
console.log(map);

console.log(map.size);

// map.clear();
// console.log(map);

console.log(map.keys());
// map iteration
for (let shop of map.keys()) {
    console.log(shop);
}

// taking a list of items from shops
console.log(`\ntaking a list of items from shops:`);
let goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}
console.log(goods);

// output map's content
console.log(`\n//// \\\\ //// output map's content`);
for (let shop of map.entries()) {
    console.log(shop);
}
// output wth destructuring
console.log(`//// \\\\ //// output wth destructuring`);
for (let [shop, price] of map.entries()) {
    console.log(price, shop);
}
// output wth forEach
console.log(`//// \\\\ //// output wth forEach`);
map.forEach((key, i, map) => {
    console.log(key, ' >> ', i);
});


//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
// Object >>>> to Map
const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));
console.log(`\nuserMap from Object:`);
console.log(userMap);

//// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// 
// Map >>>> to Object
const newUserObj = Object.fromEntries(userMap);
console.log(`\nnewUserObj from Map:`);
console.log(newUserObj);