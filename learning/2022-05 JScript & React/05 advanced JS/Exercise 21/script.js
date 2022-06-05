'use strict';
// Задачи:
// Ответ с кодом этих задач можно найти тут: https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/4_arrays/arrays_2.js
// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];
const getPositiveIncomeAmount = (data) => {
    const newArr = data.filter(item => item.amount > 0);
    // console.log(newArr);
    // for (let i = 0; i < newArr.length; i++) {
    //     newArr[i] = newArr[i].amount;
    // }
    return newArr.reduce((sum, item) => sum + item.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
// Пример:
// getTotalIncomeAmount(funds) => -500

const getTotalIncomeAmount = (data) => {
    if (data.every(item => item.amount > 0)) {
        return getPositiveIncomeAmount(data);
    }
    return data.reduce((sum, current) => sum + current.amount, 0);
    // return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data); // second variant
};
console.log(getTotalIncomeAmount(funds));