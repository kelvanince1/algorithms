// Write a program that breaks up a string of words with no spaces into a string with
// appropriate spaces.

function breakWord(str) {
    const words = {
        peanut: 'peanut',
        butter: 'butter'
    }

    let result = '';
    let substr = '';

    for (let i = 0; i < str.length; i++) {
        substr += str[i];

        if (words[substr]) {
            result += substr + ' ' + str.slice(i + 1, str.length);
        }
    }

    return result;
}