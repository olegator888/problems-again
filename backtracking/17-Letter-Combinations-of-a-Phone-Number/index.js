// sam

const mp = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  const res = [];

  const backtrack = (i, curStr) => {
    if (i === digits.length) {
      res.push(curStr);
      return;
    }
    for (const d of mp[digits[i]]) {
      backtrack(i + 1, curStr + d);
    }
  };

  if (digits) backtrack(0, "");
  return res;
};
