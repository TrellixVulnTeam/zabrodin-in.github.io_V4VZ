'use strict';

let boxesQuery = document.querySelectorAll('.box'),
    boxesGet = document.getElementsByClassName('box');



boxesQuery.forEach((box, id) => {
    box.matches('.this') ? console.log(`${id} вот оно`) : console.log(id);
});




//////////////////////////////////////////////////////////////////
console.log('====== .CLOSEST ======');
console.log(boxesQuery[3].closest('.wrapper')); // <<<<<< .CLOSEST
console.log('====== ======== ======');
//////////////////////////////////////////////////////////////////




boxesQuery[0].remove();
boxesGet[0].remove();

// boxesQuery = document.querySelectorAll('.box'); // NEED TO BE UPDATED IF DOM CHANGED

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}

console.log("querySelectorAll('.box')");
console.log(boxesQuery);

console.log("getElementsByClassName('box')");
console.log(boxesGet);

// console.log("document.body.children");
// console.log(document.body.children);

console.log(Array.from(boxesGet));