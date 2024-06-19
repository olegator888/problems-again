/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSeq = {};
  for (const n of nums) {
    numsSeq[n] = 0;
  }
  let longest = 0;
  for (const n of Object.keys(numsSeq).map(Number)) {
    const prev = n - 1;
    const next = n + 1;
    const prevSeq = numsSeq[prev] || 0;
    const nextSeq = numsSeq[next] || 0;
    const curSeq = prevSeq + nextSeq + 1;
    numsSeq[n - prevSeq] = curSeq;
    numsSeq[n + nextSeq] = curSeq;
    longest = Math.max(longest, curSeq);
  }

  return longest;
};
