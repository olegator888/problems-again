/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let res = -Infinity;
    for (let i = 0; i < arrays.length; i++) {
        for (let j = i + 1; j < arrays.length; j++) {
            res = Math.max(res, arrays[j][arrays[j].length - 1] - arrays[i][0], arrays[i][arrays[i].length - 1] - arrays[j][0]);
        }
    }
    return res;
};