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
    if (!this.first) return;

    if (!this.first.next) {
      return (this.first = null);
    }

    let nodeOne = this.first;
    let nodeTwo = this.first.next;

    while (nodeTwo.next) {
      nodeOne = nodeTwo;
      nodeTwo = nodeTwo.next;
    }

    if (!nodeTwo.next) {
      nodeOne.next = null;
    }
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (!this.head) {
      this.head = new Node(data);
    } else {
      lastNode.next = new Node(data);
    }
  }

  insertLast(data) {
    if (!this.first) {
      return (this.first = new Node(data));
    }

    if (!this.first.next) {
      return (this.first.next = new Node(data));
    }

    let nodeOne = this.first;
    let nodeTwo = this.first.next;

    while (nodeTwo.next) {
      nodeOne = nodeTwo;
      nodeTwo = nodeOne;
    }
    if (!nodeTwo) {
      nodeOne.next = new Node(data);
    }
  }

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

  removeAt(index) {
    let nodeOne = this.head;
    let counter = 0;

    while (nodeOne) {
      if (nodeOne === index) {
        return (nodeOne = null);
      }
      counter++;
      nodeOne = nodeOne.next;
    }

    if (!nodeOne) return null;
  }
}

module.exports = { Node, LinkedList };
