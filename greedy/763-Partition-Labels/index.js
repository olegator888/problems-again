// total sam

var partitionLabels = function (s) {
  const last_idx = {};

  for (let i = 0; i < s.length; i++) {
    last_idx[s[i]] = i;
  }

  const parts = [];

  for (let i = 0; i < s.length; i++) {
    const curCharLastIdx = last_idx[s[i]];

    if (parts.length === 0 || i > parts[parts.length - 1]) {
      parts.push(curCharLastIdx);
    }

    parts[parts.length - 1] = Math.max(parts[parts.length - 1], curCharLastIdx);
  }

  return parts.map((n, i, arr) => (i === 0 ? n + 1 : n - arr[i - 1]));
};

console.log(partitionLabels("eccbbbbdec"));
