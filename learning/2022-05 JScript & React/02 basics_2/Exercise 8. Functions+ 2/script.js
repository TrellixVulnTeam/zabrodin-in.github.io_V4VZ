'use strict';

/*
Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
/ Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
*/
function getTimeFromMinutes(argument) {
    if (argument <= 0 || String(argument).indexOf('.') > 0 || typeof(argument) != 'number') {
        return `Ivalid value`;
    }
    let hours, minutes;
    hours = String(argument / 60).slice(0, String(argument / 60).indexOf('.'));
    if (hours == '') {
        hours = String(argument / 60);
    }
    minutes = String(argument - hours * 60);
    if (hours.slice(-1) == '1' && hours != '11') {
        hours = `Это ${hours} час`;
    } else if ((+hours.slice(-1) >= 2) && (+hours.slice(-1) <= 4) && (hours != '12') && (hours != '13') && (hours != '14') && (+hours < 110)) {
        hours = `Это ${hours} часа`;
    } else {
        hours = `Это ${hours} часов`;
    }
    if (minutes.slice(-1) == '1' && minutes != '11') {
        hours += ` и ${minutes} минута`;
    } else if ((+minutes.slice(-1) >= 2) && (+minutes.slice(-1) <= 4) && (minutes != '12') && (minutes != '13') && (minutes != '14')) {
        hours += ` и ${minutes} минуты`;
    } else {
        hours += ` и ${minutes} минут`;
    }
    return hours;
}
console.log(getTimeFromMinutes(68241122));


/*
2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0
*/

function findMaxNumber(...arr) {
    if (arr.length < 4) {
        console.log(`Array length is too small`);
        return 0;
    }
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) != 'number') {
            console.log(`There is an invalid value in ${i + 1} item`);
            return 0;
        }
        if (temp < arr[i]) {
            temp = arr[i];
        }
    }
    return temp;
}
console.log(findMaxNumber(1,5,33,12.2,62,123,77541,123));