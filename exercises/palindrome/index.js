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

// function palindrome(str) {
//   let emp = '';
//   for (let c of str) {
//     emp = c + emp;
//   }
//   if (str === emp) return true;
// }

// const palindrome = (str) => {
//   let emp = '';
//   for (let c of str) {
//     emp = c + emp;
//   }
//   if (str === emp) return true;
// };

const palindrome = (str) => {
  let emp = '';
  for (let c of str) {
    emp = c + emp;
  }
  if (emp === str) return true;
};

// const palindrome = (str) => {
//   return str.split('').every((chr, i) => {
//     if (chr === str[str.length - i - 1]) return true;
//   });
// };

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

// const palindrome = (str) => {
//   let emp = '';
//   for (let c of str) {
//     emp = c + emp;
//   }
//   if (str === emp) return true;
// };

// function reverseString(str) {
//   const newString = '';
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   if (newString === str) return true;
// }

module.exports = palindrome;
