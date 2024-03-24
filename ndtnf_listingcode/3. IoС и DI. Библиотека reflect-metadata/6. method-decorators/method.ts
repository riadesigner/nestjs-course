const log = (target: any, property: any, descriptor: any) => {
    if (descriptor) {
        const original = descriptor.value;
        descriptor.value = function(...args: any[]) {
            const className = this.constructor.name;
            console.log(
                `LOG: ${className }::${property}(${args.join(", ")})`
            );
            return original.call(this, args);
        };
        return descriptor;
    }
};

class User {
    @log
    greet(name: any) {
        console.log(`Hello, ${name}!`);
    }
}


const user = new User();
user.greet("Alex");

// Вывод
// LOG: User::greet(Alex)
// Hello, Alex!












