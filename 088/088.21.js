const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
    let positive = data.filter((item) => item.amount > 0);
    return positive.reduce((acc, item) => acc + item.amount, 0);
};

const getTotalIncomeAmount = (data) => {
    let positive = data.filter((item) => item.amount < 0);

    if (positive.length > 0) {
        return data.reduce((acc, item) => acc + item.amount, 0);
    } else {
        getPositiveIncomeAmount(data);
    }
};

console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));
