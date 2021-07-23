// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  let rev = '';
  for (let c of str) {
    rev = c + rev;
  }
  return rev;
};

// let rev = []

// for(let n of str) {
//   rev = n + rev
//     console.log(rev)
// }

module.exports = reverse;
