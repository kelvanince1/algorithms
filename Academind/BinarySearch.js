const arr = [1, 5, 8, 12, 17];

function findElement(sortedArr, element) {
    let startIdx = 0;
    let endIdx = sortedArr.length - 1;

    while (startIdx <= endIdx) {
        const middleIdx = Math.floor((endIdx - startIdx) / 2);

        if (element === sortedArr[middleIdx]) {
            return middleIdx;
        }

        if (sortedArr[middleIdx] < element) {
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1;
        }
    }
}

console.log(findElement(arr, 12));