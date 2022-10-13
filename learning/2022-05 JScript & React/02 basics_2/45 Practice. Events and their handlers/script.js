'use strict';

let btns = document.querySelectorAll(`button`);

btns[1].onclick = function() {
    alert(`Test click`);
    console.log('qwdqwdq');
};

let i = 0;
const testEvent = (e) => {
    console.log(e.target);
    i++;
    if (i > 0) {
        btns[2].removeEventListener('click', testEvent);
    }
};
btns[2].addEventListener('click', testEvent);