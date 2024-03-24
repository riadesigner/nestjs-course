function add(a, b) {
    return Number(a) + Number(b);
}

//console.assert(add(3, 4) === 7, '3+4 = 7');

const a = 3;
const b = 4;
const expected = 7;

const result = add(a, b);

console.assert(result === expected, '3+4 = 7');