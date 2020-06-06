// Given an array A of non-negative integers, return an array consisting of all 
// the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

function evenOdd(arr) {
    const obj = {};
    const result = [];
    
    for (let ele of arr) {
        obj[ele] = ele;
    }
    
    for (let ele in obj) {
        if (ele % 2 === 0) {
            result.push(obj[ele]);
        }
    }
    
    for (let ele in obj) {
        if (ele % 2 === 1) {
            result.push(obj[ele]);
        }
    }
    
    return result;
}

function evenOdd(arr) {
    const even = arr.filter(num => num % 2 === 0);
    const odd = arr.filter(num => num % 2 === 1);
    
    return [...even, ...odd];
}