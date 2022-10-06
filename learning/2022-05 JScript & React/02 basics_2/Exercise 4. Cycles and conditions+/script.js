'use strict';

// FIRST.
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
const arr = [3, 5, 8, 16, 20, 23, 50];
let result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(arr);
console.log(result);

// SECOND
// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
let data = [5, 10, 'Shopping', 20, 'Homework'];
console.log(data);
for (let i2 = 0; i2 < data.length; i2++) {
    if (typeof(data[i2]) == 'string') {
        data[i2] += ' - done';
    } else {
        data[i2] *= 2;
    }
}
console.log(data);

// THIRD
// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
let array = [5, 10, 'Shopping', 20, 'Homework'],
    temp;
console.log(array);
for (let i3 = 0; i3 < array.length / 2; i3++) {
    temp = array[array.length - 1 - i3];
    array[array.length - 1 - i3] = array[i3];
    array[i3] = temp;
}
console.log(array);