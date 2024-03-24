const { of } = require('rxjs');
const { pluck } = require('rxjs/operators');

const o = of({
    name: 'Denis',
    age: 33,
    gender: 'Male'
}).pipe(
    pluck('name')
);

o.subscribe(console.log);