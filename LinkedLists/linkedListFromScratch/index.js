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


    getAt(index) {
        let node = this.head;
        let counter = 0;

        while(counter !== index) {
            node = node.next;
            counter++;
        }

        return node;
    }

    append(value) {
        if (!this.head) {
            this.head.value = value;
        }

        let last = this.getLast();

        const node = new Node(value);
        last.next = node;

        this.length++;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;

        this.head = node;
        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const node = new Node(value);
        
        let prev = this.getAt(index - 1);
        const next = prev.next;
        prev.next = node;
        node.next = next;
        this.length++;
    }
}