'use string';

/* <em>Задача с собеседований</em>
. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
<p>Пример:</p>
<span class="str">'This is some strange string'</span>
<em>'gnirts egnarts emos si sihT'</em> */


const someString = 'This is some strange string';

function reverse(str) {
    let result = '';
    if (typeof(str) != 'string') {
        result = 'Ошибка!';
    } else {
        for (let i = 1; i <= str.length; i++) {
            result += str[str.length-i];
        }
    }
    return result;
}

console.log(reverse(someString));

/* 
4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
const  baseCurrencies = ['USD', 'EUR'];
const  additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу 
(сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');
Вернет строку:
Доступные валюты:
UAH
RUB
Заметьте: 
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После 'валюты:'  стоит перенос строки \n , и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку 

 */


const baseCurrencies = ['USD', 'EUR'];
const baseCurrenciesObj = {a:'USD', b:'EUR'};
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = '';
    if ( (typeof(arr) == 'object') && (arr.length > 0) && ( (typeof(missingCurr) == 'string') || (missingCurr == undefined)) ) {
        result = 'Доступные валюты:\n';
        for (let i=0; i < arr.length; i++) {
            if (arr[i] != missingCurr) {
                result += (arr[i] + '\n');
            }
        }
    } else if ( (typeof(arr) == 'object') && (arr.length === 0) ) {
        result = 'Нет доступных валют';
    } else {
        result = 'Ошибка ввода';
    }
    return result;
}

// console.log(typeof(baseCurrenciesObj));
// console.log(baseCurrenciesObj.length);


console.log(availableCurr(additionalCurrencies));