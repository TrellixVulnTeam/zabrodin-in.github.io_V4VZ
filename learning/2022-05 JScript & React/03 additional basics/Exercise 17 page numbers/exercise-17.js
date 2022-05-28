'use strict';
/* Это дополнительная непростая  задачка, в которой вы можете попробовать свои силы.
Решать её не обязательно. Чтобы платформа засчитала задание пройденным, можно  скопировать его из ответов.

Задание:
В каждой книге есть n страниц с номерами страниц от 1 до n. 
Написать функцию amountOfPages, аргумент которой summary 
составляется путем сложения количества цифр всех номеров страниц.
Эта функция возвращает число - количество страниц n в книге. 
Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

Пример:
Если на входе функции summary = 25, то на результат должен быть 17. 
Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617
Функция на вход как раз принимает это общее количество цифр, 
а возвращает конечное число, то есть последнюю страницу книги. 
amountOfPages(5)  => 5
amountOfPages(25)  => 17
amountOfPages(1095)  => 401    
amountOfPages(185)  => 97

Ответ с кодом этой задачи можно найти тут:
href="https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/hard_tasks/hard_1.js"
Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. 
Помните, что вариантов решения всегда несколько. */

const summary = 5; // 9 - 189 - 2899
function amountOfPages(summary){
    // Creating a string with a sequence of numbers
    let string = '';
    let i = 1;
    do {
        string = string + i++;
    } while (string.length < summary);
    console.log(`String: ${string}`);
    console.log(`Summary: ${summary} // String length: ${string.length}`);
    // Checking string length (it should be equal to summary)
    let result = '';
    if (summary > 2899) {
        string = string.slice(-4);
    } else if (summary > 189) {
        string = string.slice(-3);
    } else if (summary > 9) {
        string = string.slice(-2);
    } else {
        string = string.slice(-1);
    }
    return (result = Number(string));
}
console.log(amountOfPages(summary));

// It doing no any checks for correct input OR string.length to summary accordance



// SECOND VARIANT (FROM COURSE)
// function amountOfPages(summary){
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//       result += i;
//       if (result.length === summary) {
//         n = i;
//         break;
//       }
//     }

//     return n;
//   }