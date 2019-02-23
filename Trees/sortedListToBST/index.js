//Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }
    
    const sorted = [];
   	let node = head;

    while (node) {
        sorted.push(node.val);
        node = node.next;
    }

    const convert = (left, right) => {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((right + left) / 2);
        const value = sorted[mid];
       	const n = new TreeNode(value);

        n.left = convert(left, mid - 1);
        n.right = convert(mid + 1, right);

        return n;
    }

    return convert(0, sorted.length - 1);
}
