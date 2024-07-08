/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const friends = Array(n).fill(true);
  let stillInTheGame = n;

  let steps = k;
  let current = 0;

  while (stillInTheGame > 1) {
    while (steps) {
      if (friends[current]) {
        steps--;
      }
      if (steps) {
        if (current < n - 1) {
          current += 1;
        } else {
          current = 0;
        }
      }
    }
    friends[current] = false;
    steps = k;
    stillInTheGame--;
  }

  return friends.findIndex((friend) => friend) + 1;
};
