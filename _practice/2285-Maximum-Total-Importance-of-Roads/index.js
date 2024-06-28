// total sam

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  let res = 0;

  const edges_cnt = {};
  for (const [s, d] of roads) {
    edges_cnt[s] = (edges_cnt[s] || 0) + 1;
    edges_cnt[d] = (edges_cnt[d] || 0) + 1;
  }

  const sortedKeys = Object.keys(edges_cnt).sort(
    (a, b) => edges_cnt[b] - edges_cnt[a]
  );

  for (let i = 0; i < n; i++) {
    edges_cnt[sortedKeys[i]] = n - i;
  }

  for (const [s, d] of roads) {
    res += edges_cnt[s];
    res += edges_cnt[d];
  }

  return res;
};
