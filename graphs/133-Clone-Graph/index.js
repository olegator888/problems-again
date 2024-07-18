// TOTAL SAM

// Definition for a _Node.
function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
  if (!node) return null;

  const graph = {};
  const visit = new Set();

  const dfs = (node) => {
    if (visit.has(node)) return;
    visit.add(node);
    if (!graph[node.val]) {
      graph[node.val] = new _Node(node.val);
    }
    const neighbors = [];
    for (const nei of node.neighbors) {
      if (!graph[nei.val]) {
        graph[nei.val] = new _Node(nei.val);
      }
      neighbors.push(graph[nei.val]);
      dfs(nei);
    }
    graph[node.val].neighbors = neighbors;
    return graph[node.val];
  };

  return dfs(node);
};
