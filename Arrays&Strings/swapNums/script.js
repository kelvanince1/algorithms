function swapNums(nums, num1, num2) {
    let number1 = true;
    let number2 = true; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === num1 && number1) {
            nums[i] = num2;
            number1 = false;
        }
        
        if (nums[i] === num2 && number2) {
            nums[i] = num1;
            number2 = false;
        }
    }
    
    return nums;
}