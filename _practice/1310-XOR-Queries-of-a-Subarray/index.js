// total sam
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  /**
 to get prefix of [l, r] basically we need to prefix[r] ^ prefix[l - 1]
 but in this case if l == 0 we will get index error
 to solve this we can check if l == 0 then just res.append(prefix[r])
 but there is more concise way to do it - start prefix with 0 (x ^ 0 always gives x)
 and in the loop check r + 1, l instead of r, l - 1
 */

  const prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] ^ arr[i]);
  }

  const res = [];

  for (const [l, r] of queries) {
    res.push(prefix[r + 1] ^ prefix[l]);
  }

  return res;
};
