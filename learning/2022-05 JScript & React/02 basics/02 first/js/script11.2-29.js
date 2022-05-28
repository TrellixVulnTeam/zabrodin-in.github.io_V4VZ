'use strict';

// Задание на урок:

/////////////////////////////////////////////////////////////////////////////////////////
// 1) Первую часть задания повторить по уроку
// FILTERING AND RETURNING NUMBER OF WATCHED FILMS
function start() {
    let check = 0,
        queCount = '';
    do {
        queCount = prompt('Сколько фильмов вы смотрели?', '10');
        if (isNaN(queCount)) {
            console.log(`Вы ввели НЕ число`);
        } else if (queCount == null) {
            console.log(`Вы забыли ввести значение`);
        } else if (queCount < 1) {
            console.log(`Вы ввели значение < 1 "${queCount}"`);
        } else if (queCount % 1 !== 0) {
            console.log(`Вы ввели недопустимое дробное значение "${queCount}"`);
        } else if (queCount >= 1) {
            check = 1;
        }
    }
    while (check !== 1);
    return queCount;
}
// INPUT INFO 'BOUT 2 FILMS in variable "personalMovieDB" and return it
function rememberMyFilms (num) {
    let queMovies, queMovies2 = '';
    let personalMovieDB = {
        count: num,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };
    for (let i = 1; i < 3; i++) {
        let j = 0;
        while (j < 1) {
            queMovies = prompt(`Какой ваш ТОП-${i} фильм?`);
            if ( (queMovies == null) || (queMovies == '') ) {
                console.log('Вы не ввели название');
            } else if (queMovies !== '') {
                if (queMovies.length >= 50) {
                    console.log('Длина названия не может быть более 50 символов');
                } else {
                    j = 1;
                }
            }
        }
        j = 0;
        while (j < 1) {
            queMovies2 = prompt(`Какой рейтинг поставите фильму "${queMovies}"?`);
            if ( (queMovies2 == null) || (queMovies2 == '') ) {
                console.log('Вы не ввели значение');
            } else if (isNaN(queMovies2)) {
                console.log('Вы ввели не числовое значение');
            } else if ((queMovies2 !== '') && (!isNaN(queMovies2))) {
                j = 1;
            }
        }
        personalMovieDB.movies[queMovies] = queMovies2;
    }
    return personalMovieDB;
}
// TELLING WHO U ARE)) (your level)
function detectPersonalLevel(num) {
    if (num < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (num > 30) {
        console.log('Вы киноман');
    } else if (num >= 10 && num <= 30) {
        console.log('Вы классический зритель');
    } else {
        console.log('Произошла ошибка ввода');
    }
}

let temp = start(),
    result = {};
result = rememberMyFilms(temp);
detectPersonalLevel(temp);

/////////////////////////////////////////////////////////////////////////////////////////
// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
function showMyDB(bool) {
    if (!bool) {
        console.log(result);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////
// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
function writeYourGenres (obj) {
    if (typeof(obj) != 'object') {
        console.log('function writeYourGenres type error');
        return 0;
    }
    for (let i = 0; i < 3; i++) {
        obj[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, `Комедия`);
    }
    return obj;
}
writeYourGenres(result.genres);

showMyDB(result.private);

// P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

