/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// const a = prompt('Один из просмотренных фильмов?', ''),
//   b = +prompt('На сколько оцените его?', ''),
//   c = prompt('Один из просмотренных фильмов?', ''),
//   d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 4) {
//   console.log('Ok!');
// } else {
//   console.log('Error');
// }

// const num = 120;

// switch (num) {
//   case 49:
//     console.log('Неверно');
//     break;
//   case 100:
//     console.log('Много');
//     break;
//   case 50:
//     console.log('Ok!');
//     break;
//   default:
//     console.log('В другой раз');
// }

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!');
// }

// let i = 0;
// while (i < 3) {
//   // выводит 0, затем 1, затем 2
//   alert(i);
//   i++;
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }

//   console.log(i);
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// Место для первой задачи
function firstTask() {
  // Пишем решение вот тут
  let num = 5;
  while (num < 11) {
    console.log(num);
    num++;
  }
}

// Место для второй задачи
function secondTask() {
  // Пишем решение вот тут
  for (let i = 20; i > 9; i--) {
    console.log(i);
    if (i === 14) {
      break;
    }
  }
}

// Место для третьей задачи
function thirdTask() {
  // Пишем решение вот тут
  for (let i = 2; i < 11; i++) {
    if (i % 2 !== 0) {
      continue;
    } else {
      console.log(i);
    }
  }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

function fourthTask() {
  // Пишем решение вот тут
  let num = 3;
  while (num < 16) {
    console.log(num);
    num = num + 2;
  }
}

// Место для пятой задачи

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  for (let i = 5; i < 11; i++) {
    arrayOfNumbers.push(i);
  }

  // Не трогаем
  return arrayOfNumbers;
}
