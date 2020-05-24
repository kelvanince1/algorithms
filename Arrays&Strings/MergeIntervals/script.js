function merge(arr) {
    const result = [];
    
    arr.sort((a, b) => a[0] - b[0]);
    
    let lastSubArr = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        
        if (current[0] > lastSubArr[1]) {
            result.push(lastSubArr);
            lastSubArr = current;
        } else {
            lastSubArr = [Math.min(current[0], lastSubArr[0]), Math.max(current[1], lastSubArr[1])];
        }
    }
    
    result.push(lastSubArr);
    
    return result;
}

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].