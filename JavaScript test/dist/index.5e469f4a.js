let dividers = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
const primes = [];
const primeDividers = function(n) {
    const filtered = [];
    const findDividers = function(numbers) {
        numbers.filter((num)=>{
            if (Number.isInteger(n / num)) filtered.push(n / num);
        });
        const recheck = function(numbers) {};
        // recheck(dividers);
        console.log(filtered);
    };
    findDividers(dividers);
};
primeDividers(180);

//# sourceMappingURL=index.5e469f4a.js.map
