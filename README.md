# JavaScript Algorithm practice Questions and Solutions

## Useful Helper Methods

### Reverce a String

```
const rev = (str) => {
  str.split().reverse().join('')
}

function(str){
  let rev = ''
  for(let chr of  str){
    rev = str + rev
    return rev
  }
}

```

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

### Chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]

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

### Anagrams check if ('RAIL! SAFETY!', 'fairy tales') --> True

```
const anagrams = (stringA, stringB) => {
  return cleanStr(stringA) === cleanStr(stringB);
};

const cleanStr = (str) => {
  return str.replace(/[ˆ\w]/g, '').toLowerCase().split('').sort().join('');
};
```

### Capitalize ('i love coding') --> 'I Love Coding'

```

const capitalize = (str) => {
  const words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
};
```

### Create steps with recussusion

```
#
##
###
####
#####

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
```

### Pyramid

```
    #
   ###
  #####
 #######
#########


const pyramid = (n, row = 0, level = '') => {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
};

```

### Find vowels with Regex

g helps find all vowels
i helps with case sensitive so we dont need.toLowerCase()

```
const str = 'hello my name is jude'
const vowels = (str) => {
  const vw = str.match(/[aeiou]/gi);
  return vw ? vw.length : 0;
};

vowels(str)

```

### Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,

```
function fib(n) {
const result = [0, 1];

for (let i = 2; i <= n; i++) {
const a = result[result.length - 1];
const b = result[result.length - 2];

    sum = a + b;

    result.push(sum);

}
console.log(result)
// return result[result.length - 1];
}

fib(10)

```

### Fibonacci return last digit recussive solution

```
const fib = (n) => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};

```

### Fib seq Memoization

```
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

  return slowfib(n - 1) + slowfib(n - 2);
};


slowfib(10)

```

### Queue

#### Queues are similar to JS arrays, but with Queue' s we transform Arrays to classes, Hide its methods and expose only the Add with .unshift() and Remove() with .pop()

#### With this new version of Arrays we can control how we arrange and maniulate data in data strctures. Queue ==> FIFO

```
class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

```

#### Queue Version 2 FIFO

```
class Queue{
  constructor(){
    this.data = []
    this.count = 0
  }

  add(element){
    this.data.unshift(element)
   console.log(element)
  }

   remove(){
     const rem = this.data.pop()
     console.log(rem)
     return rem
   }

   checkEmpty(){
     if(!this.data.length) {
       console.log('Queue is Empty')
     } else{
       console.log('Queue has content')
     }
   }

}

const jude = new Queue

jude.add(1000)
jude.add(2000)
jude.add(3000)
jude.checkEmpty()
jude.remove()
jude.remove()
jude.remove()
jude.checkEmpty()

```

#### Stack ==> LIFO or FILO.

```
class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

```

#### Stacks Version 2

```
class Stack {
  constructor() {
    this.data = [];
    this.count = 0;
  }

  add(element) {
    this.data.push(element);
    console.log(`${element} is added to Stack`);
  }

  remove() {
    if (this.data.length == 0) return undefined;
    const rem = this.data.pop();
    console.log(`${rem} is removed from stack`);
  }

  peek() {
    const peek = this.data[this.data.length - 1];
    console.log(`We have ${peek} at the top level of stack`);
    return peek;
  }

  checkEmpty() {
    if (!this.data.length) {
      console.log('Stack empty');
    } else {
      console.log('Stack full');
    }
  }

  printStack() {
    let str = '';
    for (let x = 0; x < this.data.length; x++) {
      // console.log(this.data[2])
      str += this.data[x] + ' ';
    }
    return str;
  }

  whichStack() {
    let str = '';
    for (let x = 0; x < this.data.length; x++) {
      console.log(this.data[3]);
    }
    return str;
  }

  isCleared() {
    this.data = [];
    this.count = 0;
    console.log('data cleared');
    return this.data;
  }
}

const jude = new Stack();

jude.add(1000);
jude.add(2000);
jude.add(3000);
jude.add(4000);
console.log(jude.printStack());
jude.checkEmpty();
jude.whichStack();

jude.remove();
jude.remove();

jude.peek();
jude.isCleared();
jude.checkEmpty();

```

### Linked List

#### Insert First

```
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

const nodeOne = new Node(7)
const nodeLast = new Node(20)
const jude = new LinkedList()
jude.head = nodeOne
jude.insertFirst(30)
console.log(jude)

```

#### Get Last

```
 getLast() {
    let node1 = this.head;
    if (!node1) {
      return;
    }
    while (node1) {
      if (!node1.next) {
        return node1;
      }
      if (node1) {
        node1 = node1.next;
      }
    }
  }

```

#### Remove First

```
removeFirst() {
    if (!this.head) {
      return null;
    }
    if (this.head) {
      this.head = this.head.next;
    }
  }

```

#### Remove Last

```
removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      return (this.head = null);
    }

    let nodeOne = this.head;
    let nodeTwo = this.head.next;

    while (nodeTwo.next) {
      nodeOne = nodeTwo;
      nodeTwo = nodeTwo.next;
    }

    if (!nodeTwo.next) {
      return (nodeOne.next = null);
    }
  }
}

```

#### Insert Last

```
 insertLast(data) {
    const lastNode = this.getLast();

    if (!this.head) {
      this.head = new Node(data);
    } else {
      lastNode.next = new Node(data);
    }
  }

```

#### Get at Index

```
  getAt(index) {
    let counter = 0;
    let nodeOne = this.head;

    while (nodeOne) {
      if (nodeOne === index) {
        return nodeOne;
      }
      counter++;
      nodeOne = nodeOne.next;
    }
    if (!nodeOne) {
      return null;
    }
  }

```

#### Generators and Inirators looping through Linklist with Generators

```
function *linkLists(){
  yield 'linklist-1'
  yield 'linklist-2'
  yield 'linklist-3'
  yield 'linklist-4'
  yield 'linklist-5'
  return console.log('link list completed')
}

const jude = linkLists()

const box = []

for(let val of jude){
  box.push(val)
}
console.log(box)

```

#### Find the Midpoint of a linkedList without knowing the size.

```
function midpoint(list) {
  let slowNode = list.head;
  let fastNode = list.head;

  while (list) {
    if (fastNode.next && fastNode.next.next) {
      fastNode = fastNode.next.next;
      slowNode = slowNode.next;
    }
    return slowNode;
  }
}

```

#### Return True if Circular Node and false if not

```
function circular(list) {
  let slowNode = list.head;
  let fastNode = list.head;

  while (fastNode.next && fastNode.next.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;

    if (slowNode === fastNode) {
      return true;
    }
  }
  return false;
}

```

<!-- Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/) -->
