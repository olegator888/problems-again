// total sam

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const nodesRelations = {};
  const children = new Set();

  for (const [parent, child, isLeft] of descriptions) {
    children.add(child);
    const parentNode = nodesRelations[parent] || new TreeNode(parent);
    nodesRelations[parent] = parentNode;
    const childNode = nodesRelations[child] || new TreeNode(child);
    nodesRelations[child] = childNode;
    parentNode[isLeft ? "left" : "right"] = childNode;
  }

  for (const [parent] of descriptions) {
    if (!children.has(parent)) {
      return nodesRelations[parent];
    }
  }
};
