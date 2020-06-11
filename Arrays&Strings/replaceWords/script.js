// In English, we have a concept called root, which can be followed by some 
// other words to form another longer word - let's call this word successor. 
// For example, the root an, followed by other, which can form another word another.

// Now, given a dictionary consisting of many roots and a sentence. 
// You need to replace all the successor in the sentence with the root 
// forming it. If a successor has many roots can form it, replace it with the 
// root with the shortest length.

// You need to output the sentence after the replacement.

function replaceWords(dict, sentence) {
    sentence = sentence.split(' ');
    for (let i = 0; i < sentence.length; i++) {
        for (let ele of dict) {
            if (sentence[i].includes(ele)) {
                if (ele.length > sentence[i]) {
                    continue;
                }
                
                sentence[i] = ele;
            }
        }
    }
    return sentence.join(' ');
}