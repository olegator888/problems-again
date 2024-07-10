/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const cur = [];

  const dfs = (i, total) => {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }
    cur.push(candidates[i]);
    dfs(i, total + candidates[i]);
    cur.pop();
    dfs(i + 1, total);
  };

  dfs(0, 0);

  return res;
};
