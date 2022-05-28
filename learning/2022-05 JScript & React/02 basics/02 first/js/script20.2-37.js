/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    //// FUNCTION TO START INPUT - FILMS, RATES, GENRES
    start: function() {
        let check = 0,
        queCount, queMovies, queMovies2 = '';

        // INPUT NUMBER OF FILMS
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
        } while (check !== 1);
        this.count = queCount;

        // INPUT FILMS
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
            this.movies[queMovies] = queMovies2;
        }

        // INPUT GENRES
        for (let i = 0; i < 3; i++) {
            this.genres.push(prompt(`Ваш любимый жанр под номером ${i+1}`, `Комедия`));
        }

        // DESCRIPTION CODE (via this.count)
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else if (this.count >= 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else {
            console.log('Произошла ошибка ввода');
        }


    },
    toggleVisibleMyDB: function () {
        if (this.privat == false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        let i = 0;
        this.genres.forEach((element, i) => {
            console.log(`Любимый жанр #${i+1} - это ${element}`);
        });
    }
};


personalMovieDB.start();
console.log('showMyDB 1');
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
console.log('showMyDB 2');
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

// console.log(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.privat);