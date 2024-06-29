/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const res = Array(n)
    .fill(null)
    .map(() => []);

  const graph = {};
  for (const [s, d] of edges) {
    if (!graph[s]) graph[s] = [];
    graph[s].push(d);
  }

  const dfs = (ancestor, current) => {
    if (!graph[current]) return;

    for (const nextNode of graph[current]) {
      if (res[nextNode][res[nextNode].length - 1] === ancestor) {
        continue;
      }

      res[nextNode].push(ancestor);
      dfs(ancestor, nextNode);
    }
  };

  for (let i = 0; i < n; i++) {
    dfs(i, i);
  }

  return res;
};
