function Specs(numGears: number, numWheels: number) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            gears = numGears;
            wheels = numWheels;
        }
    }
}

@Specs(3, 4)
class Wagon {
    make: string;
    constructor(make: string) {
        this.make = make;
    }
}

console.log(new Wagon("Nissan"));