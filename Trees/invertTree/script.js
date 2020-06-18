// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1


function invertTree(tree) {
    let x = tree.right;
    let y = tree.left;

    tree.right = y;
    tree.left = x;
    
    function swapNodes(root) {
        let left = root.left;
        let right = root.right;
        
        root.right = left;
        root.left = right;

        if (root.left) {
            swapNodes(root.left);
        }
        
        if (root.right) {
            swapNodes(root.right);
        }
    }
    
    swapNodes(tree.left);
    swapNodes(tree.right);
    
    return tree;
}