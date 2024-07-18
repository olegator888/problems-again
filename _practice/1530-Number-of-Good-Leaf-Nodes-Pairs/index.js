var countPairs = function (root, distance) {
  let res = 0;
  const leafNodes = new Set();
  const visit = new Set();

  const getLeafNodes = (node) => {
    if (!node) return;
    if (!node.left && !node.right) {
      leafNodes.add(node);
    }
    if (node.left) {
      node.left.parent = node;
    }
    if (node.right) {
      node.right.parent = node;
    }
    getLeafNodes(node.left);
    getLeafNodes(node.right);
  };
  getLeafNodes(root);

  const getPairs = (node, steps) => {
    if (!node || steps > distance || visit.has(node)) return;
    if (steps > 0 && leafNodes.has(node)) {
      res += 1;
      return;
    }

    visit.add(node);
    getPairs(node.left, steps + 1);
    getPairs(node.right, steps + 1);
    getPairs(node.parent, steps + 1);
    visit.delete(node);
  };

  leafNodes.forEach((node) => getPairs(node, 0));

  return res / 2;
};
