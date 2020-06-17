// Find longest subarray with an equal number of letters and strings

function numsLetters(arr) {
    let resultLength = 0;
    let resultArr;
    
    for (let i = 0; i < arr.length; i++) {
        let numCount = 0;
        let charCount = 0;
        
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof(arr[i][j]) === 'number') {
                numCount++;
            } else if (typeof(arr[i][j]) === 'string') {
                charCount++;
            }
        }
        
        if (charCount === numCount && arr[i].length > resultLength) {
            resultLength = arr[i].length;
            resultArr = arr[i];
        }
    }
    
    return resultArr;
}