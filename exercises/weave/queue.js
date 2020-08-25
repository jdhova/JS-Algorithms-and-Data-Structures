// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

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

module.exports = Queue;
