const films = [
    {
        name: 'Titanic',
        rating: 9,
    },
    {
        name: 'Die hard 5',
        rating: 5,
    },
    {
        name: 'Matrix',
        rating: 8,
    },
    {
        name: 'Some bad film',
        rating: 4,
    },
];

function showGoodFilms(arr) {
    return arr.filter((item) => item.rating >= 8);
}

function showListOfFilms(arr) {
    return arr.reduce((acc, item) => `${acc}, ${item.name}`, '').slice(2);
}

function setFilmsIds(arr) {
    arr.map((item, index) => (item.id = index));
    return arr;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    arr.map((item) => {
        if (!item.hasOwnProperty('id')) {
            return false;
        }
    });

    return true;
}

console.log(showGoodFilms(films));
console.log(showListOfFilms(films));
console.log(setFilmsIds(films));
console.log(checkFilms(tranformedArray));
