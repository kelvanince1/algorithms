// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

var lowestCommonAncestor = function(root, p, q) {
    while (root !== null) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        } else {
            return root;
        }
    }
    return root;
};
