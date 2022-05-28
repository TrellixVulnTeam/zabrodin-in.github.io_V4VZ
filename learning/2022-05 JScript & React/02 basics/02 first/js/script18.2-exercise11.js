'use strict';

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// Семья состоит из: Peter Ann Alex Linda

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет 
// выводить в консоль эти строки в нижнем регистре


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1 + 2
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let result = '';
    if (arr.length >= 1) {
        result += `Семья состоит из: `;
        arr.forEach(element => {result += element + ' ';});
        return result;
    }
    return result += 'Семья пуста';
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(element => {
        console.log(element.toLowerCase());
    });
}


console.log(showFamily(family));
console.log(standardizeStrings(favoriteCities));