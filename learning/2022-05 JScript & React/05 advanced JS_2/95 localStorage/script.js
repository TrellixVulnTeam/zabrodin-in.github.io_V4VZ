'use strict';

localStorage.setItem(`number`, 8);

console.log(localStorage.getItem(`number`));
// localStorage.removeItem(`number`);

// localStorage.clear();


/////////////////////// ////////////////////// /////////////////////

const form = document.querySelector(`.form-signin`),
      btnColor = document.querySelector(`#color`),
      checkbox = document.querySelector(`#checkbox`);

if (localStorage.getItem(`isChecked`)) {
    checkbox.checked = true;
}


/////////////////////////////////////////////////// DOESN'T WORK
// checkbox.addEventListener(`change`, () => {
//     if (localStorage.getItem(`isChecked`)) {
//         checkbox.checked = false;
//         localStorage.setItem(`isChecked`, false);
//     } else {
//         checkbox.checked = true;
//         localStorage.setItem(`isChecked`, true);
//     }
// });

checkbox.addEventListener(`change`, () => {
    localStorage.setItem(`isChecked`, true);
});

if (localStorage.getItem(`bg`) === `changed`) {
    form.style.backgroundColor = `blue`;
}

btnColor.addEventListener(`click`, () => {
    if (localStorage.getItem(`bg`) === `changed`) {
        localStorage.removeItem(`bg`);
        form.style.backgroundColor = `white`;
    } else {
        localStorage.setItem(`bg`, `changed`);
        form.style.backgroundColor = `blue`;
    }
});



///////////////////////////////////////////////////

const man = {
    name: `Alex`,
    age: 25
};

const serializedMan = JSON.stringify(man);
localStorage.setItem(man.name, serializedMan);

console.log(JSON.parse(localStorage.getItem(man.name)));