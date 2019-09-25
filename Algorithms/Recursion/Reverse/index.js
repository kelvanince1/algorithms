function revIterative(str) {
    let result = '';

    for (let ele of str) {
        result = ele + result;
    }

    return result;
}

function revRecursive(str) {
    if (str === '') {
        return '';
    } else {
        return revRecursive(str.substr(1)) + str.charAt(0);
    }
}