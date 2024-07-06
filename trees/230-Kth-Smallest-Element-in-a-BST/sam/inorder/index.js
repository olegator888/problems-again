var kthSmallest = function (root, k) {
  const nodes = [];
  const dfs = (node) => {
    if (!node || nodes.length === k) return;

    dfs(node.left);
    nodes.push(node.val);
    dfs(node.right);
  };

  dfs(root);

  return nodes[k - 1];
};
