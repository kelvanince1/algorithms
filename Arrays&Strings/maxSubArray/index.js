function maxSub(arr) {
    let max = arr[0];
    let last = 0;

    for (let ele of arr) {
        if (last >= 0) {
            last += ele;
        } else {
            last = ele;
        }

        if (last > max) {
            max = last;
        }
    }

    return max;
}