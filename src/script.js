let numberOfFilms;
function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
//start();
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?");
    let markOfFilm = prompt("На сколько оцените его");
    if (
      lastFilm != "" &&
      lastFilm.length < 50 &&
      markOfFilm != "" &&
      markOfFilm.length < 50 &&
      lastFilm != null &&
      markOfFilm != null
    ) {
      personalMovieDB.movies[lastFilm] = markOfFilm;
    } else {
      i--;
    }
  }
}
//rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else {
    console.log("Вы киноман");
  }
}
//detectPersonalLevel();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDb(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let favouriteGenre = prompt(`Ваш любимый жанр фильма под номер ${i}`, "");
    personalMovieDB.genres.push(favouriteGenre);
  }
}
writeYourGenres();
