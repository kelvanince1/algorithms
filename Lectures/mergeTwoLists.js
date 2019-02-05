// Merge two lists and sort them.

var mergeTwoLists = function(l1, l2) {
    const arr = [];

    for (let char of l1) {
        arr.push(char);
    }

    for (let ele of l2) {
        arr.push(ele);
    }

    return arr.sort();
};
