// total sam

var rightSideView = function (root) {
  /**
   * bfs
   * most right node of each level
   */

  if (!root) return [];

  const res = [];
  const q = [root];

  while (q.length > 0) {
    let last_node = null;
    const len = q.length;

    for (let i = 0; i < len; i++) {
      const node = q.shift();
      last_node = node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    res.push(last_node);
  }

  return res;
};
