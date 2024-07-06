// TOTAL SAM

var isValidBST = function (root) {
  const dfs = (node, left, right) => {
    if (!node) return true;

    if (!(node.val > left && node.val < right)) return false;

    return (
      true &&
      dfs(node.left, left, Math.min(right, node.val)) &&
      dfs(node.right, Math.max(left, node.val), right)
    );
  };

  return dfs(root, -Infinity, Infinity);
};
