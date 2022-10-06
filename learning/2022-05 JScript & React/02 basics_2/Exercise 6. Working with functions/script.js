'use strict';
/* 
Задачи:
1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
P.S. возвращать - это использовать ключевое слово return.
P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
/ Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20
*/

// 1
function sayHello(arg) {
    return (`Hello, ${arg}!`);
}
let name = prompt(`Enter your name`, `Alex`);
console.log(typeof(sayHello(name)));
console.log(sayHello(name));

// 2
function returnNeighboringNumbers(arg) {
    let res = [];
    for (let i = 0; i < 3; i++) {
        res[i] = arg - 1 + i;
    }
    return res;
}
console.log(returnNeighboringNumbers(0));

// 3
function getMathResult(base, arg) {
    if (typeof(base) == 'number' && typeof(arg) == 'number' && arg >= 0) {
        let result = String(base);
        for (let i = 1; i < arg; i++) {
            result += '---';
            result += base * (i + 1);
        }
        return result;
    } else if (typeof(base) == 'number') {
        let result = String(base);
        return result;
    } else {
        console.log(`This function works only with numbers`);
        return;
    }
}
console.log(getMathResult(5, '5'));

// const tempStr = "Hello world";
// console.log(tempStr.slice(6));
// console.log(tempStr);
// console.log(tempStr.substr(0, 7));
// console.log(tempStr);