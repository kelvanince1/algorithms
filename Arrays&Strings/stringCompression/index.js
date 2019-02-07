function compress(str) {
  let counter = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      result += str[i] + String(counter);
      counter = 1;
    }
  }
  return result.length <= str.length ? result : str;
}
