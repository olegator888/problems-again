const isPali = (s, l, r) => {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const part = [];

  const backtrack = (i) => {
    if (i >= s.length) {
      res.push([...part]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPali(s, i, j)) {
        part.push(s.slice(i, j + 1));
        backtrack(j + 1);
        part.pop();
      }
    }
  };

  backtrack(0);
  return res;
};

console.log(partition("aab"));
