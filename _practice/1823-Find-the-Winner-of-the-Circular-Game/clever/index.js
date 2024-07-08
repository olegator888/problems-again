/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const players = Array(n)
    .fill(null)
    .map((_, i) => i + 1);

  while (players.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      players.push(players.shift());
    }
    players.shift();
  }

  return players[0];
};
