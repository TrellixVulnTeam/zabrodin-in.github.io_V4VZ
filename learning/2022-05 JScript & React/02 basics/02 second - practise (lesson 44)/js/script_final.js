'use strict';


/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    form = document.querySelector('.add'),
    form2 = form.querySelectorAll('input'),
    checkBox = document.getElementById('checkbox');//form2[1].value;
let ulList = document.querySelector('.promo__interactive-list'),
    inputText = document.querySelector('.adding__input'),
    inputBtn = document.querySelector('button'),
    // inputItem = document.querySelectorAll('.promo__interactive-item'),
    delIndex = document.querySelectorAll('.delete');

    console.log(form2[1].value);
    console.log(typeof(checkBox));
    console.log(checkBox);
// 1
adv.forEach(element => {
    element.remove();
});

// 2
genre.textContent = 'драма';

// 3 
promoBg.style.backgroundImage = "url('img/bg.jpg')";

// 4 & 5
function listRenew() {
    movieDB.movies.sort();
    ulList.innerHTML = '';
    movieDB.movies.forEach((item, i) => {
        ulList.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}<div class="delete"></div>`;
    });
    // inputItem = document.querySelectorAll('.promo__interactive-item');
    ulList = document.querySelector('.promo__interactive-list');
    delIndex = document.querySelectorAll('.delete');
    deleted();
    return;
}

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

// 1 & 2
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
        console.log(ulList);
        console.log(delIndex);
        console.log(movieDB.movies);
        // inputItem = document.querySelectorAll('.promo__interactive-item'); // RELOAD inputItem
        // delIndex = document.querySelectorAll('.delete'); // RELOAD delIndex
        deleted(); // RENEW delIndex
    }
});

// 3
function deleteFilm(index) {
    console.log(index);
    movieDB.movies.splice(index, 1);
    listRenew();
    return;
}
function deleted() {
    for (let i = 0; i < delIndex.length; i++) {
        delIndex[i].addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            listRenew();
            check();
        }, false);
    }
    console.log(ulList);
    console.log(delIndex);
    console.log(movieDB.movies);
    return;
}

function check() {
    // if (checkBox) {
        alert('wdqwa');
    // }
}

listRenew();