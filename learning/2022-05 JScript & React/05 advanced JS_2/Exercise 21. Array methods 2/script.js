'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];
/*
Задачи:
1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
Пример:
getPositiveIncomeAmount(funds) => 13300
*/
function getPositiveIncomeAmount(array) {
    return array.filter(item => item.amount > 0)
    .map(item => item.amount)
    .reduce((sum, curr) => sum + curr);
}
console.log(getPositiveIncomeAmount(funds));

/*
2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
Пример:
getTotalIncomeAmount(funds) => -500
*/
function getTotalIncomeAmount(array) {
    if (array.some(item => item.amount < 0)) {
        return array.map(item => item.amount).reduce((sum, curr) => sum + curr);
    } else {
        return getPositiveIncomeAmount(array);
    }
}
console.log(getTotalIncomeAmount(funds));