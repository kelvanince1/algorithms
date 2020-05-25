const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }

  if (array.length === 2) {
    return array[0] > array[1] ? [array[1], array[0]] : array;
  }
  // Split Array in into right and left

  const middle = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middle);
  const rightArr = array.slice(middle);

  const leftSortedArr = mergeSort(leftArr);
  const rightSortedArr = mergeSort(rightArr);

  const merged = [];
  let leftArrIdx = 0;
  let rightArrIdx = 0;

  while (leftArrIdx < leftSortedArr.length || rightArrIdx < rightSortedArr.length) {
    if (
      leftArrIdx >= leftSortedArr.length ||
      leftSortedArr[leftArrIdx] > rightSortedArr[rightArrIdx]) {
      merged.push(rightSortedArr[rightArrIdx]);
      rightArrIdx++;
    } else {
      merged.push(leftSortedArr[leftArrIdx]);
      leftArrIdx++;
    }
  }

  return merged;
}