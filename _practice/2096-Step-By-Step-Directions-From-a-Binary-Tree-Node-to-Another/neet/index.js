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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  const dfs = (node, path, target) => {
    if (!node) return;
    if (node.val === target) {
      return path;
    }
    path.push("L");
    let res = dfs(node.left, path, target);
    if (res) return res;

    path.pop();
    path.push("R");
    res = dfs(node.right, path, target);
    if (res) return res;

    path.pop();
    return "";
  };

  const startPath = dfs(root, [], startValue);
  const destPath = dfs(root, [], destValue);
  let i = 0;
  while (
    i < Math.min(startPath.length, destPath.length) &&
    startPath[i] === destPath[i]
  ) {
    i++;
  }

  return [...Array(startPath.length - i).fill("U"), ...destPath.slice(i)].join(
    ""
  );
};
