// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.

function longestPalindrome(s) {
    let result = '';
    let current = '';
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < i + 2; j++) {
            let left = i;
            let right = j;
            
            while (s[left] && s[left] === s[right]) {
                current = s.substring(left, right + 1);
                
                if (current.length > result.length) {
                    result = current;
                }
                
                left--;
                right++;
            }
        }
    }
    return result;
}


function longestPal(str) {
    let result = '';    
    for (let i = 0; i < str.length; i++) {
        let tmp = str[i];
        for (let j = i + 1; j < str.length; j++) {
            tmp += str[j];

            if (tmp.split('').reverse().join('') === tmp && tmp.length > result.length) {
                  result = tmp;
            }
        }
    }
    return result;
}