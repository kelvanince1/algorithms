const arr = [1, 5, 8, 12, 17];

function findElement(sortedArr, element, offset = 0) {
    let startIdx = 0;
    let endIdx = sortedArr.length - 1;

    const middleIdx = Math.floor((endIdx - startIdx) / 2);

    if (element === sortedArr[middleIdx]) {
        return middleIdx + offset;
    }

    if (sortedArr[middleIdx] < element) {
        startIdx = middleIdx + 1;
        offset = offset + middleIdx + 1;
    } else {
        endIdx = middleIdx - 1;
    }

    return findElement(sortedArr.slice(startIdx, endIdx + 1), element, offset);
}

console.log(findElement(arr, 12));