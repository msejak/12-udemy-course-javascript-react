function deepCount(a) {
    let count = a.length;
    console.log(count);

    for (let i = 0; i < a.length; i++) {
        const currentEl = a[i];
        if (Array.isArray(currentEl)) {
            count = count + deepCount(currentEl);
            console.log(count);
        }
    }

    return count;
}

// console.log(deepCount([1, 5, 3])); // => 3

console.log(deepCount(['1', 5, '3', ['10']]));
// => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// console.log(deepCount([1, 2, [3, 4, [5]]])); // => 7

// console.log(deepCount([])); // => 0

// console.log(deepCount([[[[[[[[[]]]]]]]]])); // => 8

// function pow(x, n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 0));
// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
