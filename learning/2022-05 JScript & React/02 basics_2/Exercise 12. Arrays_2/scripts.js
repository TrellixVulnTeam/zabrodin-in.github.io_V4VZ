'use strict';

/*
3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.
Может показать сложной с первого взгляда, но это совсем не так 🙂
*/
// FIRST
const someString = 'This is some strange string';
function reverse(str) {
    let result = '';
    if (typeof(str) == 'string') {
        for (let i = 1; i <= (str.length); i++) {
            result += str[str.length - i];
        }
    } else {
        result = 'Error!';
    }
    return result;
}
console.log(reverse(someString));

// 
let temp = [...someString];
console.log(temp);

// SECOND
function reverse2([...str]) {
    let temp = '';
    for (let i = 0; i < +(str.length / 2); i++) {
        temp = str[i];
        str[i] = str[str.length - 1 - i];
        str[str.length - 1 - i] = temp;
    }
    return str.join();
}
console.log(reverse(someString));

/*
4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB

Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
*/
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(available, missing) {
    let result = '';
    for (let value of available) {
            if (missing.indexOf(value) < 0) {
                result += value + '\n';
            }
    }
    if (result == '') {
        result = 'No available currencies';
    }
    return result;
}
console.log(availableCurr(additionalCurrencies, ['UAH', 'CNY']));