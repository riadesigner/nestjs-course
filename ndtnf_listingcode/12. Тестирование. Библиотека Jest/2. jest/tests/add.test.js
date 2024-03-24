const add = require('../src/add.js');

describe("addTest(a, b)", () => {
    test("3+4=7", () => {
        const a = 3;
        const b = 4;
        const expected = 7;
        const result = add(a, b);

        expect(result).toBe(expected);
    });

    test("13+4=-11", () => {
        const a = 13;
        const b = 4;
        const expected = -11;
        const result = add(a, b);

        expect(result).toBe(expected);
    });
});