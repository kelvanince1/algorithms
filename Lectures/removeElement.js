// Remove a specific element from an array using 0(1);

var removeElement = function(nums, val) {
    nums = nums.filter(function(e) { return e !== val })
    return nums;
};
