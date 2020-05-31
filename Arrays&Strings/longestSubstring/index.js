// Find the longest substring with no repeating characters
// Input - abcabcbb would produce abc with the length of 3 as output

function lengthOfLongestSubstring(s) {
    const obj = {};
    var counter = 1;
    
    return s.split('').reduce((max, v, i) => {
        counter = obj[v] >= counter ? obj[v] + 1 : counter;
        obj[v] = i;
        return Math.max(max, i - counter + 1);
    }, 0);
}

// Brute force
function longestSubStr(str) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let set = new Set([char]);

        for (let j = i + 1; j < str.length; j++) {
            let char = str.charAt(j);

            if (set.has(char)) {
                break;
            } else {
                set.add(char);
            }

            counter = Math.max(counter, set.size);
        }
    }
}

// Sliding Window
function longestSubString(str) {
    let counter = 0;
    let i = 0;
    let j = 0;
    let set = new Set([]);

    while (i < str.length && j < str.length) {
        let char = str.chatAt(j);

        if (!set.has(char)) {
            set.add(char);
            j++;
            counter = Math.max(counter, j - i);
        } else {
            set.delete(s.charAt(i));
            i++;
        }
    }

    return counter;
}