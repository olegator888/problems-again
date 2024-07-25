/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  /**
   we have to use bfs here
   of all the keys we need to find key that has no edges to it - it will be our start
   from there start traversing
   */

  const order = [];

  const graph = {};

  for (const [crs, pre] of prerequisites) {
    if (!graph[crs]) graph[crs] = [];
    graph[crs].push(pre);
  }

  let start = null;
  for (const pre in graph) {
    if (graph[pre].length === 0) {
      start = pre;
      break;
    }
  }

  const q = [3];
  const visit = new Set();

  while (q.length > 0) {
    const node = q.shift();

    if (visit.has(node)) return [];

    order.push(node);
    visit.add(node);

    if (graph[node]) {
      for (const crs of graph[node]) {
        if (!q.includes(crs)) {
          q.push(crs);
        }
      }
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (!order.includes(i)) {
      order.push(i);
    }
  }

  return order.reverse();
};

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
