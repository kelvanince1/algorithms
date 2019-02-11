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

  removeDuplicates() {
    if (!this.head) {
      return;
    }

    let node = this.head.next;
    let prev = this.head;
    const arr = [];

    while (node) {
      arr.push(prev.data);

      if (arr.includes(node.data)) {
        prev.next = prev.next.next || null;
        node = node.next;
      } else {
        prev = prev.next;
        node = node.next;
      }
    }
    return null;
  }
}
