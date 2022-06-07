'use strict';

// //// 1 localStorage.setItem();
// localStorage.setItem('number', 5);

// //// 2 localStorage.getItem();
// console.log(localStorage.getItem('number'));

// //// 3 localStorage.removeItem();
// localStorage.removeItem('number');

// console.log(localStorage.getItem('number'));

// //// 4 localStorage.clear();
// localStorage.setItem('number', 7);
// console.log(localStorage.getItem('number'));
// localStorage.clear();
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');
if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}
if (localStorage.getItem('bg') == 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});
change.addEventListener('click', () => {
    if (localStorage.getItem('bg') == 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';

    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});




const person = {
    name: 'Alex',
    age: 25
};
const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);
console.log(JSON.parse(localStorage.getItem('alex')));