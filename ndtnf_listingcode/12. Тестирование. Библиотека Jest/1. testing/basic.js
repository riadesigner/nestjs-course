function add(a, b) {
    return Number(a) + Number(b);
}

console.assert(add(3, 4) === 7, '3+4 = 7');
console.assert(add(2, 11) === 13, '2+11 = 13');
console.assert(add(1, '1') === 2, '1+"1" = 2')
console.assert(add('3', '1') === 4, '"3"+"1" = 4');
