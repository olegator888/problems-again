// total sam

var subsets = function (nums) {
  const res = [];
  const cur = [];

  const backtrack = (i) => {
    if (i === nums.length) {
      res.push([...cur]);
      return;
    }

    cur.push(nums[i]);
    backtrack(i + 1);
    cur.pop();
    backtrack(i + 1);
  };

  backtrack(0);

  return res;
};
