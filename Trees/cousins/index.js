var isCousins = function(root, x, y) {
  const xParent = parentVal(root, x, { val: null }, -1);
  const yParent = parentVal(root, y, { val: null }, -1);

  return xParent.depth === yParent.depth &&
         x.parent.node.val !== yParent.node.val;
};

function parentVal(root, val, parent, depth) {
  if (root === null) {
    return null;
  }

  if (root.val === val) {
    return { node: parent, depth };
  }

  return parentVal(root.left, val, root, depth + 1) ||
         parentVal(root.right, val, root, depth + 1);
}
