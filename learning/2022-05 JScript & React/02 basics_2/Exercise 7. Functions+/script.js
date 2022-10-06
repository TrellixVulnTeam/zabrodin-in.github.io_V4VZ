'use strict';

/* Задачи:
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
/ Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:
calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
*/
function calculateVolumeAndArea(length) {
    length = +length;
    if (length == '' || isNaN(length) || length == 'undefined' || length < 0.1) {
        return (`Invalid value`);
    }
    let volume = length * length * length,
        area = length * length * 6;
    return (`Cube volume = ${volume}, area = ${area}`);
}
console.log(calculateVolumeAndArea(1));
console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea('5'));
console.log(calculateVolumeAndArea(0));


/*
2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 

Наглядно:
>>>>>  Места   2,4  6,8  10,12  14,16  18,20  22,24  26,28  30,32  34,36
>>>>>          1,3  5,7   9,11  13,15  17,19  21,23  25,27  29,31  33,35
>>>>>   
>>>>>  Купе     1    2     3      4      5      6     7      8       9

Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:
getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует"
getCoupeNumber(0)  => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
*/

function getCoupeNumber(number) {
    if (typeof(number) != 'number' || number % 1 != 0) {
        return `Input error. Try again`;
    } else if (number < 1 || number > 36) {
        return `There are no such seat numbers in the train car`;
    } else {
        for (let i = 0; i < 4; i++) {
            let temp = (number + i) % 4;
            if (temp == 0) {
                return (number + i) / 4;
            }
        }
    }
}
console.log(getCoupeNumber(12));