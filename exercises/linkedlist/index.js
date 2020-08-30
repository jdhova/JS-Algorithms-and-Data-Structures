// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {}

class LinkedList {}

/// Linked List Add

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

class LinkedList {
  constructor() {
    this.head = null;
    // this.tail = null
    this.size = 0;
  }
  addFirst(data) {
    this.head = new Node(data, this.head);
  }
}

const jj = new LinkedList();
jj.addFirst(100);
jj.addFirst(200);

module.exports = { Node, LinkedList };
