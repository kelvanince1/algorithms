// Given two strings, determing if one is a permutation of the other.

function helper(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function permutation(strA, strB) {
  return helper(strA) === helper(strB);
}
