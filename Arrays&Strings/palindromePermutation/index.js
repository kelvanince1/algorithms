function palindrome(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').reverse().join('');
}

function perm(str) {
  return
    str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    ===
    palindrome(str);
}
