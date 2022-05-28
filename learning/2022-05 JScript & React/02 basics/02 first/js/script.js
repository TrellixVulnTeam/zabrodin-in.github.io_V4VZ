"use strict";

// camelCase
// PascalCase
// snake_case
// UPPER_SNAKE_CASE - используется для обонзначения констант
// _camelCase - тоже юзают под данные, которые НЕ НАДО ТРОГАТЬ
// Kebab-case


// let a = 15;
// console.log(a);
// console.log('--------');


// let number = 5;
// const leftBorderWidth = 1;

// number = 12;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 40;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';
// console.log(name);

// console.log('--------');
// // console.log(name2);
// let name2 = 'Ivan2';
// console.log(name2);

// {
//     let name3 = 43;
// }
// console.log(name3);



// let obj = {
//     a: 'a',
//     b: 3,
//     c: 213124
// }
// console.log(Object.keys(obj).length);


// console.log(`--------------------\nTHAT WAS TEST SCRIPT\n--------------------`);



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// LESSON 42-43

const box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '300px';

btns[2].style.borderRadius = '50%';
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = `#${(i+1)*10}${(i+1)*20}${(i+1)*30}`;
}

hearts.forEach((element, i) => {
    element.style.backgroundColor = `#${(i+1)*222222}`;
});

btns[0].style.cssText = "width: 100px; height: 50px; background-color: red;";




const div = document.createElement('div');
const div2 = document.createElement('div');
const text = document.createTextNode('Nekiy text');
const wrapper = document.querySelector('.wrapper');
    


// console.log(testDiv);

div.classList.add('black');
div2.classList.add('black-2');

// document.body.append(div);
// document.querySelector('.wrapper').append(div);

// wrapper.append(div2);
wrapper.appendChild(div2); // OLD <<<
// wrapper.prepend(div);

// hearts[1].before(div);
wrapper.insertBefore(div, hearts[0]); // OLD <<< ЕСЛИ ПОСТАВИТЬ ПОСЛЕ 107 строки (removeChild), то команда не сработает

// hearts[1].after(div2);

// circles[0].remove();
wrapper.removeChild(hearts[0]);

// hearts[0].replaceWith(btns[1]);
wrapper.replaceChild(btns[1], hearts[1]);




div.innerHTML = 'Hello World!!';
let testText = 'Test Text';
div2.innerHTML = `${testText} <<`;

div2.textContent = '!!!';

wrapper.insertAdjacentHTML("beforebegin", '<h2>H2 HEADER!!</h2>');