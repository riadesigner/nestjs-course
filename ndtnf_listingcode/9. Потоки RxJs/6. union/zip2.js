const { zip, of } = require('rxjs');
const { map } = require('rxjs/operators');

let age = of(27, 25, 29);
let name = of('Foo', 'Bar', 'Beer');
let isDev = of(true, true, false);

zip(age, name, isDev).pipe(
    map(([age, name, isDev]) => ({ age, name, isDev }))
)
    .subscribe(x => console.log(x));