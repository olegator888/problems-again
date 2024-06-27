// total sam

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const cnt = {};
  for (const [s, d] of edges) {
    cnt[s] = (cnt[s] || 0) + 1;
    cnt[d] = (cnt[d] || 0) + 1;
    if (cnt[s] === edges.length) return s;
    if (cnt[d] === edges.length) return d;
  }
};
