function twoSum(arr, target) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        let val = target - arr[i];

        if (val in obj) {
            return [obj[val], i];
        }

        obj[arr[i]] = i;
    }

    return null;
}