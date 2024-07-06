var maxPathSum = function (root) {
  let res = root.val;

  const dfs = (node) => {
    if (!node) return 0;

    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    const cur = node.val + leftMax + rightMax;
    res = Math.max(res, cur);

    return node.val + Math.max(leftMax, rightMax);
  };

  dfs(root);

  return res;
};
