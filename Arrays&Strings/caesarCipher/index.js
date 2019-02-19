function caesarCipher(str, num) {
  num = num % 26;
  const lowerStr = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let newStr = '';

  for (let i = 0; i < lowerStr.length; i++) {
    let currLetter = lowerStr[i];
    if (currLetter === ' ') {
      newStr += currLetter;
      continue;
    }

    let currIndex = aplhabet.indexOf(currLetter);
    let newIndex = currIndex + num;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }

    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }

    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else {
      newStr += alphabet[newIndex];
    }
  }
  return newStr;
}
