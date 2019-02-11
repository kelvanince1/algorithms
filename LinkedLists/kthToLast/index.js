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

  kthToLast(index) {
    if (!this.head) {
      return;
    }

    const len = this.size();
    const result = len - index;
    let counter = 1;
    let node = this.head;

    while (node) {
      if (counter === result) {
        return node.data;
      }
      node = node.next;
      counter++;
    }
    return null;
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
