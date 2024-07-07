var serialize = function (root) {
  if (!root) return "";
  const nodes = [];
  const q = [root];

  while (q.length > 0) {
    const node = q.shift();
    if (node) {
      nodes.push(node.val);
      q.push(node.left);
      q.push(node.right);
    } else {
      nodes.push("null");
    }
  }

  return nodes.join(",");
};

var deserialize = function (data) {
  if (!data) return null;

  const nodes = data.split(",");
  const root = new TreeNode(nodes[0]);
  let i = 1;
  const q = [root];

  while (q.length > 0) {
    const node = q.shift();

    if (nodes[i] !== "null") {
      node.left = new TreeNode(nodes[i]);
      q.push(node.left);
    }
    i += 1;

    if (nodes[i] !== "null") {
      node.right = new TreeNode(nodes[i]);
      q.push(node.right);
    }
    i += 1;
  }

  return root;
};
