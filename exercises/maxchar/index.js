// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const char = {};
//   let max = 0;
//   let maxC = '';

//   for (let c of str) {
//     if (char[c]) {
//       char[c]++;
//     } else {
//       char[c] = 1;
//     }
//   }
//   for (let c in char) {
//     if (char[c] > max) {
//       max = char[c];
//       maxC = c;
//     }
//   }
//   return maxC;
// }

const maxChar = (str) => {
  const mChar = {};
  let max = 0;
  let maxC = '';

  for (let x of str) {
    if (mChar[x]) {
      mChar[x]++;
    } else {
      mChar[x] = 1;
    }
  }

  for (let c in mChar) {
    if (mChar[c] > max) {
      max = mChar[c];
      maxC = c;
    }
  }
  return maxC;
};

module.exports = maxChar;
