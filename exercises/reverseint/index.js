// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const j = n.toString();

//   let rev = '';

//   for (let x of j) {
//     if (x > 0) {
//       rev = x + rev;
//     }
//     return rev;
//   }
// }

// function reverseInt(n) {
//   const jude = n.toString().split('').reverse().join('');

//   if (n < 0) {
//     return parseInt(jude) * -1;
//   }

//   return parseInt(jude);
// }

const reverseInt = (n) => {
  let jude = n.toString();
  let empty = '';

  for (let x of jude) {
    empty = x + empty;
  }

  return parseInt(empty) * Math.sign(jude);
};

module.exports = reverseInt;
