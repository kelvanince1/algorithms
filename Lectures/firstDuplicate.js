// Return the first duplicate within an array

function firstDuplicate(arr) {
    var chars = {};
    for (let i = 0; i < arr.length; i++) {
        if (chars[arr[i]]) {
            return arr[i];
        }
        chars[arr[i]] = true;
    }
    return -1;
}
