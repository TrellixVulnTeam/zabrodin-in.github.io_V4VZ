"use strict";

//      ********************
//      ********************
//                      ***
//                     ***
//                    ***
//                  ***
//                ***
//              ***
//            ***
//          ***
//        ***
//      ***

//////////////////////////////////////////////////
// 1) СЧИТАЕМ ОБЪЕМ И ПЛОЩАДЬ СТОРОН КУБА 
// function calculateVolumeAndArea(num) {
//     let result = '';
//     if (isNaN(num) || num < 1 || num % 1 != 0) {
//         result = 'При вычислении произошла ошибка';
//     } else {
//         result = `Объем куба: ${num*num*num}, площадь всей поверхности: ${num*num*6}`;
//     }
//     return result;
// }
// console.log(calculateVolumeAndArea(1));

//////////////////////////////////////////////////
// 2) ОПРЕДЕЛЯЕМ НОМЕР КУПЕ ПО НОМЕРУ МЕСТА
// function getCoupeNumber(num) {
//     let result = '';
//     if (isNaN(num) || typeof(num) != 'number' || num < 0 || num % 1 !== 0) {
//         result = 'Ошибка. Проверьте правильность введенного номера места';
//     } else {
//         if (num >= 1 && num <= 4) {
//             result = 1;
//         } else if (num >= 5 && num <= 8) {
//             result = 2;
//         } else if (num >= 9 && num <= 12) {
//             result = 3;
//         } else if (num >= 13 && num <= 16) {
//             result = 4;
//         } else if (num >= 17 && num <= 20) {
//             result = 5;
//         } else if (num >= 21 && num <= 24) {
//             result = 6;
//         } else if (num >= 25 && num <= 28) {
//             result = 7;
//         } else if (num >= 29 && num <= 32) {
//             result = 8;
//         } else if (num >= 33 && num <= 36) {
//             result = 9;
//         } else {
//             result = 'Таких мест в вагоне не существует';
//         }
//     }
//     return result;
// }

// console.log(getCoupeNumber(2.2));



//////////////////////////////////////////////////

//         ****
//        ******
//      **      **
//      **      **
//      **      **
//        ******
//        ******
//      **      **
//      **      **
//      **      **
//        ******
//         ****

//////////////////////////////////////////////////
// 1) Переводим минуты в часы/минуты (напр.: 150 минут = 2 часа 30 минут)

// function getTimeFromMinutes(X) {
//     let result = '';
//     if (isNaN(X) || typeof(X) != 'number' || X < 0 || X % 1 !== 0) {
//         result = 'Ошибка, проверьте данные';
//     } else {
//         result = 'Это ' + Math.floor(X / 60) + ' час';
//         let temp = '' + Math.floor(X / 60);
//         temp.slice(temp.length-1);
//         if (temp != 1) {
//             if (temp == 2 || temp == 3 || temp == 4) {
//                 result += 'а';
//             } else {
//                 result += 'ов';
//             }
//         }
//         temp = '' + X % 60;
//         result += ` и ${temp} минут`;
//         temp.slice(temp.length-1);
//         if (temp == 1) {
//             result += 'а';
//         } else if (temp == 2 || temp == 3) {
//             result += 'ы';
//         }
//     }
//     return result;
// }
// getTimeFromMinutes(0);
// getTimeFromMinutes(-12);
// getTimeFromMinutes(150);
// getTimeFromMinutes('fqw');
// getTimeFromMinutes(222.2);
// getTimeFromMinutes(68);
// getTimeFromMinutes(222);

// getTimeFromMinutes(0);
// getTimeFromMinutes(2222);
// getTimeFromMinutes(77);


//////////////////////////////////////////////////
// 2) Пишем функцию, которая принимает 4 числа и возвращает наибольшее
// function findMaxNumber(a, b, c, d) {
//     let arr = [a, b, c, d],
//         check = 1,
//         result = 0; 
//     for (let i = 0; i < arr.length; i++) {
//         console.log(typeof(arr[i]) + ' ' + check);
//         if (isNaN(arr[i]) || typeof(arr[i]) === 'string') {
//             check = 0;
//         }
//     }
//     if (check === 1) {
//         result = Math.max.apply(null, arr);
//     }
//     console.log(result)
//     return result;
// }


// findMaxNumber(1, 2, 3, 5);
// findMaxNumber(1, 2, '3', 5);
// findMaxNumber(1, 2, 3, 5.5);



//////////////////////////////////////////////////

//         ****
//        ******
//      **      **
//      **      **
//      **      **
//        ********
//        ********
//              **
//              **
//              **
//        ******
//         ****

//////////////////////////////////////////////////
// ЗАДАЧА НА ЧИСЛО ФИБОНАЧЧИ
// ПРИМЕР: fib(4) = '0 1 1 2'
//         fib(7) = '0 1 1 2 3 5 8'

function fib(num) {
    let arr = [],
        result = '';
    if (num % 1 != 0) {
        // console.log('Вы ввели дробное число или текст');
        return result;
    }
    for (let i = 0; i < num; i++) {
        result = '';
        if (i === 0) {
            arr[i] = 0;
        } else if (i === 1) {
            arr[i] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    // console.log(arr);
    for (let i = 0; i < num; i++) {
        if (i === num - 1) {
            result += (arr[i]);
        } else {
            result += (arr[i] + ' ');
        }
    }
    // console.log(result);
    return result;
}

fib(1);
fib(0);
fib(2);
fib(0);
fib('aw');
fib(3);
fib(3.3);
fib(8);