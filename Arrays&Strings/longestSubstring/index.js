// Find the longest substring with no repeating characters
// Input - abcabcbb would produce abc with the length of 3 as output

function lengthOfLongestSubstring(s) {
    const obj = {};
    var counter = 0;
    
    return s.split('').reduce((max, v, i) => {
        counter = obj[v] >= counter ? obj[v] + 1 : counter;
        obj[v] = i;
        return Math.max(max, i - counter + 1);
    }, 0);
}