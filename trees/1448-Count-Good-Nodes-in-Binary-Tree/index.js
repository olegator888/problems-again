// total sam

var goodNodes = function (root) {
  const dfs = (node, curMax) => {
    if (!node) return 0;
    const newMax = Math.max(curMax, node.val);
    return (
      (node.val >= curMax ? 1 : 0) +
      dfs(node.right, newMax) +
      dfs(node.left, newMax)
    );
  };

  return dfs(root, root.val);
};
