/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (const [crs, pre] of prerequisites) {
    graph[crs].push(pre);
  }

  const visit = new Set();
  const path = new Set();
  const order = [];

  const top_sort = (node) => {
    if (path.has(node)) return false;
    if (visit.has(node)) return true;
    visit.add(node);
    path.add(node);
    for (const child of graph[node]) {
      if (!top_sort(child)) {
        return false;
      }
    }
    path.delete(node);
    order.push(node);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!top_sort(i)) {
      return [];
    }
  }

  return order;
};
