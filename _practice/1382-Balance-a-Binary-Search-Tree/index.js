function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const nodes = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    nodes.push(node.val);
    inorder(node.right);
  };

  const bst = (l, r) => {
    if (l > r) return;
    const m = Math.floor((l + r) / 2);
    const left = bst(l, m - 1);
    const right = bst(m + 1, r);
    return new TreeNode(nodes[m], left, right);
  };

  inorder(root);

  return bst(0, nodes.length - 1);
};
