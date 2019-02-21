var increasingBST = function(root) {
    const arr = [];

    function traverse(node) {
        if (node === null) {
            return null;
        }

        traverse(node.left);
        arr.push(node.val);
        traverse(node.right);
    }

    traverse(root);

    let copiedTree = new TreeNode(0);
    let current = copiedTree;

    for (let i = 0; i < arr.length; i++) {
        current.right = new TreeNode(arr[i]);
        current = current.right;
    }
    return copiedTree.right;
}
