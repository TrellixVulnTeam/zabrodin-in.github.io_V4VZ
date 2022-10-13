'use strict';

let numberOfFilms,
    check = false;

/////////////////////////////////////////// HERE STARTS THE CODE
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        do {
            let tempNnumberOfFilms = prompt('How many films have u already watched?', '1');
            numberOfFilms = +tempNnumberOfFilms;
            //console.log(`numberOfFilms == "${numberOfFilms}"`);
            if (numberOfFilms == null || numberOfFilms == '') {
                check = confirm(`R u shure that u've never watched the movies?`);
                if (check == true) {
                    break;
                } else {
                    alert(`Then, I'll ask u one more time..`);
                }
            }
            if (isNaN(numberOfFilms)) {
                alert(`U've entered invalid value (${tempNnumberOfFilms}). Try again please`);
            }
        } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
    },
    detectPersonalLevel: function() {
        if (numberOfFilms < 10) {
            console.log(`U've watched not so many films (${numberOfFilms})`);
        } else if (numberOfFilms >= 10 && numberOfFilms < 30)  {
            console.log(`U're classic viewer (${numberOfFilms})`);
        } else {
            console.log(`U're movie buff(${numberOfFilms})`);
        }
    },
    rememberMyFilms: function() {
        let tempName = '',
            tempRate,
            err;
        for (let i = 0; i < numberOfFilms; i++) {
            err = false;
            do {
                if (tempName == '' && err) {
                    alert('Empty field');
                } else if (tempName.length < 2 && err) {
                    alert('Length of the film name is too short (<10 characters)');
                } else if (tempName.length > 50 && err) {
                    alert('Length of the film name is too long (>50 characters)');
                }
                tempName = prompt(`${i + 1} of the last watched films?`, `Film_${i + 1}`);
                err = true;
            } while (tempName.length < 2 || tempName == '' || tempName.length > 50);
        
            tempRate = prompt('Rate it please', '9.9');
            personalMovieDB.movies[tempName] = tempRate;
            if (i == 2) {
                break;
            }
        }
    },
    writeYourGenres: function(genresArray) {
        let message = 'Fav genres:';
        for (let i = 0; i < 3; i++) {
            do {
                genresArray[i] = prompt(`Your favourite genre #${i + 1}`);
                if (genresArray[i] == '' || genresArray[i] == null || genresArray[i].length < 2) {
                    alert(`Invalid value. Try again`);
                    genresArray[i] = '';
                }
            } while (genresArray[i] == '');
            message += ` #${i + 1} ${genresArray[i]}`;
        }
        console.log(message);
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    }
};

personalMovieDB.start();


if (check == false) {
    personalMovieDB.detectPersonalLevel();
    personalMovieDB.rememberMyFilms();
    personalMovieDB.writeYourGenres(personalMovieDB.genres);
    console.log(personalMovieDB.private);
    personalMovieDB.showMyDB(personalMovieDB.private);
    personalMovieDB.toggleVisibleMyDB();
    console.log(personalMovieDB.private);
    personalMovieDB.showMyDB(personalMovieDB.private);
} else {
    console.log(`See u later))`);
}








/* OTHER TASKS

// Выполняется ли условие?
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


// Выполняется ли условие?
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
// А без значения там undefined, напоминаю 🙂

// Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

*/