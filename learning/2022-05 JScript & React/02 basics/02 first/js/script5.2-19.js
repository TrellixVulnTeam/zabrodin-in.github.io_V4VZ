let numberOfFilms = prompt("How many movies did u see?", "1"),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

let temp = prompt("One of the last viewed film?", "Titanic"),
    temp2 = prompt("Rate it, please (from 1 to 10)", "9.0");
personalMovieDB.movies[temp] = temp2;

temp = prompt("One of the last viewed film?", "Titanic");
temp2 = prompt("Rate it, please (from 1 to 10)", "9.0");
personalMovieDB.movies[temp] = temp2;

console.log(personalMovieDB);