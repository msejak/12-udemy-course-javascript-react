/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// const adv = document.querySelector('.promo__adv');
// adv.remove();

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// const genre = document.querySelector('.promo__genre');
// genre.innerHTML = 'ДРАМА';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// const image = document.querySelector('.promo__bg');
// image.style.background = 'url(./img/bg.jpg)';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту

// 5) Добавить нумерацию выведенных фильмов

// const movieDB = {
//   movies: [
//     'Логан',
//     'Лига справедливости',
//     'Ла-ла лэнд',
//     'Одержимость',
//     'Скотт Пилигрим против...',
//   ],
//   sortMovies: function () {
//     return movieDB.movies.sort();
//   },
// };

// const allMovies = document.querySelectorAll('.promo__interactive-item');

// allMovies.forEach((item, i) => {
//   item.innerHTML = `${i + 1} ${movieDB.sortMovies()[i]}`;
// });

const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
  ],
};

const adv = document.querySelectorAll('.promo__adv img'),
  poster = document.querySelector('.promo__bg'),
  genre = poster.querySelector('.promo__genre'),
  movieList = document.querySelector('.promo__interactive-list');

adv.forEach((item) => {
  item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
    </li>
  `;
});
