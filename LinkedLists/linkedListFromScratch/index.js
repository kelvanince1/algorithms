class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
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
        node.prev = last;

        this.length++;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;

        this.head.prev = node;
        this.head = node;
        this.length++;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const node = new Node(value);
        
        const prev = this.getAt(index - 1);
        const next = prev.next;
        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
        this.length++;
    }

    remove(index) {
        if (index > this.length) {
            return 'This index is not in the list';
        }

        const prev = this.getAt(index - 1);
        prev.next = prev.next.next;
        this.length--;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
    }
}