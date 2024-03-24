function withLog(fn) {
    return function (...args) {
        console.log(`invoked function: ${fn.name}`);
        return fn(...args);
    }
}

function sum(x, y) {
    return x + y;
}

const loggedSum = withLog(sum);

const result = loggedSum(5, 6);

console.log(result);