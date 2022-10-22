import  './cycles.js';
let number0fFilms;

function start() {
    number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (number0fFilms == '' || number0fFilms == null && isNaN(number0fFilms)) {
        number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else (
        alert('Произошла ошибка')
    ); 
}

detectPersonalLevel();

/*for (let i = 1; i < 3; i++) {
    let movieFilm = prompt('Один из последних просмотренных фильмов?', '');
    let scoreFilm = prompt('На сколько оцените его?', '');

    if(movieFilm != null && scoreFilm != null && movieFilm != '' && scoreFilm != '' && movieFilm.length < 50) {
        personalMovieDB.movies[movieFilm] = scoreFilm;
    } else {
        i--;
    }
};*/

function rememberMyFilms() {
    let count = 1;
    while (count < 3) {
        let movieFilm = prompt('Один из последних просмотренных фильмов?', '');
        let scoreFilm = prompt('На сколько оцените его?', '');
        count++;

        if(movieFilm != null && scoreFilm != null && movieFilm != '' && scoreFilm != '' && movieFilm.length < 50) {
            personalMovieDB.movies[movieFilm] = scoreFilm;
        } else {
            count--;
        }
    };
}

rememberMyFilms();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();