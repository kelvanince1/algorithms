class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;

            while (true) {
                if (value < current.value) {
                    // Left
                    if (!current.left) {
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                } else {
                    // Right
                    if (!current.right) {
                        current.right = node;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;

        if (current.value === value) {
            return current;
        }

        while(current) {
            if (value < current) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } 
        }

        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        let parent = null;

        while (current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else if (value === current.value) {
                if (current.right === null) {
                    if (parent === null) {
                        this.root = current.left;
                    } else {
                        if (current.value < parent.value) {
                            parent.left = current.left;
                        } else if (current.value > parent.value) {
                            parent.right = current.left;
                        }
                    }
                } else if (current.right.left === null) {
                    if (parent === null) {
                        this.root = current.left;
                    } else {
                        current.right.left = current.left;

                        if (current.value < parent.value) {
                            parent.left = current.right;
                        } else if (current.value > parent.value) {
                            parent.right = current.right;
                        }
                    }
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                      leftmostParent = leftmost;
                      leftmost = leftmost.left;
                    }
                    
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;
          
                    if(parentNode === null) {
                      this.root = leftmost;
                    } else {
                      if(currentNode.value < parentNode.value) {
                        parentNode.left = leftmost;
                      } else if(currentNode.value > parentNode.value) {
                        parentNode.right = leftmost;
                      }
                    }
                  }
                  return true;
            }
        }
    }
}