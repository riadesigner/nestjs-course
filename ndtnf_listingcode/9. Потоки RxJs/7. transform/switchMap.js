const { of } = require('rxjs');
const { switchMap } = require('rxjs/operators');

const switched = of(1, 2, 3)
    .pipe(
        switchMap(
            x => of(x, x ** 2, x ** 3)
        )
    );

switched.subscribe(x => console.log(x));