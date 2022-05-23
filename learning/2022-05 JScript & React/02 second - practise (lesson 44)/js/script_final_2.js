'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        checkBox = addForm.querySelector('[type="checkbox"]'),
        addInput = addForm.querySelector('.adding__input'),
        inputText = document.querySelector('.adding__input');

    // 1
    const deleteAdv = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };

    const makeChanges = () => {
        // 2
        genre.textContent = 'драма';
        // 3 
        promoBg.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArray = (arr) => {
        arr.sort();
    };

    // 4 & 5
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArray(films);
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i+1} ${film}<div class="delete"></div>`;
        });

        //     3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

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
    // ДОБАВЛЯЕМ ФИЛЬМЫ В movieDB.movies И СОРТИРУЕМ ОБНОВЛЕННЫЙ СПИСОК
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value,
            favourite = checkBox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }
            if (favourite) {
                console.log('Добавляем любимый фильм')
            }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            event.target.reset();
        }
    });


});