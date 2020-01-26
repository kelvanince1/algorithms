// Given two Linked Lists, add all numbers within each list. 
// Assume the numbers are reversed.

function addTwoNumbers(l1, l2) {
    let node1 = l1.head;
    let node2 = l2.head;
    let result1 = '';
    let result2 = '';
    let finalResult;

    while (node1 || node2) {
        result1 += node1.value.toString();
        result2 += node2.value.toString();

        node1 = node1.next;
        node2 = node2.next;
    }

    result1 = parseInt(result1);
    result2 = parseInt(result2);

    finalResult = (result1 + result2).toString();

    return finalResult.split('').reverse();
}