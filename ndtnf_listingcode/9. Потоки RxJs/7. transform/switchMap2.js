const { fromEvent, interval } = require('rxjs');
const { switchMap } = require('rxjs/operators');

const clicks = fromEvent(document, 'click');
const o = clicks.pipe(
    switchMap(
        () => interval(1000)
    )
);
