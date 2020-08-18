// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// const steps = (n, row = 0, stairs = '') => {
//   if (n === row) {
//     return;
//   }
//   if (n === stairs.length) {
//     console.log(stairs);
//     return steps(n, row + 1);
//   }
//   if (stairs.length <= row) {
//     stairs += '#';
//   } else {
//     stairs += ' ';
//   }
//   steps(n, row, stairs);
// };

const steps = (n, row = 0, stair = '') => {
  if (n === row) return; /// kill it here base case

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
};

module.exports = steps;
