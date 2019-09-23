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
}