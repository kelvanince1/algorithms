// Given two strings A and B of lowercase letters, return true if and 
// only if we can swap two letters in A so that the result equals B.

function buddyStr(strA, strB) {
    if (strA.length !== strB.length || (strA.length < 2 && strB.length < 2)) {
        return false;
    }
    
    if (strA === strB) {
        const checker = new Set(strA.split(''));
        return checker.length < strA.length;
    }
    
    const holding = [];
    
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i]) {
            holding.push(i);
        }
    }
    
    if (holding.length !== 2) {
        return false;
    }
    
    if (strA[holding[0]] === strB[holding[1]] && strA[holding[1]] === strB[holding[0]]) {
        return true;
    } else {
        return false;
    }
}