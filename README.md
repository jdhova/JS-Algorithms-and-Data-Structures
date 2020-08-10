# AlgoCasts

## Useful Helper Methods

### Palindrone with .every() helper method

const palindrome = (str) => {
return str.split('').every((chr, i) => {
if (chr === str[str.length - i - 1]) return true;
});
};

### Palindrone with loops

const palindrome = (str) => {
let emp = '';
for (let c of str) {
emp = c + emp;
}
if (emp === str) return true;
};

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)
