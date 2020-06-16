function dfsInOrder(queue, list) {
    return traverse(this.root, []);
}

function traverse(node, list) {
    if (node.left) {
        traverse(node.left, list);
    }
    
    list.push(node.data);
    
    if (node.right) {
        traverse(node.right, list);
    }
    
    list.push(node.data);
    
    return list;
}