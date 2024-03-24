const { of } = require('rxjs');
const { map } = require('rxjs/operators');

const o = of(1,2,3,4,5,6,7)
    .pipe(
        map(x => x * 2)
    );
o.subscribe(console.log);