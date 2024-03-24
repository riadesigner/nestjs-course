function slow(x) {
    alert(`Called with ${x}`);  // здесь могут быть ресурсоёмкие вычисления
    return x;
}

function withCache(func) {
    let cache = new Map();
    return function(x) {
        if (!cache.has(x)) {    // если кеш содержит такой x,
            let result = func(x); // иначе, вызываем функцию
            cache.set(x, result); // и кешируем (запоминаем) результат
        }

        return cache.get(x); // читаем из него результат
    };
}

const cachedSlow = withCache(slow);

cachedSlow(6);
