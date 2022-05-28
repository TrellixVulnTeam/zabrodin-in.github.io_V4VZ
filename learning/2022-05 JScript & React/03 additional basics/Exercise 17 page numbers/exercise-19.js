'use strict';
/* 
Задание:
Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
deepCount([1, 5, 3]) => 3
deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сан + его внутренность)
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([]) => 0deepCount([[[[[[[[[]]]]]]]]]) => 8
Ответ с кодом этой задачи можно найти тут:
href="https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/hard_tasks/hard_3.js"
Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.  
*/

function deepCount(a){
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
}

let a = [1, 2,3 ,4,5,6, [] ,[1,2,1], [1,2,[1,[1,2]]]];
console.log(Array.isArray(a));
console.log(deepCount(a));

// COURSE SOLUTIONS
// // Вариант с циклом
// function deepCount(a){
//     let count = a.length;
//     for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//     return count;
// }

// // Вариант с методом reduce
// function deepCount(a){
//     return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
// }