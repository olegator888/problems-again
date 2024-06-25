var bstToGst = function (root) {
  const stack = [];
  let nodes_sum = 0;
  let node = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.right;
    }

    node = stack.pop();
    nodes_sum += node.val;
    node.val = nodes_sum;

    node = node.left;
  }

  return root;
};
