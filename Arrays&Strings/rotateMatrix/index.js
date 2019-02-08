function matrix(n) {
  let len = n.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < len - (2 * i) - 1; j++) {
      let level = n[i + j][n - 1 - i];
	  n[i + j][n - 1 - i] = n[i][i + j];
      n[i][i + j] = level;

      level = n[len - 1 - i][len - 1 - i - j];
      n[len - 1 - i][len - 1 - i - j] = n[i][i + j];
      n[i][i + j] = level;

      level = n[len - 1 - i][len - 1 - i - j];
      n[len - 1 - i][len - 1 - i - j] = n[i][i + j];
      n[i][i + j] = level;

      level = n[len - 1 - i - j][i];
      n[len - 1 - i - j][i] = n[i][i + j];
      n[i][i + j] = level;
    }
  }
  return n;
}
