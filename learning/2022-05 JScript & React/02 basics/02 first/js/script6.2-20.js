"use strict";

// const test = prompt("Введите целое число", "43");

// if (test <= 43) {
//     console.log('Меньше или равно 43')
// } else if (test >=50) {
//     console.log('Больше или равно 50')
// } else {
//     console.log('В пределах 44-49')
// };

// Тернарное выражение
// (test == 44) ? console.log('Равно 44') : console.log("Ни фига не равно 44");
// console.log('--------');

// switch (+test) {
//     case 44:
//         console.log('44!!');
//         break;
//     case 45:
//         console.log('45!!');
//         break;
//     default:
//         console.log('Не 44 и не 45!!');
//         break;
// };

////////////////////////////////
////////////////////////////////

const hamburger = +prompt("Сколько бургеров на остатке?", "2"),
      fries = +prompt("А картошки-фри?", "0");

console.log(`Бургеров: ${hamburger}`);
console.log(`Картохи: ${fries}`);
// console.log('---');
// if (hamburger && fries) {
//     console.log('Я наелся')
// } else {
//     console.log('Чего-то не хватило чтобы я наелся')
// };

// console.log('---');
// if ((hamburger && hamburger) || (fries && hamburger)) {
//     console.log('Я наелся')
// } else {
//     console.log('Чего-то не хватило чтобы я наелся')
// };

// console.log('---');
// if (hamburger >= 3 && fries) {
//     console.log('Еды хватило всем')
// } else if (hamburger >= 3) {
//     console.log('Не хватило картохи')
// } else if (fries) {
//     console.log('Не хватило бургеров')
// } else {
//     console.log('Ни черта нет. Валим отсюда')
// };
// console.log(1 && 'efiuwfiwen');