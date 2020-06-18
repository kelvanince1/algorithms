// // Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();

class Shuffle {
    constructor(data) {
        this.data = data;
        this.previous = [];
    }
    
    shuffle() {        
        for (let i = 0; i < this.data.length; i++) {
            let randNum = Math.floor(Math.random() * (this.data.length - 0));
            
            let tmp = this.data[i];
            this.data[i] = this.data[randNum];
            this.data[randNum] = tmp;
        }

        return this.data;
    }
    
    reset() {
        let prevData = this.previous.pop();
        
        this.data = prevData;

        return this.data;
    }
}