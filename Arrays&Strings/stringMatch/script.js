// Given an array of string words. Return all strings in words which is substring 
// of another word in any order. 

// String words[i] is substring of words[j], if can be obtained removing some 
// characters to left and/or right side of words[j].

function strMatch(words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let min;
            let max;

            if (words[j].length > words[i].length) {

                max = words[j];
                min = words[i];
            } else if (words[j].length < words[i].length) {
                max = words[i];
                min = words[j];
            } else {
                continue;
            }

            if (max.indexOf(min) !== -1) {
                result.push(min);
            }
        }
    }

    return result;
}