/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const oldToNew = new Map();

  const dfs = (node) => {
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    const copyNode = new _Node(node.val);
    oldToNew.set(node, copyNode);
    for (const nei of node.neighbors) {
      copyNode.neighbors.push(dfs(nei));
    }
    return copyNode;
  };

  return dfs(node);
};
