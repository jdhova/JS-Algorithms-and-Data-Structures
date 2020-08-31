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
  insertLast(data) {
    if (!this.head) {
      this.head = data;
    }

    if (!this.head.next) {
      this.head.next = data;
    }

    let nodeOne = this.head;
    let nodeTwo = this.head.next;
    while (nodeTwo.next) {
      nodeOne = nodeTwo;
      nodeTwo = nodeTwo.next;
    }

    if (!nodeTwo.next) {
      nodeOne.next = data;
    }
  }
}

module.exports = { Node, LinkedList };
