// total sam

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  const pathDict = {
    left: "L",
    right: "R",
    parent: "U",
  };

  const graph = {};

  const dfs = (node) => {
    if (!node) return;
    if (!graph[node.val]) {
      graph[node.val] = {};
    }
    if (node.left) {
      graph[node.val].left = node.left.val;
      graph[node.left.val] = { parent: node.val };
      dfs(node.left);
    }
    if (node.right) {
      graph[node.val].right = node.right.val;
      graph[node.right.val] = { parent: node.val };
      dfs(node.right);
    }
  };
  dfs(root);

  const visit = new Set();

  const create_path = (cur, path) => {
    if (visit.has(cur)) return;
    if (cur === destValue) {
      return path;
    }
    visit.add(cur);
    res = "";
    ["left", "right", "parent"].forEach((item) => {
      if (graph[cur][item]) {
        res = res || create_path(graph[cur][item], path + pathDict[item]);
      }
    });
    return res;
  };

  return create_path(startValue, "");
};

console.log(
  getDirections(
    {
      val: 5,
      left: { val: 1, left: { val: 3 } },
      right: { val: 2, left: { val: 6 }, right: { val: 4 } },
    },
    3,
    6
  )
);
