const { race, of, timer } = require('rxjs');
const { delay, take } = require('rxjs/operators');

const o1 = of(7, 11, 55).pipe(delay(100));
const timer1 = timer(150, 100).pipe(take(2));
const timer2 = timer(30, 50).pipe(take(10));
const o = race(o1, timer1, timer2);

o.subscribe(console.log);
