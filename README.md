# JavaScript Algorithm practice Questions and Solutions

## Useful Helper Methods

### Reverce a String

```

const rev = (str) => {
  str.split().reverse().join('')
}

const reverse = (str) => {
  let rev = '';
  for (let c of str) {
    rev = c + rev;
  }

  return rev;
};

reverse('juud')


const names = 'juud grace'

let rev = ''

for(let n of names) {
  rev = n + rev
    console.log(rev)
}
```

### Palindrone with loops

```
const pal = (str) =>  {
  let rev =  ''
for(let n of str) {
  rev = n + rev
}
if(rev === str) {
  return true
} else {
  return false
 }
}

pal('juud') // false
pal('juuj') // true

```

### Palindrone Checker

```
let c = 'ruur'

let d = c.split('').reverse().join('')

function pal() {
if(c === d) {
  console.log('true',d)
  return true
} else{
  console.log('false',c,d)
}
}
pal(c,d)

```

### Reverce Int with loops trying to avoid .reverce() helper

```
const reverseInt = (n) => {
let filled = n.toString();
let empty = '';

for (let x of filled) {
empty = x + empty;
}

return parseInt(empty) * Math.sign(filled);
};

```

### Reverse an Integer

```

const n = 300
let x = n.toString()
let z = x.split('').reverse().join('')
let c = (parseInt(z))* Math.sign(n)

console.log(c)

const revin =(n) =>{
 let z =  n.toString().split('').reverse().join('')
 let c = (parseInt(z))* Math.sign(n)
 return c
}

revin(-432)

```

### Max Character in String

```
 str = 'hello thereeee'

 function charM (str) {
   const filled = {}
   let max = 0
   let maxChar = ''

   for (let x of str) {
     if(filled[x]) {
       filled[x]++
     } else {
       filled[x] = 1
     }
   }

    console.log(filled)
 for (let x in filled) {
   if(filled[x] > max){
     maxChar = x
     max = filled[x]
   }
 }
return maxChar
// return max
 }

 charM(str)

```

### Anagrams check if ('Stressed Elbows', 'Desserts Below') --> True

```
const str1 = 'Stressed Elbows'
const str2 = 'Desserts Below'

const cstr1 = str1.replace(/\s/g, '').split('')
const cstr2 = str2.replace(/\s/g, '').split('')


const anag = (cstr1,cstr2) => {

  if(cstr1.length !== cstr2.length) {
      console.log(cstr2.join(''),cstr1.join(''))
    return false
  }

  for(let n of cstr1) {
    if( cstr2[n] !== cstr1[n] ) {
        console.log(cstr2.join(''),cstr1.join(''))
      return false
    }
  }
  console.log(cstr2.join(''),cstr1.join(''))
  return true
}

anag(cstr1,cstr2)
```

### Capitalize ('juud don grace') --> 'Juud Don Grace'

```
const name = 'juud don grace'
 const names = name.split(' ')

names.forEach((a) => {
 console.log( (a.slice(0,1).toUpperCase() + a.slice(1))
}))

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

### FizzBuzz with Recussion

```
function FizzBuzz(n) {
 if( n === 0) {
   return
 }
 if(n% 3 === 0) {
   console.log('fizz')
 } else {
   if (n % 5=== 0) {
     console.log('buzz')
   } else {
     if(n % 15 === 0){
       console.log('fb')
     } else {
       console.log(n)
     }
   }
 }
FizzBuzz (n-1)
}

FizzBuzz(20)

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
function fib(n){
  if(n <= 1)
    return 1

  return fib(n-1) + fib(n-2)
}
fib(4);

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
    //this.count = 0
  }

  add(element){
    this.data.unshift(element)
   console.log('Adding',element)
  }

   remove(){
     const rem = this.data.pop()
     console.log('Removing',rem)
     return rem
   }

   checkEmpty(){
     if(!this.data.length) {
       console.log('Queue is Empty')
     } else{
       console.log('Queue has content')
     }
   }

peek(){
  if(!this.data.length){
    console.log('queue is empty')
    return
  } else {
    const first = this.data[this.data.length -1]
    const last = this.data[0]
    console.log('first data added', first)
    console.log('last data added', last)
    return last
  }
}

}

const jude = new Queue

jude.add(1000)
jude.add(2000)
jude.add(3000)
jude.peek()
jude.checkEmpty()
jude.remove()
jude.remove()
jude.remove()
jude.checkEmpty()
jude.peek()

```

// Build Visial Interface of Quete FIFO and LIFO with react.js

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
