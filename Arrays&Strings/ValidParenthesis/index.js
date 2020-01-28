
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

var isValid = function(s) {
    if (!s) {
        return true;
    }

    if (s.length % 2 !== 0) {
        return false;
    }

    const arr = [];
    const obj = {
        ')': '(',
        '}': '{',
        ']': '['
    };


    for (let ele of s) {
        if (ele === '(' || ele === '{' || ele === '[') {
            arr.push(ele);
        } else if (arr.pop() !== obj[ele]) {
            return false;
        }
    }

    return arr.length === 0;
 }