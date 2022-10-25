/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelector('.promo__adv');
const promoBlocks = promoAdv.querySelectorAll('img');
const promoBg = document.querySelector('.promo__bg');
const promoGenre = promoBg.querySelector('.promo__genre');
const promoInteractiveList = document.querySelector('.promo__interactive-list');
const promoInteractiveItem = promoInteractiveList.querySelectorAll('.promo__interactive-item');

promoBlocks.forEach(el => {
    el.remove();
});

promoGenre.textContent = 'Драма';
promoBg.style.backgroundImage = `url('./img/bg.jpg')`;

promoInteractiveList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((el, i) => {
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${el}
            <div class="delete"></div>
        </li>
    `;
})

/*for (let key in movieDB) {
    movieDB[key].sort();
    let count = 0;
    for (let i = 0; i < movieDB[key].length; i++) { 
        for (let j = count; j < promoInteractiveItem.length; j++) { 
            promoInteractiveItem[j].textContent = `${j + 1}. ${movieDB[key][i]}`;
            count++;
            break;
        }
    }
}*/