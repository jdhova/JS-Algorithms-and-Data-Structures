// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  //   getLast() {
  //     // let node1 = this.head;

  //     if (!this.head) {
  //       return null;
  //     }
  //     let node = this.head;
  //     while (node) {
  //       if (!node.next) {
  //         return node;
  //       }

  //       node = node.next;
  //     }
  //   }

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
  clear() {
    return (this.head = null);
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    if (this.head) {
      this.head = this.head.next;
    }
  }

  //   removeLast() {
  //     if (!this.head) {
  //       return null;
  //     }
  //     let node = this.head;

  //     while (node) {
  //       if (!node.next) {
  //         return (node = null);
  //       }
  //       if (node) {
  //         node.next = node;
  //       }
  //     }
  //   }
}

module.exports = { Node, LinkedList };
