const { of } = require('rxjs');
const { reduce } = require('rxjs/operators');

const o = of(1,2,3,4,5,6,7)
    .pipe(
        reduce((acc, current) => acc + current, 0)
    );
// 0, 1 => 1
// 1, 2 => 3
// 3, 3 => 6
// 6, 4 => 10
// 10, 5 => 15
// 15, 6 => 21
// 21, 7 => 28
o.subscribe(console.log);