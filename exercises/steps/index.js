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

const steps = (n, row = 0, stairs = '') => {
  if (n === row) {
    return;
  }
  if (n === stairs.length) {
    console.log(stairs);
    return steps(n, row + 1);
  }
  if (stairs.length <= row) {
    stairs += '#';
  } else {
    stairs += ' ';
  }
  steps(n, row, stairs);
};

module.exports = steps;
