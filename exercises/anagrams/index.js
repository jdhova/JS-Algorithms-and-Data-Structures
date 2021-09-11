// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// use Regex to check first and remove the spaces.
// first step loop tru the string A and B and save ket and value pairs in Objest
// looop tru object and compare if key value pair and key are same

// const anagrams = (stringA, stringB) => {
//   return cleanStr(stringA) === cleanStr(stringB);
// };

// const cleanStr = (str) => {
//   return str.replace(/[ˆ\w]/g, '').toLowerCase().split('').sort().join('');
// };

// const anagrams = (stringA, stringB) => {
//   return cleanStr(stringA) === cleanStr(stringB);
// };
// const anagrams = (stringA, stringB) => {
//   return cleanStr(stringA) === cleanStr(stringB);
// };
// const anagrams = (stringA, stringB) => {
//   return cleanStr(stringA) === cleanStr(stringB);
// };
// const anagrams = (stringA, stringB) => {
//   return cleanStr(stringA) === cleanStr(stringB);
// };

module.exports = anagrams;
