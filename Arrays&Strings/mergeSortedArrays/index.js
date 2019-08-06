function sortMergedArrays(arr1, arr2) {
    const result = [];

    for (let ele of arr1) {
        result.push(ele);
    }

    for (let ele of arr2) {
        result.push(ele);
    }

    return result.sort();
}

function sortMergedArrays(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] <= arr2[j]) {
                result.push(arr1[i]);
            } else {
                result.push(arr2[j]);
            }
        }
    }

    return result;
}

function sortMergedArrays(arr1, arr2) {
    const result = [];
    let first = arr1[0];
    let second = arr2[0];
    let i = 1;
    let j = 1;

    while (first || second) {
        if (!second || first <= second) {
            result.push(first);
            first = arr1[i];
            i++;
        } else {
            result.push(second);
            second = arr2[j];
            j++;
        }
    }
    return result;
}