class AbortablePromise extends Promise {
    constructor(callback, signal) {
        const handler = {
            apply(target, context, args) {
                console.log('resolved!');
            }
        };
        const proxy = new Proxy(callback, handler);
        super(callback);
    }
    reject() {
        console.log('rejected');
        // this._reject();
    }
}

const promise = new AbortablePromise((resolve) => {
    setTimeout(resolve, 1000);
});

promise.then(() => console.log('success'));

promise.reject();