// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(jude) {
    this.data.unshift(jude);
  }

  remove() {
    return this.data.pop();
  }
}
/// Quete Version 2

class Queue {
  constructor() {
    this.data = [];
    this.count = 0;
  }

  add(element) {
    this.data.unshift(element);
    console.log(element);
  }

  remove() {
    const rem = this.data.pop();
    console.log(rem);
    return rem;
  }

  checkEmpty() {
    if (!this.data.length) {
      console.log('Queue is Empty');
    } else {
      console.log('Queue has content');
    }
  }
}

const jude = new Queue();

jude.add(1000);
jude.add(2000);
jude.add(3000);
jude.checkEmpty();
jude.remove();
jude.remove();
jude.remove();
jude.checkEmpty();

module.exports = Queue;
