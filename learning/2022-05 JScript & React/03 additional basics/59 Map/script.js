'use strict';

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// console.log(user);
// user.showMyPublicData();


////// 1 
////// ТЕПЕРЬ ПРИМЕР РАБОТЫ С КАРТАМИ MAP
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const map = new Map();
map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 25000);
console.log(map);

console.log('-----');
map.set(shops[0], 5001)
    .set(shops[1], 15002)
    .set(shops[2], 25003); // Никаких запятых
console.log(map);


////// 2 
////// СОБИРАЕМ КАРТУ ИЗ 2 ИСТОЧНИКОВ
console.log('================== 2 =====================');
const shops2 = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];
const budget2 = [1000, 2000, 3000];
const map2 = new Map();
shops2.forEach((value, index) => {
    map2.set(value, budget2[index]);
});
console.log(map2);
console.log('-----');
console.log(`console.log(map2.get(shops2[0])); // << ПОЛУЧИТЬ ИНФО`);
console.log(map2.get(shops2[0])); // << ПОЛУЧИТЬ ИНФО
console.log('-----');
console.log(`console.log(map2.has(shops2[0])); // << ПРОВЕРИТЬ НАЛИЧИЕ (true)`);
console.log(map2.has(shops2[0])); // << ПРОВЕРИТЬ НАЛИЧИЕ (true)
console.log(map2.has(shops2[3])); // << ПРОВЕРИТЬ НАЛИЧИЕ (false)
console.log('-----');
console.log(`console.log(map2.size); // КОЛ-ВО ЭЛЕМЕНТОВ ВНУТРИ КАРТЫ`);
console.log(map2.size); // КОЛ-ВО ЭЛЕМЕНТОВ ВНУТРИ КАРТЫ
console.log('-----');
console.log(`map2.delete(shops2[1]); // УДАЛЕНИЕ ЭЛЕМЕНТА`);
map2.delete(shops2[1]); // УДАЛЕНИЕ ЭЛЕМЕНТА
console.log(map2);
console.log('-----');
console.log(`map2.clear(); // ОЧИСТИТЬ КАРТУ`);
map2.clear(); // ОЧИСТИТЬ КАРТУ
console.log(map2);


////// 3
////// СОЗДАЕМ КАРТУ ВРУЧНУЮ
console.log('================== 3 =====================');
const map3 = new Map([
    [{rice3: 500}, 5000],
    [{oil3: 200}, 4000]
]);
console.log(map3);


////// 4
////// МЕТОДЫ КАРТ
console.log('================= 4 ======================');
// 4.1 .keys() Получаем ключи
console.log('--- 4.1 .keys() Получаем ключи map ---');
for (let shop of map.keys()) {
    console.log(shop);
}
// Выводим список товаров
console.log('--- Выводим список товаров map ---');
const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0])
}
console.log(goods);
// 4.2 .values() Получаем значения
console.log('--- 4.2 .values() Получаем значения map ---');
for (let budgets of map.values()) {
    console.log(budgets);
}
console.log('-- через .entries --')
for (let budgets of map.entries()) {
    console.log(budgets);
}
console.log('-- через .entries и сразу деструктуризировали массив >> for (let [shops, budgets] of map.entries()) --')
for (let [shops, budgets] of map.entries()) {
    console.log(budgets, shops);
}
console.log('-- через .forEach --')
map.forEach((value, key, map) => {
    console.log('value: ', value, '; key: ', key);
});


////// 5
////// БЫСТРО СОЗДАЕМ КАРТУ ИЗ ОБЪЕКТА с помощью Object.entries
console.log('================== 5 =====================');
console.log('--- БЫСТРО СОЗДАЕМ КАРТУ ИЗ ОБЪЕКТА с помощью .entries ---');
const user2 = {
        name: 'Alex',
        surname: 'Smith',
        birthday: '20/04/1993',
        showMyPublicData: function() {
            console.log(`${this.name} ${this.surname}`);
        }
    };
const userMap = new Map(Object.entries(user2));
console.log(userMap);


////// 6
////// НАОБОРОТ >> ОБЪЕКТ ИЗ КАРТЫ с помощью Object.fromEntries
console.log('================== 6 =====================');
console.log('--- НАОБОРОТ >> ОБЪЕКТ ИЗ КАРТЫ с помощью Object.fromEntries ---');
const userObj = Object.fromEntries(userMap);
console.log(userObj);