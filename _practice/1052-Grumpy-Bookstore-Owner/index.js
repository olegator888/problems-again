/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let satisfied = 0;
  let l = 0;
  let max_window = 0;
  let window = 0;

  for (let r = 0; r < customers.length; r++) {
    if (grumpy[r]) {
      window += customers[r];
    } else {
      satisfied += customers[r];
    }

    if (r - l + 1 > minutes) {
      window -= grumpy[l] * customers[l];
      l += 1;
    }

    max_window = Math.max(max_window, window);
  }

  return satisfied + max_window;
};
