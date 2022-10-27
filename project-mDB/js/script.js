/* Задания на урок: 038

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок: 042

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против великанов"
        ]
    };
    
    const promoAdv = document.querySelector('.promo__adv');
    const promoBlocks = promoAdv.querySelectorAll('img');
    const promoBg = document.querySelector('.promo__bg');
    const promoGenre = promoBg.querySelector('.promo__genre');
    const promoInteractiveList = document.querySelector('.promo__interactive-list');
    const promoInteractiveItem = promoInteractiveList.querySelectorAll('.promo__interactive-item');
    const basket = promoInteractiveList.querySelectorAll('.promo__interactive-item .delete');
    
    const form = document.querySelector('.add');
    const formInput = form.querySelector('.adding__input');
    const formCheckbox = form.querySelector('input[type=checkbox]');

    const deletePromo = (arr) => {
        arr.forEach(el => {
            el.remove();
        });
    };

    const makeChenges = () => {
        promoGenre.textContent = 'Драма';
        promoBg.style.backgroundImage = `url('./img/bg.jpg')`;
    };

    const sortArr = (arr) => {
        arr.sort();
    }
    
    function createPromoList(films, parent) {

        parent.innerHTML = '';
        sortArr(films);
    
        films.forEach((el, i) => {
            if(el.length > 21) {
                el = `${el.slice(0, 21)}...`;
            }
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${el}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((el, i) => {
            el.addEventListener('click', () => {
                el.parentElement.remove();
                films.splice(i, 1);
                createPromoList(films, parent);
            })
        }) 
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if(formInput.value) {
            if(formCheckbox.checked) {
                console.log('Добавляем любимый фильм');
            };
            movieDB.movies.push(formInput.value);
            createPromoList(movieDB.movies, promoInteractiveList);
            formInput.value = '';
        } else {
            console.log('Введите название фильма');
        }
    });

    deletePromo(promoBlocks);
    makeChenges();
    createPromoList(movieDB.movies, promoInteractiveList);
    
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
    
    /*promoInteractiveList.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete')) {
            let film = e.target.parentElement.textContent.slice(3).trim();
            const arrFilmDB = Object.values(movieDB);
    
            arrFilmDB.forEach(el => {
                el.forEach((f, ind) => {
                    if(f.length > 21) {
                        f = f.slice(0, 21).trim();
                        f += '...';
                    }
                    if(f == film) {
                        el.splice(ind, 1);
                    }
                })
            })
            e.target.parentElement.remove();
            createPromoList(movieDB.movies, promoInteractiveList);
        }
    });*/
});