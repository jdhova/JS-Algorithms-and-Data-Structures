# JavaScript Algorithm practice Questions and Solutions

## Useful Helper Methods

### Palindrone with .every() helper method

```
const palindrome = (str) => {
return str.split('').every((chr, i) => {
if (chr === str[str.length - i - 1]) return true;
});
};
```

### Palindrone with loops

```
const palindrome = (str) => {
let emp = '';
for (let c of str) {
emp = c + emp;
}
if (emp === str) return true;
};
```

### Reverce Int with loops trying to avoid .reverce() helper

```
const reverseInt = (n) => {
let jude = n.toString();
let empty = '';

for (let x of jude) {
empty = x + empty;
}

return parseInt(empty) * Math.sign(jude);
};
```

### Max Character in String

#### First start by looping the string and saving key and key value pair in Object

#### Loop tru Object and compare if Key value pair is greated then 0 then asign the key to maxC

```

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

```

#### chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

#### chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

#### we start by creating an empty chunk

#### then loop over the array

#### we check the last letter in the chunk ans save in variable

#### if chunk is empty of not full then we add element to chuk

#### if its full we create new chunk and add by pushing element to last.

```
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

```

<!-- Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/) -->
