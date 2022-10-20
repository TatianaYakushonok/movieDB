const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieFilm = prompt('Один из последних просмотренных фильмов?', ''),
      scoreFilm = prompt('На сколько оцените его?', ''),
      movieFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      scoreFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieFilm] = scoreFilm;
personalMovieDB.movies[movieFilm2] = scoreFilm2;

console.log(personalMovieDB);