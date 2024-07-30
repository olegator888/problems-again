/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0

    for (let i = 0; i < rating.length; i++) {
      let smaller_left = 0;
      let larger_right = 0;
      for (let j = 0; j < rating.length; j++) {
        if (j < i && rating[j] < rating[i]) {
          smaller_left++;
        }
        if (j > i && rating[j] > rating[i]) {
          larger_right++;
        }
      }
      let larger_left = i - smaller_left;
      let smaller_right = rating.length - i - 1 - larger_right;
      res += smaller_left * larger_right + smaller_right * larger_left;
    }

    return res;
};