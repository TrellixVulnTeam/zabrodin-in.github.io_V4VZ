'use strict';
/*
Задача:
У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда
*/
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
function sortStudentsByGroups(array) {
    array.sort();
                    console.log (`Sorted array: ${array}`);
    let result = [],
    index = 0;
    for (let i = 0; i < Math.floor(array.length / 3); i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
            result[i].push(array[index]);
            index++;
        }
    }
    result[result.length] = 'Remaining students:';
    if (array.length % 3 == 0) {
        result[result.length - 1] += ' -';
    } else {
        do {
            result[result.length - 1] += ` ${array[index]}`;
            index + 2 > array.length ? result[result.length - 1] += '' : result[result.length - 1] += ',';
            index++;
        } while (index < array.length);
    }
    return result;
}
console.log(sortStudentsByGroups(students));