const { of } = require('rxjs');
const { mapTo } = require('rxjs/operators');

const o = of(1,2,3,4,5,6,7)
    .pipe(
        mapTo(11)
    );
o.subscribe(console.log);