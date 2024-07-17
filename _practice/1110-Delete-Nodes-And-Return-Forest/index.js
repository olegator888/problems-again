var delNodes = function (root, to_delete) {
  if (!root) return [];
  to_delete = new Set(to_delete);
  const res = [];
  if (!to_delete.has(root.val)) {
    res.push(root);
  }

  const dfs = (node) => {
    if (!node) return;

    const oldLeft = node.left;
    const oldRight = node.right;
    if (oldLeft && to_delete.has(oldLeft.val)) {
      node.left = null;
    }
    if (oldRight && to_delete.has(oldRight.val)) {
      node.right = null;
    }
    if (to_delete.has(node.val)) {
      node.left = null;
      node.right = null;
      if (oldLeft && !to_delete.has(oldLeft.val)) {
        res.push(oldLeft);
      }
      if (oldRight && !to_delete.has(oldRight.val)) {
        res.push(oldRight);
      }
    }
    dfs(oldLeft);
    dfs(oldRight);
  };

  dfs(root);
  return res;
};
