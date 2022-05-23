/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    ulList = document.querySelector('.promo__interactive-list'); // 111

    // adv.remove();
adv.forEach(element => {
    element.remove();
});

genre.textContent = 'драма';
promoBg.style.backgroundImage = "url('img/bg.jpg')";

function listRenew() {
    movieDB.movies.sort();
    ulList.innerHTML = '';
    movieDB.movies.forEach((item, i) => {
        ulList.innerHTML += `<li class="promo__interactive-item">${i+1} ${item}<div class="delete"></div>`;
    });
    deleted();
}

// promoBg.classList.add('promo__bg2');

// console.log(list.length);
// console.log(movieDB.movies);

// BAD ONE. NEED TO BE DELETED AND PUT BACK ONE MORE TIME BY JS >> WATCH FUNCTION ListRenew()
// for (let i = 0; i < list.length; i++) {
//     list[i].innerHTML = `${i+1}. ${movieDB.movies[i]}
//     <div class="delete"></div>`;
// } // 111