// Given an array of integers A, a move consists of choosing any A[i], and 
// incrementing it by 1.

// Return the least number of moves to make every value in A unique.

 

// Example 1:

// Input: [1,2,2]
// Output: 1
// Explanation:  After 1 move, the array could be [1, 2, 3].
// Example 2:

// Input: [3,2,1,2,1,7]
// Output: 6
// Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have 
// all unique values.

function minIncrement(arr) {
    const obj = {};
    let counter = 0;
    let unique = true;
    
    for (let ele of arr) {
        if (obj[ele]) {
            obj[ele]++;
        } else {
            obj[ele] = 1;
        }
    }

    for (let ele in obj) {
        if (obj[ele] > 1) {
            unique = false;
            break;
        }
    }

    if (unique) {
        return counter;
    }
    
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (obj[arr[i]] > 1) {
            let checker = true;
            while (checker) {
                if (!obj[curr]) {
                    obj[curr] = 1;
                    checker = false;
                } else {
                    curr++;
                    counter++;
                }
            }
            obj[arr[i]]--;
            arr[i] = curr;
        }
    }
    
    return counter;
}