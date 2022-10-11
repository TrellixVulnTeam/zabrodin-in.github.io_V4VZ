'use strict';
/* 42 exercise:
const box = document.getElementById(`box`);
console.log(box);

const btns = document.getElementsByTagName(`button`);
console.log(btns);

const btns2 = document.getElementsByTagName(`button`)[1];
console.log(btns2);
const btns3 = document.getElementsByTagName(`button`);
console.log(btns3[1]);

const circles = document.getElementsByClassName(`circle`);
console.log(circles);

console.log(`//////////`);
const hearts = document.querySelectorAll(`.heart`);
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector(`.heart`);
console.log(`oneHeart:`);
console.log(oneHeart);
*/

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll(`.heart`),
      oneHeart = document.querySelector(`.heart`),
      wrapper = document.querySelector(`.wrapper`);

console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '499px';

let num = 334;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
div.classList.add('black');
const div2 = document.createElement('div');
div2.classList.add('black');
const div3 = document.createElement('div');
div3.classList.add('black');
div3.style.width = '600px';
const div4 = document.createElement('div');
div4.classList.add('black');
div4.style.backgroundColor = 'yellow';
div4.style.width = '500px';
div4.innerHTML = `<h2>Hello WORLD!!</h2>`;

const div5 = div4.cloneNode();


document.querySelector(`.wrapper`).append(div);
wrapper.prepend(div2);
wrapper.after(div3);

circles[2].remove();
hearts[0].replaceWith(circles[0]);

wrapper.insertBefore(div4, hearts[2]);
wrapper.appendChild(div5);