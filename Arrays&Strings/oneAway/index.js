function oneAway(strA, strB) {
  let maxLen = Math.max(strA.length, strB.length);
  let diff = Math.abs(strA.length - strB.length);

  if (diff > 1) {
    return false;
  }

  let counter = 0;
  for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
    if (strA[i] !== strB[j]) {
      counter++;
    }

    if (counter > 1) {
      return false;
    }

    if (strA[i] === strB[j + 1]) {
      j++;
    } else if (strA[i + 1] === strB[j]) {
      i++;
    }
  }
  return true;
}
