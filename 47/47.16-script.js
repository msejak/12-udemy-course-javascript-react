'use strict';

function factorial(n) {
    let result;
    if (typeof n !== 'number' || n % 1 !== 0) {
        return `Error - the number is not correct!`;
    } else if (n <= 0) {
        result = 1;
    } else {
        result = n * factorial(n - 1);
    }

    return result;
}

console.log(factorial(-5));
console.log(factorial(0));
console.log(factorial(1.5));
console.log(factorial(4));
console.log(factorial(8));
