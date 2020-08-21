// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[result.length - 1];
//     const b = result[result.length - 2];

//     sum = a + b;

//     result.push(sum);
//   }

//   return result[result.length - 1];
// }

const memoize = (fn) => {
  const memory = {};

  return function (...args) {
    if (memory[args]) {
      return memory[args];
    }

    const result = fn.apply(this, args);
    memory[args] = result;

    return result;
  };
};
const slowfib = (n) => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};

const fib = memoize(slowfib);

module.exports = fib;
