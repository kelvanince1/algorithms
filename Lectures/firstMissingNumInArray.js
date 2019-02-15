// Find the first missing number from the minimum value within an array

function solve(arr) {
    var min = Math.min.apply(null, arr);
	   console.log(min);
    for (let i = min; i < 1000000; i++) {
        if(!A.includes(i)) return i;
    }
}
