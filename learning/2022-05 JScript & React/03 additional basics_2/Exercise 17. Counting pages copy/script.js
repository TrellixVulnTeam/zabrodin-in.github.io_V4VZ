'use strict';

/*
Задание:
Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

Пример:
isPangram(«The quick brown fox jumps over the lazy dog») => true
isPangram(«Hello world») => false
*/

function isPangram(str) {
    let res = new Set();
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ' && str[i] != '.' && str[i] != ',' && str[i] != ';' && str[i] != '-' && str[i] != '=' && str[i] != '+' && str[i] != '`' && str[i] != '"' && str[i] != "'" && str[i] != '?' && str[i] != '!' && str[i] != '@' && str[i] != '#' && str[i] != '/' && str[i] != `\\` && str[i] != '|' && str[i] != '[' && str[i] != ']') {
            res.add(str[i].toLowerCase());
        }
        // console.log(str[i]);
    }
    console.log(res);
    console.log(res.size);
    if (res.size == 26) {
        return true;
    } else {
        return false;
    }
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));


    // let result = false,
    //     set = new Set();
    // string = string.toLowerCase();
    // for (let i = 0; i < string.length; i++) {
    //     if ( (string[i] != ' ') && (string[i] != '.') && (string[i] != ',') && (string[i] != '!') && (string[i] != '?') && (string[i] != '-') ) {
    //         set.add(string[i]);
    //     }
    // }
    // if (set.size == 26) {
    //     result = true;
    // }
    // return result;