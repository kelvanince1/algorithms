function rotation(strA, strB) {
  if (strA.length !== strB.length || strA.length === 0) {
    return false;
  }

  let sub = strA + strA;

  return substring(sub, strB);
}
