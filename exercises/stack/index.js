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

/// Another version of Stacks
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count];
    console.log(` ${element} is at level ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }

  // remove(){
  //   if (this.count == 0) return undefined

  //   let del= this.items[this.count -1 ]
  //   this.count -= 1

  //     console.log(del)

  //     return del
  // }

  // pop(){
  //   if(this.count === 0 ) return undefined

  //   let delItem = this.items[this.count -1]
  //   this.count -=1

  //   console.log(delItem)
  //   return delItem

  // }

  pop() {
    if (this.count == 0) return undefined;
    let nn = this.items.pop();
    console.log(nn);
    return nn;
  }

  // peek(){
  //   if(this.count == 0)  return undefined
  //   let bb = this.items[this.items.length - 1]
  //   console.log(bb)
  //   return bb
  // }

  peek() {
    let boy = this.items[this.count - 1];
  }
}

const jude = new Stack();

jude.push('jude');
jude.push(200);
jude.push(300);

jude.peek();

// jude.pop()
// jude.pop()

module.exports = Stack;
