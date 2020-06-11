var containsDuplicate = function(nums) {
    const obj = {};
    
    for (let ele of nums) {
        if (!obj[ele]) {
            obj[ele] = 1;
        } else {
            obj[ele]++;
        }
        
        if (obj[ele] > 1) {
            return true;
        }
    }
    
    return false;
};


for (let i = 0; i < arr.length; i++) {
    if (i !== arr.indexOf(arr[i])) {
        return 'Duplicates found';
    }

    return 'No duplicates';
}