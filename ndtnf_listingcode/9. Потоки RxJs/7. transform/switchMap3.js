const { interval } = require('rxjs');
const { switchMap } = require('rxjs/operators');

const o = interval(2500).pipe(
    switchMap(
        () => interval(1000)
    )
);

// 0, 1

o.subscribe(console.log);
