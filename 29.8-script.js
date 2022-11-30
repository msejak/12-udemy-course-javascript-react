'use strict';

/*
1) Создайте функцию, которая принимает в себя целое число минут и возвращает 
время в нужном формате строки. (Смотри пример). Обратите внимание на окончание 
слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента 
приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как 
проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 
часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

0 часов минут
1 час минута
2 часа минуты
3 часа минуты
4 часа минуты
5 часов минут
6 часов минут
7 часов минут
8 часов минут
9 часов минут
10 часов минут

*/

// Место для первой задачи
function getTimeFromMinutes(minutes) {
  if (typeof minutes !== 'number' || minutes % 1 !== 0 || minutes < 0) {
    return `Ошибка, проверьте данные`;
    // console.log(`Ошибка, проверьте данные`);
  } else {
    const intHours = Math.floor(minutes / 60);
    const restMinutes = minutes % 60;
    let textHours;
    let textMinutes;

    if (intHours % 10 === 1 || intHours === 1) {
      textHours = 'час';
    } else if (
      intHours % 10 === 2 ||
      intHours === 2 ||
      intHours % 10 === 3 ||
      intHours === 3 ||
      intHours % 10 === 4 ||
      intHours === 4
    ) {
      textHours = 'часа';
    } else {
      textHours = 'часов';
    }

    if (restMinutes % 10 === 1 || restMinutes === 1) {
      textMinutes = 'минута';
    } else if (
      restMinutes % 10 === 2 ||
      restMinutes === 2 ||
      restMinutes % 10 === 3 ||
      restMinutes === 3 ||
      restMinutes % 10 === 4 ||
      restMinutes === 4
    ) {
      textMinutes = 'минуты';
    } else {
      textMinutes = 'минут';
    }

    const result = `Это ${intHours} ${textHours} и ${restMinutes} ${textMinutes}`;
    return result;
    // console.log(result);
  }
}

/*
2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое 
большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)
*/

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    typeof c !== 'number' ||
    typeof d !== 'number' ||
    a === null ||
    b === null ||
    c === null ||
    d === null
  ) {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}
