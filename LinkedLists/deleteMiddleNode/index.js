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

  removeMiddlePoint() {
    const len = this.size();
    const middle = Math.floor(len / 2);

    let counter = 1;
    let prev = this.head;
    let node = this.head.next;

    while (node) {
      if (counter === middle) {
        prev.next = node.next;
      }
      counter++;
      prev = node;
      node = node.next;
    }
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
}
