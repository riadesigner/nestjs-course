const { zip, from } = require('rxjs');
const { map } = require('rxjs/operators');

const productivity1 = [1, 2, 3, 1, 4, 0, 1];
const productivity2 = [2, 5, 2, 4, 5, 1, 5];

const s1 = from(productivity1);
const s2 = from(productivity2);

zip(s1, s2).subscribe(console.log);