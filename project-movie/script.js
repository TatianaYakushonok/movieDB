import  './cycles.js';
const number0fFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else (
    alert('Произошла ошибка')
);

for (let i = 1; i < 3; i++) {
    let movieFilm = prompt('Один из последних просмотренных фильмов?', '');
    let scoreFilm = prompt('На сколько оцените его?', '');

    if(movieFilm != null && scoreFilm != null && movieFilm != '' && scoreFilm != '' && movieFilm.length < 50) {
        personalMovieDB.movies[movieFilm] = scoreFilm;
    } else {
        i--;
    }
};

console.log(personalMovieDB);