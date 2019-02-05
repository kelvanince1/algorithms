function greet(term) {
    return function(name) {
        return function(last) {
            return term + ' ' + name + ' ' + last;
        }
    }
}

greet('Hi')('Tony')('Do');
