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


// Alternative
function addTwoNums(list1, list2) {
    let reslist1 = '';
    let reslist2 = '';

    let list1Head = list1.head;
    let list2Head = list2.head;
    
    while (list1Head.data) {
        reslist1 += list1Head.data;

        if (!list1Head.next) {
            break;
        }

        list1Head = list1Head.next;
    }

    while (list2Head.data || list2Head.data === 0) {
        console.log('LIST HEAD DATA', list2Head.data);
        reslist2 += list2Head.data;

        if (!list2Head.next) {
            break;
        }

        list2Head = list2Head.next;
    }

    reslist1 = reslist1 * 1;
    reslist2 = reslist2 * 1;

    return reslist1 + reslist2;
}