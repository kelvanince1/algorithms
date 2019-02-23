// Design an algorithm that finds the 'next' node of a given node in a binary search tree. Use in-order (Left, node, right).

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }

  nextNode(data) {
  	const node = this.contains(data);

  	if (!node) {
  		return null;
      }

  	if (node.left) {
  		return node.left
      } else if (node.right) {
  		return node.right
      } else {
  		return node;
    }
  }
}
