// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let count = 0;

//   for (let c in str) {
//     if ('aeiou'.includes(c)) {
//       count++;
//     }
//   }
//   return count;
// }

// const vowels = (str) => {
//   let count = 0;
//   const check = ['a', 'e', 'i', 'o', 'u'];

//   for (let c of str.toLowerCase()) {
//     if (check.includes(c)) {
//       count++;
//     }
//   }
//   return count;
// };

const vowels = (str) => {
  const vw = str.match(/[aeiou]/gi);
  return vw ? vw.length : 0;
};

module.exports = vowels;
