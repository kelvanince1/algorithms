function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magArr = magazineText.split(' ');
  const magObj = {};

  magArr.forEach(word => {
    if (!magObj[word]) {
      magObj[word] = 0;
    }
    magObj[word]++;
  });

  let isPossible = true;
  noteArr.forEach(word => {
    if (magObj[word]) {
      magObj[word]--;
	  if (magObj[word] < 0) isPossible = false;
    }

    else {
      isPossible = false;
    }
  });

  return isPossible;
}
