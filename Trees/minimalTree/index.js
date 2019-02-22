// Given a sorted array with unique numbers, write an algorithm converting the list to a BST.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

convert(data) {
  if (typeof(data) === 'object') {
    const mid = Math.floor((data.length / 2));
    const parent = new Node(mid);
  }

  for (let ele of data) {
    if (ele < parent.data && parent.left) {
      parent.left.convert(ele);
    } else if (ele < parent.data) {
      parent.left = new Node(ele);
    } else if (ele > parent.data && parent.right) {
      parent.right.convert(ele);
    } else if (ele > parent.data) {
      parent.right = new Node(ele);
    }
  }
}
