let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "22");
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let lastFilm1 = prompt("Один из последних просмотренных фильмов?");
let markOfFilm1 = prompt("На сколько оцените его");
let lastFilm2 = prompt("Один из последних просмотренных фильмов?");
let markOfFilm2 = prompt("На сколько оцените его");
personalMovieDB.movies[lastFilm1] = markOfFilm1;
personalMovieDB.movies[lastFilm2] = markOfFilm2;
console.log(personalMovieDB);
