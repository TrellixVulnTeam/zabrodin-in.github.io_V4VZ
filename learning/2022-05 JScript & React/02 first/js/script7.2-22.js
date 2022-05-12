"use strict";

// let i = 1;
// while (i <10) {
//     console.log(i);
//     i++;
// }

// i = 5;
// do {
//     if (i == 6 || i == 12 || i == 15) {
//         i++;
//         continue;
//     } else if (i ==18) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// while (i <= 20);

// for (let i = 2; i < 10 ; i++) {
//     console.log(i);
// };



/////////////////////

// let j = '',
//     // k = prompt("Сколько строк выводить?", "3");
//     k = 13;
// for (let i = 1; i <= k; i++) {
//     j += '*';
//     if (j < i) {
//         break;
//     }
//     if (i < 10) {
//         console.log(`${i}   ${j}`);
//     } else if (i < 100) {
//         console.log(`${i}  ${j}`);
//     } else {
//         console.log(`${i} ${j}`);
//     }
// }

// let letter = '\n test \n text \n text2 \n text3';
// console.log(letter);

/////////////////////

// let result = '',
//     rows = 13;
// metka: for (let i = 1; i <= rows; i++) {
//     for (j = 1; j <= i; j++) {
//         result += '*';
//         if (j > 3) continue metka;
//     };
//     result += '\n';
// };
// console.log(result);

// 1     *       1
// 2    ***      3
// 3   *****     5
// 4  *******    7
// 5 *********   9

const lines = 3;
let result = '';

let space = lines,
    stars = 1,
    temp = 0;
for (let i = 0; i <= lines; i++) {
    temp = stars + space;
    for (let j = 1; j <= temp; j++) {
        if (j <= space) {
            result += ' ';
        } else {
            result += '*';
        }

        if (j === temp) {
            result += '\n';
            break;
        }
    }
    stars += 2;
    space--;
}

console.log(result);