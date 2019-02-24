// Given a binary tree, determine if it is a complete binary tree.

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

var isCompleteTree = function(root) {
    let nodes = [[root, 1]], i = 0
    while(i < nodes.length) {
        const node = nodes[i][0], v = nodes[i][1]
        if(node) {
            nodes.push([node.left, 2 * v])
            nodes.push([node.right, 2 * v + 1])
        }
        i += 1
    }
    return nodes[nodes.length - 1][1] === nodes.length
};
