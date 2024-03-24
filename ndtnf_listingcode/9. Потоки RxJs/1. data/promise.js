const delay = ms =>
    new Promise(resolve =>
        setTimeout(resolve, ms)
    );


async function main () {
    await delay(1000);
    console.log('delayed start');
}