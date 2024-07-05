// total sam

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const res = [];
  const q = [root];

  while (q.length > 0) {
    const len = q.length;
    const level = [];
    for (let _ = 0; _ < len; _++) {
      const node = q.shift();
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(level);
  }

  return res;
};
