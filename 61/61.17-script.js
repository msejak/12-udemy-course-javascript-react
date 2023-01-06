function amountOfPages(summary) {
    let string = '';
    let number = 0;

    while (summary > string.length) {
        number++;
        string += number;
    }

    return number;
}

console.log(amountOfPages(5)); // => 5

console.log(amountOfPages(25)); // => 17 => 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17

console.log(amountOfPages(1095)); // => 401

console.log(amountOfPages(185)); // => 97
