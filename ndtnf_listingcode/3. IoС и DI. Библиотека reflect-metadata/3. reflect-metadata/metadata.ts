import 'reflect-metadata'

console.clear();

function readTypes () {
    const decorator: MethodDecorator = (target, propertyKey, description) => {
        const args = Reflect.getMetadata('design:paramtypes', target, propertyKey)
            .map(c => c.name);
        const ret = Reflect.getMetadata('design:returntype', target, propertyKey);

        console.log(`Arguments type: ${args.join(', ')}.`); // Arguments type: Number, String, Foo.
        console.log(`Return type:    ${ret.name}.`) // Return type:    Boolean.
    };
    return decorator;
}

class Foo {

}

class Bar {

    @readTypes()
    fn (a: number, b: string, c: Foo): boolean {
        return true
    }

}
