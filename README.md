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
       console.log('FIFO Queue is Empty')
     } else{
       console.log('FIFO Queue has content')
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

// Build nice Visial Interface of Quete FIFO and LIFO with react.js

#### Stack ==> LIFO or FILO.

```
class Queue{
  constructor(){
    this.data = []
  }

  addLifo(element){
    this.data.push(element)
    console.log('adding',element)
  }

  removeLifo(){
    const rem = this.data.pop()
    console.log('removing',rem)
  }

  checkEmpty(){
    if(!this.data.length){
      console.log('Lifo queue is empty')
    } else {
      console.log('Lifo queue has content')
    }
  }

  peek(){
    if(!this.data.length){
      console.log('Lifo queue is empty')
    } else {
      const last = this.data[this.data.length-1]
      const first = this.data[0]
      console.log('last element',last)
      console.log('first element',first)
      return last
    }
  }
}

const jude = new Queue

jude.addLifo(100)
jude.addLifo(200)
jude.addLifo(300)
jude.addLifo(400)
jude.peek()
jude.checkEmpty()
jude.removeLifo()
jude.removeLifo()
jude.removeLifo()
jude.removeLifo()
jude.checkEmpty()

```

### Stack and Queue combined

```

class Queue {
  constructor() {
    this.data = []
  }


  add(element){
    this.data.unshift(element)
    console.log(`adding ${element} to the data structure`)
    console.log(this.data)
  }

    printSpecificStack(){
  for(let n in this.data){
   return this.data[this.data.length -1]
  }
}

printAllStack(){
  for(let n of this.data){
    console.log(`list of all elements in Queue ${n}`)
  }
}

  remove(){
    if(!this.data.length) {
       console.log(`There are ${this.data.length} element in queue data structure`)

    } else {
         const rem = this.data.pop(this.data.length -1)
    console.log(`removing ${rem} from the data structure as queue`)
     console.log(this.data)
    }

  }

    move(){
      if(!this.data.length){
         console.log(`There are ${this.data.length}  elemts in stack data structure`)
      } else {
    const rem = this.data.shift(this.data.length -1)
    console.log(`removing ${rem} from the data structure as stack`)
     console.log(this.data)
      }

  }


  peek(){

  if(this.data.length > 0){
    const first = this.data[this.data.length -1]
      const last = this.data[0]
     console.log(`peeking at ${first} from the Queye data structure`)

      console.log(`peeking at ${last} from the Stack data structure`)

}  else {
  console.log(`There are ${this.data.length} elements in data structure`)
}

  }

  isEmpty(){
    if(!this.data.length){
      console.log(`There are ${this.data.length}  data in structure`)
    }
  }

}

const jude = new Queue()

jude.add(100)
jude.add(200)
jude.add(300)
jude.add(400)

console.log(jude.printSpecificStack())
 jude.printAllStack()
jude.peek()

jude.remove()

jude.move()
jude.move()
jude.move()
jude.move()

jude.remove()
jude.peek()
jude.isEmpty()

```

### Linked List

```
class Node{
  constructor(data,next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList{
  constructor(){
    this.head = null
    // this.count = 0
  }

  insertFirst(data){
    this.head = new Node(data,this.head)
  }

  insertLast(data) {
    let newNode = new Node(data)
    let current = this.head

    if(!current) {
      current = newNode
    } else {
      while(current.next) {
        current = current.next
      }
      current.next = newNode
    }

  }

getFirst(){
  if(!this.head){
    return
  } else {
    return this.head.data
  }
}

getLast(){
  if(!this.head){
    return
  } else {
    while(this.head.next) {
      this.head = this.head.next
    }
    return this.head.data
  }
}
  printList(){
    let current = this.head
    while(current){
      console.log(current.data)
      current = current.next
    }
  }

  clearAll(){
    this.head = null
  }

removeFirst(){
 if(!this.head) {
   return
 } else {
   this.head = this.head.next
 }
}

removeLast(){


  if(!this.head){
    return
  }

  if(!this.head.next) {
    return (this.head = null)
  }

   let nodeOne = this.head
   let nodeTwo = this.head.next

while(nodeTwo.next) {
  nodeOne = nodeTwo
  nodeTwo = nodeTwo.next
}

if(!nodeTwo.next){
   return (nodeOne.next = null)
}
 }


}

const jude = new LinkedList()

jude.insertFirst(100)
jude.insertFirst(200)
jude.insertFirst(300)
jude.insertFirst(400)
jude.insertLast(700)
jude.removeFirst()

jude.printList()
console.log('first',jude.getFirst())
console.log('last',jude.getLast())
//console.log(jude)

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

### Doubly linked list

<!-- Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/) -->
