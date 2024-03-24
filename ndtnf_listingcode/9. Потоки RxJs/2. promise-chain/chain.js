Promise.resolve(777)
    .then(value => {
        console.log(value); // 777
        return 45;
    })
    .then(num => {
        console.log(num);
        return new Promise(resolve => setTimeout(resolve, 200));
    })
    .then(() => {

    })
    .then(value => {
        console.log(value) // undefined
    });