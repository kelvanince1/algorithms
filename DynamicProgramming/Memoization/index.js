function memoizedAddTo80(n) {
    const cache = {};

    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('Long');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log(memoized(5));