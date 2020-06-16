// Perform math operations by only using the + operator

function multiply(val, multiplier) {
    if (multiplier === 1) {
        return val;
    }
    
    if (multiplier === 0 || val === 0) {
        return 0;
    }
    
    let counter = 2;
    let result = val
    
    while (counter <= multiplier) {
        result += val;
        counter++;
    }
    
    return result;
}

function divide(val, divisor) {
    if (divisor === 1) {
        return val;
    }
    
    if (divisor === 0 || val === 0) {
        return 0;
    }

    let counter = 1;
    let div = divisor;
    
    while (div < val) {
        div += divisor;
        counter++;
    }
    
    return counter;
}

function subtract(val, subtractor) {    
    let counter = 0;
    let sub = subtractor;
    
    while (val > sub) {
        sub++;
        counter++;
    }
    
    return counter;
}