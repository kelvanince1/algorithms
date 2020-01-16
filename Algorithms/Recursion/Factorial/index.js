function factorialIterative(number) {
    let result = 0;
    for (let i = number + 1; i > 0; i--) {
        result += number * i;
    }

    return result;
}

function factorialRecursive(number) {
    if (number === 1) {
        return number;
    }

    return number * factorialRecursive(number - 1);
}