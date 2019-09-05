class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    append(value) {
        if (!this.head) {
            this.head.value = value;
        }

        const node = new Node(value);
        node.next = {
            value: value,
            next: null
        }

        this.tail = node.next;
        this.length++;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;

        this.head = node;
        this.length++;
    }
}