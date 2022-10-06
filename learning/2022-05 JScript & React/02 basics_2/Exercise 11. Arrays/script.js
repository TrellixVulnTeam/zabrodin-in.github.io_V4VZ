'use strict';

/*
Задачи:
*/
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
/*
1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
*/
function showFamily(arr) {
    let result;
    if (arr.length > 0) {
        result = 'Family consists of:';
        for (let value of arr) {
            result += ` ${value}`;
        }
    } else {
        result = 'Family is empty';
    }
    return result;
}
console.log(showFamily(family));

///////

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
/*
2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
Пример:
standardizeStrings(favoriteCities)  выведет в консоль
lisbon
rome
milan
dublin
*/
function standardizeStrings(arr) {
    arr.forEach(elem => {
        console.log(elem.toLowerCase());
    });
}
standardizeStrings(favoriteCities);