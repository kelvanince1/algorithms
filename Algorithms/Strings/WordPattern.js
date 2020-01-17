// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false

var wordPattern = function(pattern, str) {
    const obj = {};
    const words = str.split(' ');
    const letters = pattern.split('');
    
    if (letters.length !== words.length) {
        return false;
    }
    
    if (new Set(words).size !== new Set(pattern).size) {
        return false;
    }
    
    // { a: dog, b: cat, b: cat }
    
    for (let s = 0; s < letters.length; s++) {
        obj[letters[s]] = words[s];
    }
    
    return letters.map(letter => obj[letter]).join(' ') === words.join(' ');
};