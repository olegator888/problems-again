var numDecodings = function (s) {
  const cache = {};

  const count = (i) => {
    if (cache[i]) return cache[i];
    if (i === s.length) return 1;
    if (i > s.length || s[i] === "0") return 0;
    let res = count(i + 1);
    const n = Number(s.slice(i, i + 2));
    if (i + 1 < s.length && n >= 1 && n <= 26) {
      res += count(i + 2);
    }
    cache[i] = res;
    return res;
  };

  return count(0);
};
