'use strict';
/* 
Задание:
Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog»  является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.
Пример:
isPangram(
    «The quick brown fox jumps over the lazy dog»
) => true
isPangram(
    «Hello world»
)  => false
P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, которые мы будем проходить дальше по курсу. Но и без них можно это сделать. 
В ответах я приложу несколько вариантов для ознакомления.
Ответ с кодом этой задачи можно найти тут:
href="https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/hard_tasks/hard_2.js
*/

// ONLY FOR ENG ALPHABET
function isPangram(string) {
    let result = false,
        set = new Set();
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if ( (string[i] != ' ') && (string[i] != '.') && (string[i] != ',') && (string[i] != '!') && (string[i] != '?') && (string[i] != '-') ) {
            set.add(string[i]);
        }
    }
    if (set.size == 26) {
        result = true;
    }
    return result;
}

console.log(isPangram(`The quick brown fox jumps over the lazy dog`));
console.log('-------');
console.log(isPangram(`Hello world`));



// SOLUTIONS FROM COURSE

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
// }

// // С другим методом и строка каждый раз преобразовывается в коллбэке
// function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((x) => string.toLowerCase().includes(x));
// }

// // При помощи цикла
// function isPangram(str) {
//     letters: for (var c = 0; c < 26; c++) {
//         for (let i = 0; i < str.length; i++) {
//             let s = str.charCodeAt(i)
//             if (s < 65 || s > 90 && s < 97 || s > 122) continue
//             if (s === 65 + c || s === 97 + c) continue letters
//         }
      
//         return false
//     }
    
//     return true
// }

// // При помощи Set
// function isPangram(string) {
//     return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
// }

// // С использованием регулярных выражений
// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }