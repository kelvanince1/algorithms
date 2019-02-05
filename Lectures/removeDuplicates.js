// Remove all duplicate values in an array.

var removeDuplicates = function(nums) {
    const arr = [];

    for (let char of nums) {
        if (!arr.includes(char)) {
            arr.push(char);
        }
    }
    return arr;
};
