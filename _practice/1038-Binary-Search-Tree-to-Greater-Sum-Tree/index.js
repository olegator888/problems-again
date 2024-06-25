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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  const nodes = Array(101).fill(false);

  const collect_nodes = (node) => {
    if (!node) return;
    nodes[node.val] = true;
    collect_nodes(node.left);
    collect_nodes(node.right);
  };

  collect_nodes(root);

  const postfix = Array(101).fill(0);
  let total = 0;
  for (let i = nodes.length - 1; i > -1; i--) {
    postfix[i] = total;
    if (nodes[i]) {
      total += i;
    }
  }

  const redefine_nodes = (node) => {
    if (!node) return;

    node.val += postfix[node.val];
    redefine_nodes(node.left);
    redefine_nodes(node.right);
  };

  redefine_nodes(root);

  return root;
};
