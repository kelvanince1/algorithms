class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.bottom = null;
        this.length = 0;
    }

    enqueue(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.bottom = this.head;
            return;
        }

        // const node = new Node(value);

        // this.bottom.next = node;
        // this.bottom = node;

        const node = this.head;

        while (node.next) {
            if (!node.next) {
                node.next = new Node(value);
            }
        }
    }

    dequeue() {
        if (this.head) {
            this.head = this.head.next;
            return;
        }

        return null;
    }

    peek() {
        if (this.head) {
            return this.head;
        }
    }
}