/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  const cur = [];

  nums.sort();

  const backtrack = (i) => {
    if (i === nums.length) {
      res.push([...cur]);
      return;
    }

    cur.push(nums[i]);
    backtrack(i + 1);
    cur.pop();
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
    backtrack(i + 1);
  };

  backtrack(0);

  return res;
};
