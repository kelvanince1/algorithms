// Given n non-negative integers representing an elevation map
// where the width of each bar is 1, compute how much water it
// is able to trap after raining.

function trapRain(arr) {
    let leftMax = new Array(arr.length).fill(0);
    leftMax[0] = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        leftMax[i] = Math.max(leftMax[i-1], arr[i]);
    }
    
    let rightMax = new Array(arr.length).fill(0);
    rightMax[arr.length - 1] = arr[arr.length - 1];
    
    for (let j = arr.length - 2; j >= 0; j--) {
        rightMax[j] = Math.max(rightMax[j+1], arr[j]);
    }
    
    let counter = 0;
    
    for (let k = 0; k < arr.length; k++) {
        counter = counter + Math.min(leftMax[k], rightMax[k]) - arr[k];
    }
    
    return counter;
}