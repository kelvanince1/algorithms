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
    console.log('IndexOf', arr.indexOf(arr[i]));
    if (i !== arr.indexOf(arr[i])) {
        console.log('Duplicates found', arr[i]);
    }
}