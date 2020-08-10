// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// ES 6 syntax

// const reverse = (str) => {
//   return str.split('').reverse().join('');
// };

const reverse = (str) => {
  let rev = '';
  for (let c of str) {
    rev = c + rev;
  }
  return rev;
};

// function reverse(str) {
//   let rev = '';

//   for (i = 0; i < str.length; i++) {
//     rev = i + rev;
//   }
//   debugger;

//   return rev;
// }

// reverse();

module.exports = reverse;
