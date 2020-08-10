// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let rev = str.split('').reverse().join('');
//   if (str === rev) return true;
// }

// const palindrome = (str) => {
//   let rev = str.split('').reverse().join('');
//   if (str === rev) return true;
// };

function palindrome(str) {
  let emp = '';
  for (let c of str) {
    emp = c + emp;
  }
  if (str === emp) return true;
}

module.exports = palindrome;
