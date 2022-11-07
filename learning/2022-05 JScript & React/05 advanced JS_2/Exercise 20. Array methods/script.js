'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];
/*
Задачи:
1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...
*/
function showGoodFilms(array) {
    return array.filter(item => item.rating >= 8);
}
console.log(showGoodFilms(films));

/*
2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
Пример:
showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
*/
function showListOfFilms(array) {
    return array.map(element => element.name).join(`, `);
}
console.log(showListOfFilms(films));

/*
3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
Пример:
setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]
*/
const tranformedArray = function setFilmsIds(array) {
    array.forEach((element, num) => element.id = num);
    return array;
};
// console.log(films);
// console.log(tranformedArray(films));
console.log(films);

/*
4) Запишите результат предыдущей функции в переменную tranformedArray.
Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)
*/
function checkFilms(array) {
    return array.every((item) => item.id >= 0);
}

console.log(checkFilms(films));
console.log(checkFilms(tranformedArray(films)));