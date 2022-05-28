/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики
// 1
let inputText = document.querySelector('.adding__input'),
    inputBtn = document.querySelector('button'),
    inputItem = document.querySelectorAll('.promo__interactive-item'),
    delIndex = document.querySelectorAll('.delete');

// console.log(inputText);
// console.log('----');
// console.log(inputBtn);
// console.log('----');
// console.log(inputForm);
// console.log(inputForm.elements[1]);
//   // → password
//   console.log(inputForm.elements.password);
//   // → password
//   console.log(inputForm.elements.name.form == inputForm);
//   // → true


// ДОБАВЛЯЕМ ФИЛЬМЫ В movieDB.movies И ВЫВОДИМ ОБНОВЛЕННЫЙ СПИСОК
inputBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let inputValue = inputText.value;
    if (inputValue != '') {
        if (inputValue.length > 21) {
            inputValue = inputValue.slice(0, 21) + '...';
        }
        movieDB.movies.push(inputValue); // ADDING NEW FILM
        listRenew(); // RENEW LIST
        inputItem = document.querySelectorAll('.promo__interactive-item'); // RELOAD inputItem
        delIndex = document.querySelectorAll('.delete'); // RELOAD delIndex
        deleted(); // RENEW delIndex
    }
});

// УДАЛЯЕМ ФИЛЬМ ИЗ СПИСКА ПО КЛИКУ НА КОРЗИНУ
// console.log(delIndex);
// console.log(inputItem);

function deleted() {
    for (let i = 0; i < delIndex.length; i++) {
        delIndex[i].addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            listRenew();
            inputItem = document.querySelectorAll('.promo__interactive-item'); // RELOAD inputItem
            delIndex = document.querySelectorAll('.delete'); // RELOAD delIndex

            console.log(inputItem);
            console.log(delIndex);
            console.log(movieDB.movies);
        });
    }



    // delIndex.forEach((elem, id) => {
    //     elem.addEventListener('click', () => {
    //         inputItem[id].remove();
    //         inputItem = document.querySelectorAll('.promo__interactive-item'); // RELOAD inputItem
    //         delIndex = document.querySelectorAll('.delete'); // RELOAD delIndex
    //         movieDB.movies.splice(id, 1);


    //         console.log(elem, id);
    //         // for (let i = 0; i < inputItem.length; i++) {
    //         //     console.log(`${i} ${inputItem[i].textContent} =222= ${movieDB.movies[i]} == ${delIndex[i]}`);
    //         // }
    //         console.log(inputItem);
    //         console.log(delIndex);
    //         console.log(movieDB.movies);
    //     });
    // });
}
// deleted();
listRenew();