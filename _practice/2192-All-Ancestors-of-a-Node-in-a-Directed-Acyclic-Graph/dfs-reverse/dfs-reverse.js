// sam with a little bit of editorial

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const res = Array(n)
    .fill(null)
    .map(() => new Set());

  const reversed_graph = {};
  for (const [s, d] of edges) {
    if (!reversed_graph[d]) reversed_graph[d] = [];
    reversed_graph[d].push(s);
  }

  const visited = new Set();

  const dfs = (node) => {
    if (node in reversed_graph) {
      for (const nextNode of reversed_graph[node]) {
        if (!visited.has(nextNode)) {
          dfs(nextNode);
          visited.add(nextNode);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (i in reversed_graph) {
      dfs(i);
      res[i] = Array.from(visited).sort((a, b) => a - b);
      visited.clear();
    } else {
      res[i] = [];
    }
  }

  return res;
};
