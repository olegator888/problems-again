// total sam

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return [0, true];

    const [lDepth, lBool] = dfs(node.left);
    const [rDepth, rBool] = dfs(node.right);

    return [
      1 + Math.max(lDepth, rDepth),
      Math.abs(lDepth - rDepth) < 2 && lBool && rBool,
    ];
  };

  return dfs(root)[1];
};
