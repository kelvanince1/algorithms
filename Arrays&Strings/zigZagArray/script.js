// Given an array nums of integers, a move consists of choosing any element and 
// decreasing it by 1.

// An array A is a zigzag array if either:

// Every even-indexed element is greater than adjacent elements, ie. 
// A[0] > A[1] < A[2] > A[3] < A[4] > ...
// // OR, every odd-indexed element is greater than adjacent elements, ie.
// A[0] < A[1] > A[2] < A[3] > A[4] < ...
// // Return the minimum number of moves to transform the given array nums into 
// a zigzag array.

function zigArr(arr) {
    let even = zig(arr, 0, 0);
    let odd = zig(arr, 0, 1);
    return Math.min(even, odd);
}

function zig(arr, counter, num) {
    for (let i = num; i < arr.length; i += 2) {
        if (arr[i] >= arr[i - 1]) {
            counter += arr[i] - arr[i - 1] + 1;
            arr[i] = arr[i - 1] - 1;
        }
        
        if (arr[i] >= arr[i + 1]) {
            counter += arr[i] - arr[i + 1] + 1;
            arr[i] = arr[i + 1] - 1;
        }
    }
    return counter;
}