'use strict';
/*
Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂
https://learn.javascript.ru/task/fibonacci-numbers

Задача:
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

Пример:
fib(4) => ''0 1 1 2"
fib(7) => ''0 1 1 2 3 5 8"
fib('7') => ''"
fib(1) => "0"
fib(0) => ''"
*/

function fib(amount) {
    let result = '';
    if (+amount < 0) {
        return `Invalid value`;
    } else if (typeof(amount) == 'string' || +amount == 0) {
        return result;
    }
    let space1 = 1,
        space2 = 0,
        itemID1 = 0,
        itemID2 = 0;
    for (let i = 1; i <= amount + 1; i++) {
        if (i == 1) {
            result += '0';
        } else if (i == 3) {
            result += ' 1';
        } else if (i > 3) {
            do {
                if (result.slice(result.length - space1, result.length - space1 + 1) != ' ' && itemID1 == 0) {
                    space1++;
                } else if (itemID1 == 0) {
                    itemID1 = result.length - space1 + 1;
                    space2 = space1 + 1;
                }

                if (itemID1 != 0) {
                    if (+result.slice(result.length - space2, result.length - space2 + 1) != ' ' && itemID2 == 0) {
                        space2++;
                    } else if (itemID2 == 0) {
                        itemID2 = result.length - space2 + 1;
                    }
                }
                // console.log(`== space1 = ${space1} // space2 = ${space2} // itemID1 = ${itemID1} // itemID2 = ${itemID2} /// result = '${result}'`);
            } while (itemID2 == 0);
            // console.log(Number(result.slice(itemID1)) + Number(result.slice(itemID2, itemID1)));
            result = result + ' ' + ((Number(result.slice(itemID1)) + Number(result.slice(itemID2, itemID1))));
            space1 = 1;
            space2 = itemID1 = itemID2 = 0;
        }
    }
    return result;
}
console.log(fib(4));
console.log(fib(120));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));
console.log(fib(-10));



const str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"
console.log(str.substring(str.length-4, str.length-1));


function tryCallback(arg, callback) {
    console.log(`Simple text with '${arg}'`);
    callback('CALLBACK TEXT');
}

function callbackFunc(arg) {
    console.log(`Some text with '${arg}'`);
}

tryCallback('TEST TEXT', callbackFunc);