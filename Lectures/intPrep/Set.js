class Set {
    constructor() {
        this.values = [];
        this.counter = 0;
    }

    hasValues() {
        return this.counter;
    }

    add(value) {
        if (!this.values.length) {
            this.values.push(value);
            return this.values;
        }

        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] === value) {
                return this.values;
            }
        }

        this.values.push(value);

        return this.values;
    }

    contains(value) {
        if (!value) {
            return false;
        }

        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i] === value) {
                return true;
            }
        }

        return false;
    }

    delete(value) {
        if (!value) {
            return false;
        }

        return this.values.filter(val => {
            return val !== value;
        });
    }
}

module.exports = { Set };