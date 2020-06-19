function mergeLists(lists) {
    const sortedList = new LinkedList();
    let counter = 0;
    let max;
    let iterator;
    const nodes = [...lists];
    

    for (let ele = 0; ele < lists.length; ele++) {
        if (lists[ele].getLength() >= counter) {
            max = lists[ele].getLength();
            iterator = ele;
        }
        nodes[ele] = nodes[ele].head;
    }

    let t = 0;
    while (t <= max) {
        let curr = Infinity;
        let nodeToIncrement = iterator;

        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].data < curr) {
                curr = nodes[i].data;
                nodeToIncrement = i;
            }
        }

        sortedList.insertLast(curr);

        if (!nodes[nodeToIncrement].next) {
            nodes[nodeToIncrement].next = new Node(Infinity);
        } else {
            nodes[nodeToIncrement] = nodes[nodeToIncrement].next;
        }

        t++;
    }
    
    return sortedList;
}