'use strict';

const btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length);

// console.log('------------------------');
// console.log(`---- reading classList items => btns[i].classList.item(j)`);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.item(0));

// console.log('------------------------');
// console.log(`---- adding class => btns[0].classList.add('red')`);
// console.log(btns[0].classList.add('red'));

// console.log('------------------------');
// console.log(`---- adding 3 classes at once => btns[1].classList.add('red', 'red2', 'red3')`);
// console.log(btns[1].classList.add('red', 'red2', 'red3'));

// console.log('------------------------');
// console.log(`---- removing class => btns[0].classList.remove('blue')`);
// console.log(btns[0].classList.remove('blue'));

// console.log('------------------------');
// console.log(`---- switching class (on/off) => btns[0].classList.toggle('blue')`);
// console.log(btns[0].classList.toggle('blue')); // SWITCHER

// console.log('========================');
// if (btns[1].classList.contains('red')) {
//     console.log('contains .red');
// }




// THIS IS TEST FOR EVENT WHEN U CLICK ON FIRST BUTTON
btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});
// console.log(btns[0].className);




// // DELEGATING >> FIRST VERSION
// wrapper.addEventListener('click', (event) => {
//     // console.dir(event.target);
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }

//     if (event.target && event.target.classList.contains('some')) {
//         console.log('some class');
//     }
// });

// DELEGATING >> SECOND VERSION
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }

    if (event.target && event.target.classList.contains('some')) {
        console.log('some class');
    }
});

// // NO DELEGATING >> RED BUTTON DOESN'T WORK
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// TEST CODE (APPEND 1 MORE BUTTON)
const btn = document.createElement('button');
btn.classList.add('red');
// btn.innerHTML = `HTML`;
wrapper.appendChild(btn);