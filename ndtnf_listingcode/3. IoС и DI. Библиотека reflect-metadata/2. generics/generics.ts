class Box<T> {
    container: T[];
    constructor() {
        this.container = [];
    }
    add(value: T) {
        this.container.push(value);
    }
    pop(): T {
        return this.container.pop();
    }
    count(): number {
        return this.container.length;
    }
}

const strBox = new Box<string>();
strBox.add('hello');

const numberBox = new Box<number>();
numberBox.add(67);