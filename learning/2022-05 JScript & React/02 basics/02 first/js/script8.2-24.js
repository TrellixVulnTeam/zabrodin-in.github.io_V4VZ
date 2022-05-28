"use strict";

// /* Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// // Код возьмите из предыдущего домашнего задания
let queCount = +prompt('Сколько фильмов вы смотрели?', '10'),
    personalMovieDB = {
        count: queCount,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };

alert('А теперь несколько вопросов про ТОП-2 ваших фильма');
let queMovies, queMovies2 = '';
for (let i = 1; i < 3; i++) {
    let j = 0;
    while (j < 1) {
        queMovies = prompt(`Какой ваш ТОП-${i} фильм?`);
        if ( (queMovies == null) || (queMovies == '') ) {
            alert('Вы не ввели название');
        } else if (queMovies !== '') {
            if (queMovies.length >= 50) {
                alert('Длина названия не может быть более 50 символов');
            } else {
                j = 1;
            }
        }
    }
    j = 0;
    while (j < 1) {
        queMovies2 = prompt(`Какой рейтинг поставите фильму "${queMovies}"?`);
        if ( (queMovies2 == null) || (queMovies2 == '') ) {
            alert('Вы не ввели значение');
        } else if (queMovies2 !== '') {
            j = 1;
        }
    }
    personalMovieDB.movies[queMovies] = queMovies2;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else {
    alert('Произошла ошибка ввода');
}

console.log(personalMovieDB);
console.log(queCount);