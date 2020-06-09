// Given scores of N athletes, find their relative ranks and the people with the 
// top three highest scores, who will be awarded medals: "Gold Medal", 
// "Silver Medal" and "Bronze Medal".

// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so
//  they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
// For the left two athletes, you just need to output their relative ranks 
// according to their scores.

function relativeRanks(nums) {
    const copiedNums = [...nums];
    const result = Array(nums.length).fill(null);
    let counter = 0;
    
    function returnMax() {
        let max = 0;
        let idx = 0;
        for (let i = 0; i < copiedNums.length; i++) {
            if (copiedNums[i] > max) {
                max = copiedNums[i];
                idx = i;
            }
        }
        
        copiedNums[idx] = null;
        return idx;
    }
        
    while (counter < nums.length) {
        let resIdx = returnMax();
        
        if (counter === 0) {
            result[resIdx] = 'Gold Medal';
        } else if (counter === 1) {
            result[resIdx] = 'Silver Medal';
        } else if (counter === 2) {
            result[resIdx] = 'Bronze Medal';
        } else {
            result[resIdx] = counter + 1;
        }
        
        counter++;
    }
    
    return result;
}