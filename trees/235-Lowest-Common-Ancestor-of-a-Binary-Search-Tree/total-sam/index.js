// total sam

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res = root;
  let maxDepth = 0;

  const dfs = (node, depth) => {
    if (!node) {
      return [false, false];
    }

    const left = dfs(node.left, depth + 1);
    const right = dfs(node.right, depth + 1);
    const item = [
      node.val === p.val || left[0] || right[0],
      node.val === q.val || left[1] || right[1],
    ];
    if (item[0] && item[1] && depth > maxDepth) {
      res = node;
      maxDepth = depth;
    }
    return item;
  };

  dfs(root, 1);

  return res;
};
