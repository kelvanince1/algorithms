function validateBst(tree) {
    let value = tree.left;
    
    while (value && value.left) {
        if (value.data > tree.data || value.left.data > value.data) {
            return false;
        }
        
        value = value.left;
    }

    value = tree.right;
    
     while (value && value.right) {
        if (value.data < tree.data || value.right.data < value.data) {
            return false;
        }
        
        value = value.right;
    }
    
    return true;
}