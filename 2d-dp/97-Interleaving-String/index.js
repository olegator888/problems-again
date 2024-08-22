// sam with little bit of drawing

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const cache = {};
  const getKey = (i1, i2) => `${i1}_${i2}`;

  const helper = (i1, i2) => {
    let i3 = i1 + i2;
    const key = getKey(i1, i2);

    // return cached value
    if (cache[key] !== undefined) return cache[key];

    // both strings are finished
    if (i1 === s1.length && i2 === s2.length) return true;

    // one string is finished and another is not
    if (i1 === s1.length && i2 < s2.length) {
      return s3.slice(i3) === s2.slice(i2);
    }
    if (i2 === s2.length && i1 < s1.length) {
      return s3.slice(i3) === s1.slice(i1);
    }

    // no valid character found
    if (s1[i1] !== s3[i3] && s2[i2] !== s3[i3]) return false;

    let res = false;
    if (s1[i1] === s3[i3]) {
      res = res || helper(i1 + 1, i2);
    }
    if (s2[i2] === s3[i3]) {
      res = res || helper(i1, i2 + 1);
    }

    cache[key] = res;
    return res;
  };

  return helper(0, 0);
};
