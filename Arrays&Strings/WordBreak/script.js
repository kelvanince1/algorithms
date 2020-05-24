function wordBreak(str, dict) {
    let res = '';
    let strCopy = '';
    
    for (let i = 0; i < str.length; i++) {
        res += str[i];
        
        if (dict.includes(res)) {
            console.log('RES', res);
            strCopy = str.slice(i + 1, str.length);
            console.log('STR', str);
            res = '';
        }
    }
    
    if (strCopy.length) {
        return false;
    } else {
        return true;
    }
}

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".