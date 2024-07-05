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
  const dfs = (node) => {
    if (node.val < p.val && node.val < q.val) {
      return dfs(node.right);
    }
    if (node.val > p.val && node.val > q.val) {
      return dfs(node.left);
    }

    return node;
  };

  return dfs(root);
};
