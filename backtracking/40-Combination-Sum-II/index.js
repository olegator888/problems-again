/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  const cur = [];

  candidates.sort();

  const backtrack = (i, total) => {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i === candidates.length || total > target) {
      return;
    }

    cur.push(candidates[i]);
    backtrack(i + 1, total + candidates[i]);
    cur.pop();
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    backtrack(i + 1, total);
  };

  backtrack(0, 0);
  return res;
};
