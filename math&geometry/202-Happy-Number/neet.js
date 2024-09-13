var isHappy = function (n) {
  const sumSquareDigits = (n) => {
    let res = 0;

    while (n) {
      res += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }

    return res;
  };

  let slow = n,
    fast = sumSquareDigits(n);

  while (slow !== fast) {
    fast = sumSquareDigits(fast);
    fast = sumSquareDigits(fast);
    slow = sumSquareDigits(slow);
  }

  return fast === 1;
};
