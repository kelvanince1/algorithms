// Given a palindromic string palindrome, replace exactly one character by any
// lowercase English letter so that the string becomes the lexicographically
// smallest possible string that isn't a palindrome.

// After doing so, return the final string.  If there is no way to do so, return
// the empty string.

function breakPalindrome(str) {
    if (!str || str.length < 3) {
        return '';
    }
    
    for (let i = 0; i < str.length; i++) {
        let strChar = str[i].charCodeAt();
        let mutatedStr = str;
        let mutatedChar = String.fromCharCode(strChar + 1);
        mutatedStr = replace(mutatedStr, i, mutatedChar); 
        
        if (mutatedStr !== str) {
            return mutatedStr;
        }
    }
    
    return '';
}

function replace(str,idx,chr) {
    if(idx > str.length-1) return str;
    return str.substr(0,idx) + chr + str.substr(idx+1);
}