// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

function binaryTreePaths(root) {
    const result = [];
    
    if (!root) return result;
    
    function traverseTree(root, str) {
        if (!root.left && !root.right) {
            result.push(str + root.value);
            return;
        }
        
        if (root.left) {
            traverseTree(root.left, `${str} ${root.value} -> `);
        }
        
        if (root.right) {
            traverseTree(root.right, `${str} ${root.value} -> `);
        }
    }
    
    traverseTree(root, '');
    return result;
}