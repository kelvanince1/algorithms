// Given a binary tree and a sum, determine if the tree has a root-to-leaf path 
// such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

function pathSum(tree, target) {
    let result = false;
    
     function helper(node, counter) {
         if (!node) return;
         counter += node.data;
         console.log('counter', counter);
         if (!node.left && !node.right) {
             if (counter === target) {
                 result = true;
                 return;
             }
         } else {
             helper(node.left, counter);
             helper(node.right, counter);
         }
     }
    
    helper(tree, 0);
    return result;
}