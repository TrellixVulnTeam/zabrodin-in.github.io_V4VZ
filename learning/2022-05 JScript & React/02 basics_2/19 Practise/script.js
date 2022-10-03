let numberOfFilms = prompt('How many films have u already watched?', '1');
let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };
let tempName, tempRate;
tempName = prompt('One of the last watched films?', 'Film_1');
tempRate = prompt('Rate it', '8.2');
personalMovieDB.movies[tempName] = tempRate;

tempName = prompt('Another one of the last watched films?', 'Film_2');
tempRate = prompt('Rate it', '9.2');
personalMovieDB.movies[tempName] = tempRate;

console.log(personalMovieDB.movies);