// Find the greatest common diviser of two numbers.
// example, 4, 6 = 2
// example, 2, 3 = 1

function commonDiviser(n1, n2) {
    let counter = 1;
    let result; 

    while (counter < n1 || counter < n2) {
        if (n1 % counter === 0 && n2 % counter === 0) {
            result = counter;
        }

        counter++;
    }

    return result;
}