describe("equality", () => {
    test("base", () => {
        const left = {
            name: 'Ivan',
            address: {
                street: 'Lenin'
            }
        };
        const right = {
            name: 'Ivan',
            address: {
                street: 'Lenin'
            }
        };

        expect(left).toEqual(right);
    });
});