function comboSum(arr, target, idx=0, current=[], result=[]) {
	if (target <= 0) {
		if (target === 0) {
			result.push(current.slice());
		}
		return;
	}

	if (idx < arr.length) {
        const value = arr[idx];

	    current.push(value);

		comboSum(arr, target - value, idx, current, result);
        current.pop();
        comboSum(arr, target, idx + 1, current, result);
    }

    return result;
}