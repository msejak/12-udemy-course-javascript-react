function isPangram(string) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    for (let item of alpha) {
        if (!string.includes(item)) {
            return false;
        }
    }

    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // => true

console.log(isPangram('Hello world')); // => false
