// Given the strings s1 and s2 of size n, and the string evil. Return the number of 
// good strings.

// A good string has size n, it is alphabetically greater than or equal to s1, it 
// is alphabetically smaller than or equal to s2, and it does not contain the 
// string evil as a substring. Since the answer can be a huge number, return this 
// modulo 10^9 + 7.

 

// Example 1:

// Input: n = 2, s1 = "aa", s2 = "da", evil = "b"
// Output: 51 
// Explanation: There are 25 good strings starting with 'a': "aa","ac","ad",...,"az".
// Then there are 25 good strings starting with 'c': "ca","cc","cd",...,"cz" and 
// finally there is one good string starting with 'd': "da". 
// Example 2:

// Input: n = 8, s1 = "leetcode", s2 = "leetgoes", evil = "leet"
// Output: 0 
// Explanation: All strings greater than or equal to s1 and smaller than or equal 
// to s2 start with the prefix "leet", therefore, there is not any good string.
// Example 3:

// Input: n = 2, s1 = "gx", s2 = "gz", evil = "x"
// Output: 2

// --- NOT COMPLETED ---

function goodStrings(str1, str2, evil) {
    let result = 0;
    let strRep = str1;
    const split1 = str1.split('');
    const split2 = str2.split('');
    const splitEvil = evil.split('');

    if (str1.indexOf(evil) === 0 && str2.indexOf(evil) === 0) {
        return 0;
    }

    const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];

    if (arr.indexOf(split1[0]) < arr.indexOf(split2[0])) {
        let count = arr.indexOf(split2[0]) - arr.indexOf(split1[0]);

        if (arr.indexOf(splitEvil[0]) <= arr.indexOf(split2[0]) && arr.indexOf(splitEvil[0]) >= arr.indexOf(split1[0])) {
            result += 25 * count;
        } else {
            result += 26 * count;
        }
    }
    
    for (let i = split1.length - 1; i >= 0; i--) {
        if (split1[i] === split2[i]) continue;
      
        let str1Code = split1[i].charCodeAt() - 96;
        let str2Code = split2[i].charCodeAt() - 96;
        let evilCode = evil.charCodeAt() - 96;
        
        if (str2Code > str1Code) {
            result += str2Code - str1Code;

            if (evilCode < str2Code && evilCode > str1Code) result -= 1;
        } else if (str2Code < str1Code) {
            result += (26 - str1Code) + str2Code;
            if (evilCode > str2Code && evilCode < str1Code) result -= 1;
        }
        
        // Mod
        
        str1Code += 1;
        let curr = String.fromCharCode(str1Code);
        strRep[i] = curr;
    }
    
    return result;
}