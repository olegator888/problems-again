/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  tickets.sort();

  const graph = {};

  for (const [src, dst] of tickets) {
    if (!graph[src]) graph[src] = [];
    graph[src].push(dst);
  }

  const res = ["JFK"];

  const dfs = (node) => {
    if (res.length === tickets.length + 1) return true;
    if (!graph[node]) return false;

    const temp = [...graph[node]];
    for (let i = 0; i < temp.length; i++) {
      const nei = temp[i];
      res.push(nei);
      graph[node].splice(i, 1);

      if (dfs(nei)) return true;

      res.pop();
      graph[node].splice(i, 0, nei);
    }

    return false;
  };

  dfs("JFK");

  return res;
};
