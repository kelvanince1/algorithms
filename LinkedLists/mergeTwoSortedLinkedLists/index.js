// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function combineLinkedLists(l1, l2) {
    let sortedList = new LinkedList();
    while(l1 && l2) {

        if (l1.value && l1.value <= l2.value) {
            sortedList.insertLast(l1.value);
            l1 = l1.next;
        } else {
            sortedList.insertLast(l2.value);
            l2 = l2.next;
        }
    }

    if (l1) sortedList.insertLast(l1.value);
    if (l2) sortedList.insertLast(l2.value);
    
    return sortedList;
}