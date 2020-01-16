class Stack {
    constructor() {
        this.data =[]
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        if (!this.data.length) {
            return 'Nothing in the stack';
        }

        return this.data.pop();
    }

    peek() {
        if (!this.data.length) {
            return 'Nothing in the stack';
        }
        
        return this.data[this.data.length - 1];
    }
}