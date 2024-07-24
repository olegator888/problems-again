/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = {};
  for (const [crs, pre] of prerequisites) {
    if (!graph[crs]) graph[crs] = [];
    graph[crs].push(pre);
  }

  const visit = new Set();

  const dfs = (crs) => {
    if (visit.has(crs)) return false;
    if (!graph[crs] || graph[crs].length === 0) return true;

    visit.add(crs);

    for (const pre of graph[crs]) {
      if (!dfs(pre)) return false;
    }

    visit.delete(crs);
    graph[crs] = [];

    return true;
  };

  for (let crs = 0; crs < numCourses; crs++) {
    if (!dfs(crs)) return false;
  }

  return true;
};
