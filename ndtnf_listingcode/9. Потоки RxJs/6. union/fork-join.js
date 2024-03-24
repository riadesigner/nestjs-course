const { timer, forkJoin } = require('rxjs');
const { take } = require('rxjs/operators');

const timerOne = timer(1000, 4000).pipe(take(7));
const timerTwo = timer(2000, 4000).pipe(take(2));
const timerThree = timer(3000, 4000).pipe(take(4));

const o = forkJoin({
    one: timerOne,
    two: timerTwo,
    three: timerThree
});

o.subscribe(console.log);
