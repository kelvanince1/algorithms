// Merge k sorted linked lists and return it as one sorted list. 
// Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6


function mergeLists(l1,l2,l3) {
    const sortedList = new LinkedList();

    let node1 = l1.head;
    let node2 = l2.head;
    let node3 = l3.head;
    
    while (node3) {
        if (!node1) {
            node1 = new Node(Infinity);
        } 
        if (!node2) {
            node2 = new Node(Infinity);
        }
        if (!node3) {
            node3 = new Node(Infinity);
        }
        
        if (node1.data <= node2.data && node1.data <= node3.data) {
            sortedList.insertLast(node1.data);
            node1 = node1.next;
        } else if (node2.data <= node1.data && node2.data <= node3.data) {
            sortedList.insertLast(node2.data);
            node2 = node2.next;
        } else if (node3.data <= node1.data && node3.data <= node2.data) {
            sortedList.insertLast(node3.data);
            node3 = node3.next;
        }
    }
    
    return sortedList;
}