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
