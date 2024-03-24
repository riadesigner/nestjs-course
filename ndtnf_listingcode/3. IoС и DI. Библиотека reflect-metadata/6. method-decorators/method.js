"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const log = (target, property, descriptor) => {
    if (descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const className = this.constructor.name;
            console.log(`LOG: ${className}::${property}(${args.join(", ")})`);
            return original.call(this, args);
        };
        return descriptor;
    }
};
class User {
    greet(name) {
        console.log(`Hello, ${name}!`);
    }
}
__decorate([
    log
], User.prototype, "greet", null);
const user = new User();
user.greet("Alex");
// Вывод
// LOG: User::greet(Alex)
// Hello, Alex!
