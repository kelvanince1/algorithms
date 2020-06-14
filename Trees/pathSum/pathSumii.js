// Given a binary tree and a sum, find all root-to-leaf paths
//  where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

function pathSum(tree, target) {
    const result = [];
    
     function helper(node, counter, holder) {
         if (!node) return;
         counter += node.data;
         holder.push(node.data);
         if (!node.left && !node.right) {
             if (counter === target) {
                 result.push([...holder]);
             }
         } else {
             helper(node.left, counter, [...holder]);
             helper(node.right, counter, [...holder]);
         }
     }
    
    helper(tree, 0, []);
    return result;
}