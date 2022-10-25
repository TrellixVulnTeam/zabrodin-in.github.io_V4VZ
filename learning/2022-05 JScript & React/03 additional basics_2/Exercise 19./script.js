'use strict';

/*
Задание:
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
deepCount([1, 5, 3]) => 3
deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([]) => 0
deepCount([[[[[[[[[]]]]]]]]]) => 8
*/

let count = 0;
function deepCount(array){
    count += array.length;
    array.forEach(element => {
        if (Array.isArray(element)) {
            deepCount(element);
        }
    });
    return count;


    /*
    let result = 0;
    function countElem(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let arr2 = arr[i];
                result++;
                countElem(arr2);
            } else {
                result++;
            }
        }
        return result;
    }
    return countElem(a);
    // 0 проверяем input на массив - продолжаем работу или прерываем работу функции и переходим к 3 пункту
    // 1 считаем все элементы
    // 2 перебираем все. если массив - проводим для него проход по 1 и 2 пунктам
    // 3 выдаем результат
    */
}
let arr = [[[[[[[[[]]]]]]]]];
console.log(deepCount(arr));