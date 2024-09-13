// total sam

var plusOne = function (digits) {
  let carry = 0,
    one = 1;
  for (let i = digits.length - 1; i > -1; i--) {
    const newDigit = digits[i] + carry + one;
    digits[i] = newDigit % 10;
    carry = newDigit > 9 ? 1 : 0;
    one = 0;
  }
  if (carry) digits.unshift(1);
  return digits;
};
