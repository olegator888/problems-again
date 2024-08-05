/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const cnt = {};

    for (const s of arr) {
        cnt[s] = (cnt[s] || 0) + 1;
    }

    for (const s of arr) {
        if (cnt[s] === 1) {
            k -= 1;
        }
        if (k === 0) {
            return s;
        }
    }

    return "";
};