import  './cycles.js';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null && isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        let count = 1;
        while (count < 3) {
            let movieFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
                scoreFilm = prompt('На сколько оцените его?', '');
            count++;

            if(movieFilm != null && scoreFilm != null && movieFilm != '' && scoreFilm != '' && movieFilm.length < 50) {
                this.movies[movieFilm] = scoreFilm;
            } else {
                count--;
            }
        };
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            alert('Вы классический зритель');
        } else if (this.count >= 30) {
            alert('Вы киноман');
        } else (
            alert('Произошла ошибка')
        );
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        (this.privat) ? this.privat = false : this.privat = true;
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let favoritGenres = prompt(`Ваш любимый жанр под номером ${i}`);

            if(favoritGenres !== null && favoritGenres !== '') {
                this.genres.push(favoritGenres);
            } else {
                i--;
            }
        }

        this.genres.forEach(function(gen, i) {
            console.log(`Любимый жанр №${i + 1} - это ${gen}`);
        })
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

/*for (let i = 1; i < 3; i++) {
    let movieFilm = prompt('Один из последних просмотренных фильмов?', '');
    let scoreFilm = prompt('На сколько оцените его?', '');

    if(movieFilm != null && scoreFilm != null && movieFilm != '' && scoreFilm != '' && movieFilm.length < 50) {
        personalMovieDB.movies[movieFilm] = scoreFilm;
    } else {
        i--;
    }
};*/