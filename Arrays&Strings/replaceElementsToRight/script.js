// Given an array arr, replace every element in that array with the greatest
// element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

function replaceElsRight(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let highVal = helper(arr, i);
        
        result.push(highVal);
    }
    
    result.push(-1);
    
    return result;
}

function helper(arr, idx) {
    let max = 0;

    for (let j = idx + 1; j < arr.length; j++) {
        if (arr[j] > max) {
            max = arr[j];
        }
    }
    
    return max;
}