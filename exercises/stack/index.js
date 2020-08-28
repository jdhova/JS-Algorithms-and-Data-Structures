// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

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

// version 2 stack

class Stack {
  constructor() {
    this.data = [];
    this.couny = 0;
  }
  // add element to stack
  add(element) {
    this.data.push(element);
    console.log(`${element} is added to Stack`);
  }

  // remove element from stack
  remove() {
    if (this.data.length == 0) return undefined;
    const rem = this.data.pop();
    console.log(`${rem} is removed from stack`);
  }
  // peek at the top element

  peek() {
    const peek = this.data[this.data.length - 1];
    console.log(`We have ${peek} at the top level of stack`);
    return peek;
  }
  // check if stack is empty
  checkEmpty() {
    if (!this.data.length) {
      console.log('Stack empty');
    } else {
      console.log('Stack full');
    }
  }
  // print the stack content
  printStack() {
    let str = '';
    for (let x = 0; x < this.data.length; x++) {
      // console.log(this.data[2])
      str += this.data[x] + ' ';
    }
    return str;
  }
  // print the number at level 3
//   whichStack() {
//     let str = '';
//     for (let x = 0; x < this.data.length; x++) {
//       console.log(this.data[3]);
//     }
//     return str;
//   }
//   // clear stack
//   isCleared() {
//     this.data = [];
//     this.count = 0;
//     console.log('data cleared');
//     return this.data;
//   }
// }

// const jude = new Stack();

// jude.add(1000);
// jude.add(2000);
// jude.add(3000);
// jude.add(4000);
// console.log(jude.printStack());
// jude.checkEmpty();
// jude.whichStack();
// // jude.isCleared();
// jude.checkEmpty();

// jude.remove();
// jude.remove();

// jude.peek();
// jude.isCleared();
module.exports = Stack;
