console.log(factorial(3));

// Iterative
function factorial(n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * (n - i);
    }

    return result;
}

// Recursive
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}