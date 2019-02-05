// Determine if a string contains entirely unique characters.

// input - string
// output - boolean
// edge case - empty string, spaces?, upper case/lower case?

function unique(str) {
  const map = {};

  for (let ele of str) {
    if (map[ele]) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
  }

  for (let char in map) {
    if (map[char] > 1) {
      return false;
    }
  }
	return true;
}


// Without using an additional data structure

function unique(str) {
  str = str.split('').sort().join('');

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false;
    }
  }
  return true;
}
