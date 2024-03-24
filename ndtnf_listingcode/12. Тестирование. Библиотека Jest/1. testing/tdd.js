function add(a, b) {
    return Number(a) + Number(b);
}

const test = (callback) => callback();

test(() => {
    const a = 3;
    const b = 4;
    const expected = 7;

    const result = add(a, b);

    console.assert(result === expected, '3+4 = 7');
});

test(() => {
    const a = 5;
    const b = -10;
    const expected = -5;

    const result = add(a, b);

    console.assert(result === expected, '5+-10 = -5');
});

test(() => {
    const a = 0;
    const b = 4;
    const expected = 4;

    const result = add(a, b);

    console.assert(result === expected, '0+4 = 4');
});

test(() => {
    const a = '2';
    const b = '6';
    const expected = 8;

    const result = add(a, b);

    console.assert(result === expected, '"2"+"6" = 8');
});