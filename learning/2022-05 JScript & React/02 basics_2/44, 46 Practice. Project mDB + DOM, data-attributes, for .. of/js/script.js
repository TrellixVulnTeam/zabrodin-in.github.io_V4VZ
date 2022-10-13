'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Скотт Пилигрим против...",
        "Скотт Пилигрим против..."
    ]
};


/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)
*/
const advBlock = document.querySelectorAll(`.promo__adv img`);
advBlock.forEach(item => {
    item.remove();
});

/*
2) Изменить жанр фильма, поменять "комедия" на "драма"
*/
const promoGenre = document.querySelector(`.promo__genre`);
promoGenre.innerHTML = `ДРАМА`;

/*
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
*/
const promoBg = document.querySelector(`.promo__bg`);
promoBg.style.background = `url('img/bg.jpg') center center/cover no-repeat`;

/*
>> 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

>> 5) Добавить нумерацию выведенных фильмов */
const interactiveList = document.querySelector(`.promo__interactive-list`);
interactiveList.innerHTML = ``;
movieDB.movies.sort();
// movieDB.movies.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.classList.add(`promo__interactive-item`);
//     li.textContent = `${index + 1}) ${movieDB.movies[index]}`
//     interactiveList.append(li);
// });
movieDB.movies.forEach((item, index) => {
    interactiveList.innerHTML += `
        <li class='promo__interactive-item'>${index + 1}) ${item}
            <div class='delete'></div>
        </li>
    `;
});

//////
//////
//////
// ⚠️ link first >> then LI >> then UL >> and NAV
console.log(document.querySelector(`.promo__menu-item_active`).parentNode.parentNode.parentNode);
console.log(document.querySelector(`[data-current="3"]`));
console.log(document.querySelector(`[data-current="3"]`).nextSibling); // textNode (next paragraph)

console.log('////');
console.log(document.querySelector(`[data-current="3"]`));
console.log(document.querySelector(`[data-current="3"]`).nextElementSibling);

console.log('////');
console.log(document.querySelector(`.promo__menu-item_active`).parentElement);

console.log('//// //// //// //// //// //// //// ////');
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log('//// FOR OF with childNodes');
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}