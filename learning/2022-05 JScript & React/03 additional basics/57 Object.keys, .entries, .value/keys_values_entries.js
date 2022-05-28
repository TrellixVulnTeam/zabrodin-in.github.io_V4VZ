'use strict';

Object.keys();
Перечисляет свойства объекта в массив (только перечисляемые свойства с enumerable: true)
Альтернатива циклу for..in
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Object.values();
Передает массив значений заданного объекта (только тех, где enumerable: true)
Альтернатива циклу for..in
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values

Object.entries();
Возвращает массив собственных перчисляемых свойствв объекта, вместе со значениями
const obj = {
    1: 11,
    2: '22',
    3: 33
};
Object.entries(obj) = [['1', 11], ['2', '22'], ['3', 33]]
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries