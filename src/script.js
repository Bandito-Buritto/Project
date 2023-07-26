let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt(
      "Сколько фильмов вы уже посмотрели?",
      ""
    ).trim();
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      ).trim();
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let lastFilm = prompt("Один из последних просмотренных фильмов?").trim();
      let markOfFilm = prompt("На сколько оцените его").trim();
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else {
      console.log("Вы киноман");
    }
  },
  toggleVisibleMyDb: function () {
    if (!personalMovieDB.privat) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 3; i++) {
      let genre = prompt(`Ваш любимый жнр под номером ${i}`, "");
      if (genre === "" || genre === null) {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item} `);
    });
  },
};
//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.toggleVisibleMyDb();
//personalMovieDB.showMyDb(personalMovieDB.privat);
//personalMovieDB.writeYourGenres();
