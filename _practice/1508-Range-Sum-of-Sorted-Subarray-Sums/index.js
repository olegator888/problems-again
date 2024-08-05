/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const mod = Math.pow(10, 9) + 7;
    const newArr = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            newArr.push(sum);
        }
    }
    newArr.sort((a, b) => a - b);
    let res = 0;
    for (let i = left - 1; i < right; i++) {
        res += newArr[i];
    }
    return res % mod;
};