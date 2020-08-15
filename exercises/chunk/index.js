// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// we start by creating an empty chunk
// then loop over the array
// we check the last letter in the chunk ans save in variable
// if chunk is empty of  not full then we add element to chuk
// if its full we create new chunk and add by pushing element to last.

// const chunk = (array, size) => {
//   const chunked = [];

//   for (let n of array) {
//     let last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([n]);
//     } else {
//       last.push(n);
//     }
//   }
//   return chunked;
// };

// #### we start by creating an empty chunk

// #### then loop over the array

// #### we check the last letter in the chunk and save in variable

// #### if chunk is empty of not full then we add element to chunk

// #### if its full we create new chunk and add by pushing element to last.

const chunk = (array, size) => {
  let chunked = [];
  for (let n of array) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([n]);
    } else {
      last.push(n);
    }
  }
  return chunked;
};

module.exports = chunk;
