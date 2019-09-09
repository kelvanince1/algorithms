class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top.value;
    }

    push(value) {
        if (!this.top) {
            this.top = new Node(value);
            this.bottom = this.top;
            return;
        }

        const node = new Node(value);
        node.next = this.top;
        this.top = node;

        this.length++;
    }

    pop() {
        const node = this.top;
        this.top = this.top.next;

        this.length--;

        return node;
    }
}