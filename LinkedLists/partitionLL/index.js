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

  partition(x) {
    const greaterVals = [];
    const lesserVals = [];
    let node = this.head;

    while (node) {
      if (node.data < x) {
        lesserVals.push(node.data);
      } else if (node.data >= x) {
        greaterVals.push(node.data);
      }
      node = node.next;
    }
    const result = [...lesserVals, ...greaterVals];
    return result;
  }
}
